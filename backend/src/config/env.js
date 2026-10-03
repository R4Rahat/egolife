import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const MONGO_URL = process.env.MONGO_URL;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN= process.env.JWT_EXPIRES_IN

export const email = process.env.ADMIN_EMAIL;
export const password = process.env.ADMIN_PASSWORD;