import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(cors())
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}))
app.use(cookieParser())

export {app}