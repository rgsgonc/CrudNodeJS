function addUser(){         
    window.location.href = '/customers/add';
}

function addProdutos(){         
    window.location.href = '/produtos/add';
}

function addDemandas(){         
    window.location.href = '/demandas/add';
}

function cancelAdd(){
    window.location.href = '/customers';
}

function cancelAddProdutos(){
    window.location.href = '/produtos';
}

function cancelAddDemandas(){
    window.location.href = '/demandas';
}

function calculaLucro(){
    var valorCompra = document.getElementById("valorcompra").value;
    var valorVenda = document.getElementById("valorvenda").value;
    var lucro = document.getElementById("lucro").value = valorVenda - valorCompra;
    if(lucro < 0){
        alert("Você não está tendo lucro!");
    }
}

function criaPopUp(){
    var myWindow;
    myWindow = window.open("", "myWindow", "width=800,height=600");
    var solucao = document.getElementById("solucaoproduto").value;
    alert(solucao);
    
}

