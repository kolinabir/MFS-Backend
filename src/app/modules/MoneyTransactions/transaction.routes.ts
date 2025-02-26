import { Router } from 'express';
import { TransactionController } from './transaction.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { UserController } from '../User/user.controller';

const router = Router();

router.get(
  '/',
  auth(USER_ROLE.USER, USER_ROLE.AGENT),
  UserController.getAllTransactions,
); //done

router.post(
  '/send-money',
  auth(USER_ROLE.USER),
  TransactionController.sendMoney,
); //done

router.post('/cash-out', auth(USER_ROLE.USER), TransactionController.cashOut); //done

router.post('/cash-in', auth(USER_ROLE.AGENT), TransactionController.cashIn);

router.get(
  '/balance',
  auth(USER_ROLE.USER, USER_ROLE.AGENT, USER_ROLE.ADMIN),
  TransactionController.getBalance,
);

router.get(
  '/transaction/:phoneNo',
  auth(USER_ROLE.ADMIN),
  TransactionController.getTransactionsByPhoneNo,
);

export const transactionRoutes = router;
