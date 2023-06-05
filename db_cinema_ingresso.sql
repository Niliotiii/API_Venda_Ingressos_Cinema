create database cinema_ingresso_db;
use cinema_ingresso_db;

create table cliente (
                         id int primary key auto_increment,
                         nome varchar(300),
                         cpf varchar(100),
                         rg varchar(100),
                         email varchar(300),
                         endereco varchar(300),
                         telefone varchar(300)
);

create table filme (
                       id int primary key auto_increment,
                       titulo varchar(300),
                       sinopse varchar(500),
                       atores varchar(300),
                       diretor varchar(300),
                       tempo time
);

create table sala (
                      id int primary key auto_increment,
                      nome varchar(300),
                      capacidade varchar(300),
                      local_sala varchar(300)
);

create table poltrona (
                          id int primary key auto_increment,
                          numero int,
                          fileira int,
                          status_poltrona varchar(100),
                          sala_id int not null,
                          foreign key(sala_id) references sala (id)
);

create table sessao (
                        id int primary key auto_increment,
                        data date not null,
                        horario_inicio time not null,
                        horario_fim time not null,
                        sala_id int not null,
                        filme_id int not null,
                        foreign key(sala_id) references sala (id),
                        foreign key(filme_id) references filme (id)
);

create table ingresso (
                          id int primary key auto_increment,
                          valor decimal(12, 2),
                          data_hora datetime,
                          sessao_id int not null,
                          poltrona_id int not null,
                          foreign key(sessao_id) references sessao (id),
                          foreign key(poltrona_id) references poltrona (id)
);

create table venda (
                       id int primary key auto_increment,
                       valor double,
                       data_hora datetime,
                       ingresso_id int not null,
                       cliente_id int not null,
                       foreign key(ingresso_id) references ingresso(id),
                       foreign key(cliente_id) references cliente(id)
);