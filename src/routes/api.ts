/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/apiController';
const router = express.Router();

router.get('/plc', controller.getdata);


export = router;