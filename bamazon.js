//first, create Bamazon database, table, and insert dummy data
//require mysql, inquirer, and cli tables

var mySQL = require("mysql");
var inquirer = require("inquirer");
// var Table = require('cli-table');


// //instantiating table, copy/pasted from npmjs
// var table = new Table ({
//             head: ["id", "item_name", "department", "price", "stock_inventory"],
//             colWidths: [13, 35, 30, 10, 10]
//         });
//         for (var i = 0; i < res.length; i++) {
//             var infoArray = [res[i].item_id, res[i].item_name,  res[i].department, res[i].price, res[i].stock_inventory]; 
//             table.push(infoArray);
//         };        
//         console.log(table.toString());
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
//print table to terminal
//create a function to display the table to the user/shopper
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
//ask user if they want to purchase an item
//give user the option to purchase an item
//ask user how many they want to buy


var askShopper = function(res){
				inquirer.prompt([{
					type:"input",
					name:"choice",
					message:"What would you like to buy? Please refer to item number."
				}, 
				{	
					type:"input",
					name:"quantity",
					message:"How many would you like to purchase?"
				}])
				.then(function(answer){
					var correct = false;
//^^^^creates a prompt function to ask the user what they want to buy

//for loop checks to see if the user's response matches any of the choices 
//in the item_name array
					for(var i=0; i<res.length;i++){
						if(res[i].id==answer.choice){
							correct=true;
							var selection=answer.choice;
							var id=i+1;
			}

		}
		//query database for stock inventory of chosen item to buy
		var query = "SELECT * FROM products";
     connection.query(query,function(err, res) {
        for (var i = 0; i < res.length; i++) {
          //console.log(res[i]);
          //check if quantity desired is less than available stock inventory for that item
          if (answer.quantity<res[answer.choice-1].stock_inventory){
          	//subtract quantity desired from inventory for that item
          	var newStockInventory = res[answer.choice-1].stock_inventory-answer.quantity;
          	//console.log("******"+newStockInventory);
          }
          var update = connection.query("UPDATE products SET stock_inventory = '" + (res[id].stock_inventory - answer.quantity)
      //var update = connection.query("UPDATE products SET stock_inventory = " (res[id].stock_inventory-answer.quantity)
      + "'", function(err, res2){
      	console.log("Enjoy your fabulous purchase!")
      	//displayTable();
      })
      	//+ newStockInventory + " WHERE id = " + answer.choice
			connection.query(query,function(err, res) {
			//	console.log(res);
})
      };
	})
 })
}

//ask user how many they want to buy
// check inventory for sufficient quantity
//either respond "insufficient quantity" or fulfill the order and update inventory 





