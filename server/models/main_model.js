var mongoose = require("mongoose");

var NotesSchema = new mongoose.Schema({
	content: { type: String, required: true, minlength: 3 }
}, { timestamps: true });

mongoose.model('Notes', NotesSchema);
var Notes = mongoose.model('Notes');
