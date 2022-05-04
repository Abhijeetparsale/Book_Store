import Book from '../models/book.model';
import { client } from '../config/redis';





export const postBook = async (body) => {
    const bookDetails = await Book.findOne({ bookName: body.bookName,userID: body.userID})
    // console.log(bookDetails)
    if (bookDetails) {
        throw new Error('Book already posted')
    }
    else {
        const data = await Book.create(body);
        return data;
    }
};

export const getAllBooks = async () => {
    const data = await Book.find();
   console.log(data)
    if (data.length === 0) {
        throw new Error("No Book Present")
    }
    else {
         await client.set('getAllBooks',JSON.stringify(data))
        return data;
    }
};
