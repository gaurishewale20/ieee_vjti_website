import express from 'express';
import {getEvents,getEvent,createEvent,updateEvent,deleteEvent} from '../controllers/events.js';
import admin from '../middleware/admin.js';

const router = express.Router();

router.get('/:id', getEvent);
router.get('/',getEvents);
router.post('/',admin,createEvent);
router.patch('/:id', admin, updateEvent);
router.delete('/:id', admin, deleteEvent);
export default router;
