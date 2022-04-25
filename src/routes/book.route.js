import express from 'express';
import * as bookController from '../controllers/book.controller';
import { newBookValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('', newBookValidator, bookController.postBook);

router.get('',userAuth, bookController.getAllBooks);





export default router;