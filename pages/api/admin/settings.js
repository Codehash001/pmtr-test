import sql from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await sql`
        SELECT value FROM settings WHERE key = 'pdf_download_link'
      `;
      const pdfLink = result[0]?.value || '';
      return res.status(200).json({ pdfLink });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to fetch settings' });
    }
  }

  if (req.method === 'PUT') {
    const { pdfLink } = req.body;

    if (!pdfLink) {
      return res.status(400).json({ error: 'PDF link is required' });
    }

    try {
      await sql`
        INSERT INTO settings (key, value) 
        VALUES ('pdf_download_link', ${pdfLink})
        ON CONFLICT (key) DO UPDATE SET value = ${pdfLink}
      `;
      return res.status(200).json({ success: true, message: 'Settings updated successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to update settings' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
