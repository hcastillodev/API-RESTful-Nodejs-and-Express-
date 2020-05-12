const mongoose = require("mongoose");
Schema = mongoose.Schema;

CountrySchema = new Schema({
  code: {
    type: String,
    required: [true, "Country code is required"],
    unique: true,
  },

  name: {
    type: String,
    required: [true, "Country name is required"],
    unique: true,
  }
});

module.exports = mongoose.model("Country", CountrySchema);
