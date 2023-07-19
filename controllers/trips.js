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
  req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
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

async function update(req, res) {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/trips/${req.params.id}`);
  } catch {
    console.log(err);
  }	
};

async function edit(req, res) {
  try{
    const trip = await Trip.findById(req.params.id);
	  res.render('trips/edit',{
		title: 'Edit Trip!!!!!!',
		trip
	});
  } catch {
    console.log(err)
  }
};

async function deleteTrip(req, res) {
  try{
    await Trip.findByIdAndDelete(req.params.id);
	  res.redirect('/trips')
  }catch{
    console.log(err)
  }
};

module.exports = {
  index,
  new: newTrip,
  create,
  show,
  edit,
  update,
  delete: deleteTrip
};
