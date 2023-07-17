const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
	name: {type: String, required: true},
	from: {type: Date, required: true}, 
	to: {type:Date, required: true},
	learn: {type:String, required: true},
	image: {type: String, required: true},
	sites: {type:String, required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);