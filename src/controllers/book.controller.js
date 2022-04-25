// import HttpStatus from 'http-status-codes';
// import * as BookService from '../services/book.service';


// export const postBook = async (req, res) => {
//   try {

//     const data = await BookService.postBook(req.body);
//     res.status(HttpStatus.CREATED).json({
//       code: HttpStatus.CREATED, 
//       data: data,
//       message: 'Book posted successfully'
//     });
//   } catch (error) {
//     res.status(HttpStatus.CONFLICT).json({
//       code: HttpStatus.CONFLICT,
//       message: `${error}`
//     });
//   }
// };

// export const getAllBooks = async (req, res) => {
//   try {

//       const data = await BookService.getAllBooks(req.body);
//       res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'All books fetched successfully'
//   });
//   }catch (error) {      
//       res.status(HttpStatus. NOT_FOUND).json({
//       code: HttpStatus. NOT_FOUND,
//       message: `${error}`
//   });
//   }
// };