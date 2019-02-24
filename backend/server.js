const express = require('express');



const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('./config');
var add = require("./add");
var update = require("./update");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    console.log("hey")
    sql.query("SELECT * FROM todo", function(err, results){
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    })
});



app.get('/:id', function(req, res){
    
    sql.query("SELECT * FROM todo WHERE id = ?",[req.params.id], function(err, results){
        if(err){
            console.log(err);
        }
        else{
        res.json(results);
        }
    });

});

app.post('/add', add.addTodo);

app.post('/update/:id', update.updateTodo);



app.listen(PORT, function(){
    console.log("Server is up and running on PORT: "+PORT)
});