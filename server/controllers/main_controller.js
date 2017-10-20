
var mongoose = require("mongoose");

var NotesDB = mongoose.model('Notes');

module.exports = {
	show: function(req, res){
		// var newnotes = new NotesDB({content: "This is the fifth one"});
		// newnotes.save(function (err) {
		// 	if (err) {
		// 		console.log("Error when creating task*******************", err);
		// 		res.render("index", { results: [], error: err });
		// 	} else {
		// 		console.log(newnotes);
		// 		res.render("index")
		// 		}
		// 	})
		NotesDB.find({}, function (err, results) {
			if (err) {
				console.log(err)
			} else {
				res.json(results);
				console.log(results);
			}

		})
	},
	notes: (req, res) =>{
		NotesDB.find({}, function(err, results){
			if (err){
				console.log(err)
			}else{
				res.json(results);
				console.log(results);
			}

		})
	},
	add: (req, res) => {
		var newnotes = new NotesDB(req.body);
		newnotes.save(function (err) {
			if (err) {
				console.log(err)
			} else {
				res.json({message: "success"});
			}
		})
	}

}