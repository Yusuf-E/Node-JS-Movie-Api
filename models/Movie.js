const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    category: String,
    country: String,
    year: Number,
    Imdb_score: Number,
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('movie', MovieSchema);