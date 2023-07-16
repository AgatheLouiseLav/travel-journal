const Trip = require('../models/trip');

async function index(req, res) {
  const trips = await Trip.find({});
  res.render('trips/index', { title: 'My Trips', trips });
}

module.exports = {
  index
};
