import express from 'express';
import {getEvents,createEvent} from '../controllers/events.js';


const router = express.Router();

router.get('/all',getEvents);
router.post('/',createEvent);

export default router;
