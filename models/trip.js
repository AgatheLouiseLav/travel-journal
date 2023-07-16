const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siteSchema = new Schema({
		name: {type: String, required: true}
},{
  timestamps: true
});

const countrySchema = new Schema({
	name: { type: String, required: true },
	date: { type: Number, required: true},
	sites: [siteSchema],
	knowledgeEarn: String,
	image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);