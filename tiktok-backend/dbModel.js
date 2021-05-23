import mongoose from 'mongoose';

const schema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    messages: String,
    shares: String
});

export default mongoose.model('videos', schema);