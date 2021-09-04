import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema({
    title: String,
    date: String,
    location: String,
    event_desc: String,
    photo: String,
    reg_link: String
})

var EventsModel = mongoose.model("EventsModel", eventsSchema, 'eventsmodel');

export default EventsModel;