//setup our server
const express = require('express');
const app = express();

const controllers = require('../database/index.js');

const bodyParser = require('body-parser');


app.use(express.static('../client/dist'))


//middleware
app.use('/groceries', (req, res, next) => {
	console.log('node variables:', process.env);
	console.log(`${req.method} request received at ${req.url}`);
	next();
})

//expose a GET route /groceries
app.get('/groceries', (req, res) => {
	res.send('got ur get');
	controllers.getAllGroceries((err, data) => {
		if(err){
			res.status(503).send(err);
			console.log('get route failed');
		} else {
			res.send(data);
			console.log('server got data: ', data);
		}
	});
});

//expose a POST route /groceries
app.post('/groceries', bodyParser.json(), (req, res) => {
	//res.send('posted');
	controllers.addOneGrocery(req.body, (err) => {
		if(err) {
			res.status(500).send();
		} else {
			res.status(201).send();
			console.log('server has parsed and sent data: ', data);
		}
	});
})

//listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
	console.log("We are listening on port 3000!!", PORT);
});
//postman can help.