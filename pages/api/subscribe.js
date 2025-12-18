import sql from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, walletAddress } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!walletAddress) {
    return res.status(400).json({ error: 'Wallet must be connected' });
  }

  try {
    // Insert email and wallet into database
    await sql`
      INSERT INTO email_subscribers (email, wallet_address)
      VALUES (${email}, ${walletAddress})
      ON CONFLICT (email) DO UPDATE SET wallet_address = ${walletAddress}
    `;

    // Get the PDF download link from settings
    const result = await sql`
      SELECT value FROM settings WHERE key = 'pdf_download_link'
    `;

    const pdfLink = result[0]?.value || '#';

    return res.status(200).json({ 
      success: true, 
      message: 'Subscribed successfully!',
      pdfLink 
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to save email. Please try again.' 
    });
  }
}
