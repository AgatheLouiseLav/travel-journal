const Trip = require('../models/trip');
const Friend = require('../models/friend')

async function index(req, res) {
  const trips = await Trip.find({});
  res.render('trips/index', { title: 'My Trips', trips });
}

async function show(req, res) {
  try {
    const trip = await Trip.findById(req.params.id);
    const friends = await Friend.find({trip: trip._id})
    res.render('trips/show', { title: 'Trip Details', trip, friends });
  } catch (err) {
    console.log(err);
    res.redirect('/trips');
  }
}

function newTrip(req, res) {
  res.render('trips/new', { title: 'Add Trip', errorMsg: ''});
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const trip = await Trip.create(req.body);
    res.redirect(`/trips/${trip._id}`);
  } catch (err) {
    console.log(err);
    res.render('trips/new', { errorMsg: err.message });
  }
}

module.exports = {
  index,
  new: newTrip,
  create,
  show
};
