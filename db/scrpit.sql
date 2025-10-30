create database db_lionbook;

use db_lionbook;

create table tbl_usuario(
id int not null primary key auto_increment,
login varchar(50),
senha varchar(50)
);

create table tbl_livro(
id int not null primary key auto_increment,
titulo varchar(100),
data_publicacao date not null,
estoque int not null,
isbn varchar(50) not null
);

create table tbl_movimentacao(
id int not null primary key auto_increment,
estoque int not null,
data_movimentacao date not null,
id_livro int not null,
id_usuario int not null,
id_tipo_movimentacao int not null,
constraint fk_tbl_movimentacao_tbl_livro foreign key (id_livro) references tbl_livro(id),
constraint fk_tbl_movimentacao_tbl_usuario foreign key (id_usuario) references tbl_usuario(id),
constraint fk_tbl_movimentacao_tipo_movimentacao foreign key (id_tipo_movimentacao) references tbl_tipo_movimentacao(id)
);

create table tbl_tipo_movimentacao(
id int not null primary key auto_increment,
tipo varchar(50) not null
);

DROP DATABASE IF EXISTS db_lionbook;

insert into tbl_usuario(login, senha) values ('Ana Clara Pires', 'Ana123456');

show tables;

--criação das producere

DELIMITER $$

CREATE PROCEDURE loginUsuario(
    IN p_login varchar(100),
    IN p_senha VARCHAR(100)
)
BEGIN
    INSERT INTO tbl_usuario (login,senha)
    VALUES (p_login, p_senha);

END$$

DELIMITER ;



select * from tbl_usuario order by id desc;

CALL loginUsuario('Ana Clara Pires', 'Ana123456');

DROP PROCEDURE IF EXISTS InserirUsuario;

DELIMITER ;


--buscar por id 
	DELIMITER $$ 
    create procedure search_livro_isbn(
		in p_isbn int 
    )
    begin 
    select * from tbl_livro
		where isbn = p_isbn;  
    end$$
    DELIMITER ; 

-- delete por id 

    
  DELIMITER $$

  CREATE PROCEDURE delete_usuario_id(IN p_id INT)
  BEGIN
      DELETE FROM tbl_usuario
      WHERE id = p_id;
  END$$

  DELIMITER ;



--criação das view 

CREATE VIEW vw_usuarios AS
SELECT * FROM tbl_usuario;

SELECT * FROM vw_usuarios;
