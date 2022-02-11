import { Router } from 'express';
import users from './users';

export async function createRouter() {
    const router = Router();
    users(router);
    return router;
}
