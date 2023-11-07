const mongoose = require("../config/db");

const Schema = mongoose.Schema;

var noteSchema = new Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model("Note", noteSchema);
