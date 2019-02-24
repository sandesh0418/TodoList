const express = require('express');
const sql = require("./config");


module.exports.updateTodo = function(req,res){
    id=req.params.id;
    sql.query("SELECT * FROM todo where id = ?", id,function(err,results){
        if(err){
            res.send('data not found');
        }
        else{
            var todos =[
                req.body.todo_description ,
                req.body.todo_responsible ,
                req.body.todo_priority ,
                req.body.todo_completed,
                Number(id)
            ]
            
            
            sql.query("Update todo set todo_description = ?, todo_responsible = ?, todo_priority = ? , todo_completed = ? where id = ?",todos, function(err, results){
                if(err){
                    console.log(err)
                    res.send('Update failed')
          
                }
                else{
                    res.json({'todos' :'Updated successfully'})
                    
          
                }
            });
        }
    });
}
    