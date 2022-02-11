import express from 'express';
import { createRouter } from './routes';
const app = express();
app.use('/', createRouter());
app.listen(3000, () => {
    console.log('app is running on port 3000');
});
