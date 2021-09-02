import { db } from './db';

export const getRequest = async (requestId) => {
    const connection = db.getConnection();
    const request = await connection.collection('requests').findOne({ id: requestId });
    return request;
}