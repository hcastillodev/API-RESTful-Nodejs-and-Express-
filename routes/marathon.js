const Marathon = require("../models/marathon"); //Model

//re-use code
const apiResponse = (req, res, err, data) => {
  if (err) {
    res.status(500).send({
      message: `Server error: ${err.message}`,
    });
  } else {
    if (data) {
      res.status(200).send({
        data,
      });
    } else {
      res.status(404).send({
        message: "No Data in API",
      });
    }
  }
};

//CRUD
//get all marathons from DB
const getMarathons = async (req, res) => {
  await Marathon.find({})
    .populate('country','name -_id')
    .sort("_id:-1")
    .exec((err, data) => apiResponse(req, res, err, data));
};

//Create a marathon from DB
const postMarathon = async (req, res) => {
  let marathon = new Marathon(req.body);
  console.log(req.body);
  await marathon.save((err, data) => apiResponse(req, res, err, data));
};

//get a marathon to update from DB
const getMarathon = async (req, res) => {
  await Marathon.findById(req.params.id).exec((err, data) =>
    apiResponse(req, res, err, data)
  );
};

//Update a marathon from DB
const putMarathon = async (req, res) => {
  await Marathon.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => apiResponse(req, res, err, data)
  );
};

//Delete a marathon from DB
const deleteMarathon = async (req, res) => {
  await Marathon.findByIdAndRemove(req.params.id, (err, data) =>
    apiResponse(req, res, err, data)
  );
};

module.exports = {
  getMarathons,
  postMarathon,
  getMarathon,
  putMarathon,
  deleteMarathon,
};
