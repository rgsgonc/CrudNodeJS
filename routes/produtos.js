exports.list = function(req, res){
  req.getConnection(function(err,connection){    
        var query = connection.query('SELECT * FROM produtos',function(err,rows){        
            if(err)
                console.log("Error Selecting : %s ",err );   
            res.render('produtos',{page_title:"Produtos",data:rows});           
         });
         //console.log(query.sql);
    });
};

exports.add = function(req, res){
  res.render('add_produtos',{page_title:"Adicionar Produto"});
};

exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM produtos WHERE id = ?',[id],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('edit_produtos',{page_title:"Editar Produtos",data:rows});
         });
         //console.log(query.sql);
    }); 
};

exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            nome        : input.nome,
            descricao   : input.descricao,
            quantidade   : input.quantidade,
            valorcompra : input.valorcompra,
            valorvenda  : input.valorvenda, 
            lucro       : input.lucro,
            disponivel  : input.disponivel
        };
        
        var query = connection.query("INSERT INTO produtos set ? ",data, function(err, rows){
          if (err)
              console.log("Erro ao inserir o produto : %s ",err );
          res.redirect('/produtos');   
        });
       // console.log(query.sql); get raw query
    });
};

exports.save_edit = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            nome        : input.nome,
            descricao   : input.descricao,
            quantidade   : input.quantidade,
            valorcompra : input.valorcompra,
            valorvenda  : input.valorvenda, 
            lucro       : input.lucro,
            disponivel  : input.disponivel
        
        };
        
        connection.query("UPDATE produtos set ? WHERE id = ? ",[data,id], function(err, rows){
          if (err)
              console.log("Erro ao alterar produto : %s ",err );
          res.redirect('/produtos');
        });
    });
};

exports.delete_produtos = function(req,res){
     var id = req.params.id;
     req.getConnection(function (err, connection) {
        connection.query("DELETE FROM produtos  WHERE id = ? ",[id], function(err, rows){
             if(err)
                 console.log("Erro ao deletar produto : %s ",err );
             res.redirect('/produtos');
        });
     });
};


