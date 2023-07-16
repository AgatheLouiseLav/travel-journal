const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
	name: String,
	from: Date, 
	to: Date,
	learn: String,
	image: String,
	sites: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);