import Book from '../models/book.model';




export const postBook = async (body) => {
    const bookDetails = await Book.findOne({ Title: body.Title})
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
        return data;
    }
};
