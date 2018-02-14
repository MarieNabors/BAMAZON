//first, create Bamazon database, table, and insert dummy data
//require mysql, inquirer, and cli tables

var mySQL = require("mysql");
var inquirer = require("inquirer");

//connect to mySQLworkbench database, "Bamazon"

var connection = mySQL.createConnection({
	host: "localhost",
	port: 3306,
	user:"root",
	password:"root",
	database: "Bamazon"
})

connection.connect(function(err){
	if (err) throw err;
	console.log("You successfully connected to your mySQL database!");
	displayTable();
})
var displayTable = function(){
	connection.query("SELECT * FROM products", function(err, res){
		for(var i=0; i<res.length; i++){
			console.log(res[i].id+" ||| " +res[i].item_name + " ||| " +
				res[i].department + " ||| " + res[i].price + " ||| " + res[i]
				.stock_inventory);
		}
		askShopper(res);
	})
}

var askShopper = function(res){
	inquirer.prompt([{
		type:"input",
		name:"choice",
		message:"Would you like to buy an item?"
	}]).then(function(answer){
		var correct = false;
		for(var i=0; i<res.length;i++){
			if(res[i].item_name==answer.choice){
				correct=true;
				var selection=answer.choice;
				var id=i;
			}
		}
	}
//ask user if they want to purchase an item
//give user the option to purchase an item
//ask user how many of their option
//instantiating table, copy/pasted from npmjs
// var table = new Table({
//     head: ['TH 1 label', 'TH 2 label']
//   , colWidths: [100, 200]
// });
 
// // table is an Array, so you can `push`, `unshift`, `splice` and friends 
// table.push(
//     ['First value', 'Second value']
//   , ['First value', 'Second value']
// );
 
// console.log(table.toString());

//create function to print table to terminal


