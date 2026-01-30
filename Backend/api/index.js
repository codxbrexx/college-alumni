import { app } from '../app.js';

import { connectDB } from '../src/database/dbConnect.js';

export default async function handler(req, res) {
    await connectDB();
    return app(req, res);
}
