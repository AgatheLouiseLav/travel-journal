const Friend = require('../models/friend');
const Trip = require('../models/trip');

async function create(req, res) {
  const trip = await Trip.findById(req.params.id);
  try {
    req.body.trip = req.params.id
    const friend = await Friend.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/trips/${trip._id}`);
}


async function getFriends(req, res){
   const trip = await Trip.findById(req.params.id); 
   const friends = await Friend.find({ trip: trip._id });
   console.log(friends);
   res.render('/trips/:id', { trip, friends });
}

async function show(req, res) {
  try {
    const friends = await Friend.findById(req.params.id);
    res.render('/allfriends', { title: 'All Friends', friends });
  } catch (err) {
    console.log(err);
    res.redirect('/trips');
  }
}


module.exports = {
  create,
  getFriends,
  show
};