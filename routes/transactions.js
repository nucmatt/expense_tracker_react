import { Router } from 'express';
const router = Router();
import { getTransactions } from '../controllers/transactioncontroller.js';
// Here the '/' refers to whatever route this export connects to in server.js in the app.use statement uses this file. (/api/v1/transactions in this case)
// router.get('/', (req, res) => res.send('Hello'));
router.route('/').get(getTransactions);

export default router;
