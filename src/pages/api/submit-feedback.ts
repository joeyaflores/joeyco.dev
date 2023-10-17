import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../utils/mongo-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client.connect();
    const collection = client.db("test-db").collection("feedback");
    const insert = await collection.insertOne(req.body);
    res.status(200).json(insert);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  } finally {
    await client.close();
  }
}