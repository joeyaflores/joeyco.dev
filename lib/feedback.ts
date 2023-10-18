import clientPromise from '../utils/mongo-client';

export async function bug(description: string, feedback_type: string) {
    const client = await clientPromise;
    const collection = client.db('test-db').collection('feedback');
    const insert = await collection.insertOne({
        description,
        feedback_type
    });
    return insert;
}

export async function feature(description: string, feedback_type: string) {
    const client = await clientPromise;
    const collection = client.db('test-db').collection('feedback');
    const insert = await collection.insertOne({
        description,
        feedback_type
    });
    return insert;
}

export async function ui(description: string, feedback_type: string) {
    const client = await clientPromise;
    const collection = client.db('test-db').collection('feedback');
    const insert = await collection.insertOne({
        description,
        feedback_type
    });
}
