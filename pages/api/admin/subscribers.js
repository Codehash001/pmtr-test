import sql from '../../../lib/db';
import { ethers } from 'ethers';
import { config } from '../../../dapp.config';
import PMTR_CONTRACT from '../../../artifacts/contracts/PMTR.sol/PMTR.json';

const PMTR_ABI = PMTR_CONTRACT.abi;

async function checkNFTOwnership(walletAddress) {
  try {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL);
    const contract = new ethers.Contract(config.contractAddress, PMTR_ABI, provider);
    const balance = await contract.balanceOf(walletAddress);
    return Number(balance) > 0;
  } catch (error) {
    console.error('Error checking NFT ownership:', error);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const subscribers = await sql`
      SELECT id, email, wallet_address, created_at 
      FROM email_subscribers 
      ORDER BY created_at DESC
    `;

    // Check NFT ownership for each subscriber
    const subscribersWithNFT = await Promise.all(
      subscribers.map(async (sub) => {
        const ownsNFT = sub.wallet_address ? await checkNFTOwnership(sub.wallet_address) : false;
        return {
          ...sub,
          owns_nft: ownsNFT
        };
      })
    );

    return res.status(200).json({ subscribers: subscribersWithNFT });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
}
