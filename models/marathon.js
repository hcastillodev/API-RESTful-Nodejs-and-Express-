const mongoose = require("mongoose");
Schema = mongoose.Schema;

MarathonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Marathon name is required"],
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    required: [true, "Country name is required"],
  },
  location: {
    type: String,
    required: [true, "Location name is required"],
  },
  altitude: Number,
  race_web: {
    type: String,
    lowercase: true,
  },
  race_logo: String,
  race_since: String,
  race_day: String,
  race_date: Date,
  race_type: {
    type: String,
    enum: ["City", "Trail"],
    default: "City",
  },
  distance: {
    type: Number,
    min: 42.195,
    default: 42.195,
  },
  resume: String,
});

module.exports = mongoose.model("Marathon", MarathonSchema); // MongoDB need the collection name in singular and
