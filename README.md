# Init
Para iniciar a aplicação entrar na pasta do projeto e executar o comando.
```
node app.js
```
E acessar a url
```
http://localhost:4300/
```

# CrudNodeJS
* http://teknosains.com/i/simple-crud-nodejs-mysql (Tutorial)
* https://pure-escarpment-92493.herokuapp.com (Heroku)

# SQL
```
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

ALTER TABLE customer
ADD site VARCHAR(50);

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `descricao` text NOT NULL,
  `valorcompra` varchar(20) NOT NULL,
  `valorvenda` varchar(20) NOT NULL,
  `lucro` varchar(20) NOT NULL,
  `disponivel` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

ALTER TABLE produtos
ADD quantidade VARCHAR(50);

CREATE TABLE IF NOT EXISTS `demandas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `solucaoproduto` varchar(200) NOT NULL,
  `oquefazer` varchar(500) NOT NULL,
  `versaoproduto` varchar(200) NOT NULL,
  `baseservidor` varchar(20) NOT NULL,
  `prazo` varchar(20) NOT NULL,
  `impactodesenv` varchar(20) NOT NULL,
  `clienteespecifico` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;
--
-- Dumping data for table`customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `email`, `phone`) VALUES
(2, 'Nadya Eka', 'Jl. Ciwidey no 20', 'nadya@yahoo.com', '086454743743'),
(3, 'Amali', 'Jl. kemandoran no 10 Jakarta', 'amalia@langit.com', '03937263623'),
(4, 'Angel ', 'Jl. Ciledug no 45A. tanggerang', 'angel@gmail.com', '082271626121'),
(5, 'Ujang', 'Jl. ribut no 90 A', 'ujang@gmail.com', '07846352532'),
(6, 'Memet', 'Blok cepu no 14. Bandung', 'memet@ongkek.com', '038372636232'),
(9, 'Agung', 'Jl st Petersburg no 34. Russia', 'agung@yahoo.com', '038373273262'),
(10, 'Jhon Taylor', 'St paris A . Block 43. paris', 'jtaylor@yahoo.com', '039223232323');
```
