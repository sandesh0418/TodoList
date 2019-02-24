const sql = require('mysql');
var con = sql.createConnection({
    host: 'localhost',
    user:'root',
    password: ''
});

con.connect(function(err){
    if(err){
        console.log("Connection Error: "+err);
    }
    else{console.log("Database is Connected")
        con.query("CREATE DATABASE IF NOT EXISTS `todos`", function(err, results){
            console.log("Database is created");
            con.query("USE todos");
            var query = "CREATE TABLE IF NOT EXISTS `todo`(id INT AUTO_INCREMENT PRIMARY KEY, todo_description VARCHAR(100), todo_responsible VARCHAR(40), todo_priority VARCHAR(10), todo_completed VARCHAR(10)) ";
            con.query(query);
            console.log("Table is created");
        })

}
});
module.exports = con;