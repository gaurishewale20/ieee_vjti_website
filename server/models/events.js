import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema({
    title: String,
    date:String,
    location:String,
    event_desc:String,
    photo:String,
})

var EventsModel = mongoose.model('EventsModel',eventsSchema);

export default EventsModel;