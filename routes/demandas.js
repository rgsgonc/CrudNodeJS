exports.list = function(req, res){
  req.getConnection(function(err,connection){    
        var query = connection.query('SELECT * FROM demandas',function(err,rows){        
            if(err)
                console.log("Error Selecting : %s ",err );   
            res.render('demandas',{page_title:"Demandas",data:rows});           
         });
         //console.log(query.sql);
    });
};

exports.add = function(req, res){
  res.render('add_demandas',{page_title:"Adicionar Demanda"});
};

exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM demandas WHERE id = ?',[id],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('edit_demandas',{page_title:"Demanda",data:rows});
         });
         //console.log(query.sql);
    }); 
};

exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            solucaoproduto    : input.solucaoproduto,
            oquefazer         : input.oquefazer,
            versaoproduto     : input.versaoproduto,
            baseservidor      : input.baseservidor,
            prazo             : input.prazo, 
            impactodesenv     : input.impactodesenv,
            clienteespecifico : input.clienteespecifico
        };
        
        var query = connection.query("INSERT INTO demandas set ? ",data, function(err, rows){
          if (err)
              console.log("Erro ao inserir a demanda : %s ",err );
          res.redirect('/demandas');   
        });
       // console.log(query.sql); get raw query
    });
};

exports.save_edit = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            solucaoproduto    : input.solucaoproduto,
            oquefazer         : input.oquefazer,
            versaoproduto     : input.versaoproduto,
            baseservidor      : input.baseservidor,
            prazo             : input.prazo, 
            impactodesenv     : input.impactodesenv,
            clienteespecifico : input.clienteespecifico
        
        };
        
        connection.query("UPDATE demandas set ? WHERE id = ? ",[data,id], function(err, rows){
          if (err)
              console.log("Erro ao alterar a demanda : %s ",err );
          res.redirect('/demandas');
        });
    });
};

exports.gerar = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            solucaoproduto    : input.solucaoproduto,
            oquefazer         : input.oquefazer,
            versaoproduto     : input.versaoproduto,
            baseservidor      : input.baseservidor,
            prazo             : input.prazo, 
            impactodesenv     : input.impactodesenv,
            clienteespecifico : input.clienteespecifico
        
        };
        
        connection.query("SELECT * FROM demandas WHERE id = ? ",[data,id], function(err, rows){
          if (err)
              console.log("Erro ao consultar a demandaa : %s ",err );
          res.redirect('/demandas');
        });
    });
};

exports.delete_demandas = function(req,res){
     var id = req.params.id;
     req.getConnection(function (err, connection) {
        connection.query("DELETE FROM demandas  WHERE id = ? ",[id], function(err, rows){
             if(err)
                 console.log("Erro ao deletar a demanda : %s ",err );
             res.redirect('/demandas');
        });
     });
};


