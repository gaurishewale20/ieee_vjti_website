import express from 'express';
import {getEvents,createEvent} from '../controllers/events.js';
import admin from '../middleware/admin.js';

const router = express.Router();

router.get('/',getEvents);
router.post('/',admin,createEvent);

export default router;
