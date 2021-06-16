import express from 'express';
import mongoose from 'mongoose';
import EventsModel from '../models/Events.js';

const router = express.Router();


export const getEvents = async(req,res)=>{
    try{
        const events = await EventsModel.find();
        res.status(200).json(events);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;
  
    const newEventMessage = new EventsModel({
      ...event
    });
  
    try {
      await newEventMessage.save();
  
      res.status(201).json(newEventMessage);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };


export default router;