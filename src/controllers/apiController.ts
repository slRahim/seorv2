import { Request, Response, NextFunction } from 'express';
import {result} from './appController';




// getting all posts
const getdata = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        message: result
    });
};

export default {getdata};