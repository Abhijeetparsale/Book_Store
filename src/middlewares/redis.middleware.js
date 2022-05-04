import { client } from "../config/redis"
import HttpStatus from 'http-status-codes';

export const checkgetAllBooks = async (req, res, next) => {
   
    const data = await client.get('getAllBooks');
    if(data==null){
        next();
    } else {
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: JSON.parse(data),
            message: 'Books fetched successfully from Redis'
        });
    }
}