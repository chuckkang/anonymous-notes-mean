//////  ROUTES
var controller = require('../controllers/main_controller.js');


module.exports = function Route(app){
app.get("/", controller.show),
app.get("/notes", controller.notes),
	app.post("/notes", controller.add)
//////////////////////////////////////////////
}