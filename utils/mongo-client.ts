import { MongoClient } from 'mongodb';

const uri = process.env.FEEDBACK_MONGODB_URI // Replace with your MongoDB URI

const client = new MongoClient(uri);
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      const collection = client.db("test-db").collection("feedback");
      
    
    //   const data = await collection.find({}).toArray();
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch();

export default client;
