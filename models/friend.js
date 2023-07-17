const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
		name: String,
		email: String,
		picture: String,
		trip: {type: Schema.Types.ObjectId, ref: 'Trip'}
},{
  timestamps: true
});

module.exports = mongoose.model('Friend',friendSchema);