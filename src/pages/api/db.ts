import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../utils/mongo-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client.connect();
    const db_name = process.env.MONGODB_DB
    const collection = client.db(db_name).collection("feedback");
    
    const data = await collection.find({}).toArray();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  } finally {
    await client.close();
  }
}
