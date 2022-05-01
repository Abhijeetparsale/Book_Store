import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
function routes() {
  router.get('/', (req, res) => {
    res.json('Welcome To BookStore');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRoute);
  router.use('/cart', cartRoute);
  router.use('/list', wishlistRoute)
  return router;
}

export default routes;
