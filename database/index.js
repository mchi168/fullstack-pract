//npm install mysql
//connect to db
var mysql = require('mysql')
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'user',
	password: 'password',
	database: 'grocery_list'
});

connection.connect((err)=>{
	if(err){
		throw err;
	} else {
		console.log('connected to dB');
	}
});
//function that gets all groceries from table

const getAllGroceries = function(whenGroceries) {
	connection.query('SELECT * FROM grocery_list', (err, results, fields) => {
		if(err){
			console.log('select query failed');
			whenGroceries(err, 'null');
			//throw err;
		} else {
			console.log('got grocery');
			whenGroceries(null, results);
		}
	});
}
// sample invocation;
// getAllGroceries(function(err, results){
// 	console.log(groceries);
// });
module.exports.getAllGroceries = getAllGroceries;

//function that inserts grocery into table
//VALUES(?, ?), [item.name, item.quantity]
const addOneGrocery = function (item, whenAdded) {
	connection.query(`INSERT INTO groceries (name, quantity) VALUES ("${item.name}", ${item.quantity});`, (err, results)=>{
		if(err){
			console.log('insert query failed');
			whenAdded(err);
		} else {
			whenAdded(null, results);
		}
	});
}
//sample invocation
//addOneGrocery({name:'kombucha', quantity: 100}, function(err){
	// if(err){
	// 	console.log('something went wrong', err);
	// } else{
	// 	console.log('item added!!');
	// }
//});
module.exports.addOneGrocery = addOneGrocery;