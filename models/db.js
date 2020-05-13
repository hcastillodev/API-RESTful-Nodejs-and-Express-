const mongoose = require("mongoose");
config = require("../config");
const c = console.log;

class DataBase {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        c("Connection successful to MongoDB");
      })
      .catch((err) => {
        c(`Error connecting to MongoDB ${err.message}`);
      });
  }
}

module.exports = new DataBase();
