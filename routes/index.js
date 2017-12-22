
/*
 * GET home page.
 */
exports.index = function(req, res){
  req.getConnection(function(err,connection){    
        var query = connection.query('SELECT * FROM customer',function(err,rows)
        {        
            if(err)
                console.log("Error Selecting : %s ",err );   
            res.render('customers',{page_title:"Funcionários",data:rows});
                
           
         });
         
         //console.log(query.sql);
    });
  
};