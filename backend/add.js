const express = require('express');
const sql = require("./config.js");

module.exports.addTodo = function(req, res){

    var todos =[
        req.body.todo_description ,
        req.body.todo_responsible ,
        req.body.todo_priority ,
        req.body.todo_completed
    ]
    console.log(todos);
  
    const q = "INSERT INTO todo(todo_description ,todo_responsible, todo_priority, todo_completed) VALUES(?, ?, ?, ?)";
    sql.query(q,todos, function(err, results,fields){
        if(err){
            console.log(err)
            res.send('added new todos failed')
            
  
        }
        else{
            res.json({'todos' :'todos added successfully'})
            console.log(results);
  
        }
    });
        

}