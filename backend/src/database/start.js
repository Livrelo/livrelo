import { Sequelize } from 'sequelize';

import Bibliotecario from '../models/Bibliotecario.js';
import Conta from '../models/Conta.js';
import Usuario from '../models/Usuario.js';
import Categoria from '../models/Categoria.js';
import Livro from '../models/Livro.js';

import config from './config.js';
import DatabaseSingleton from './DatabaseSingleton.js';
import LivroCategoria from '../models/LivroCategoria.js';

async function seedDatabase() {
  try {
    // Conecte-se ao banco de dados
    const database = await DatabaseSingleton.getInstance();

    await database.sync({force:true});

    // Insira os dados no banco de dados
    await Conta.bulkCreate([
        { nome: 'Alice Martins', email: 'alice.martins@biblioteca.com', senha: '$2b$04$wAM1A8STtb21ktfd8hP2LOC12ynzLtd0y8yJ/3vAG.Qt6STNkDLrW' },
        { nome: 'João Costa', email: 'joao.costa@biblioteca.com', senha: '$2b$04$NCugUIhrnlUunzZcqJOfBO39QtgFbM3g54PLb0Z4o.6KDhyM9HV0W' },
        { nome: 'Mariana Lopes', email: 'mariana.lopes@biblioteca.com', senha: '$2b$04$aJRQresG6cx9ZAx77diDoeHn1/jgNRMX5JZ5AFJ1kYNADYpc4Qqlu' },
        { nome: 'Carlos Silva', email: 'carlos.silva@biblioteca.com', senha: '$2b$04$okq6sfrFXiM7MxOS5ZjrKucU4jy9yySsDyTBOsCf0Zfrw.h/y3wCG' },
        { nome: 'Renata Souza', email: 'renata.souza@biblioteca.com', senha: '$2b$04$YHs7WYz1DfBM8cj8NpcEzuTS4grLoFl4fLw9wpuL7PKvbJa.tUqG6' },
        { nome: 'Fernando Oliveira', email: 'fernando.oliveira@gmail.com', senha: '$2b$04$7JWEf8gUHxOVBh4mFBYkcepgtVBdDXWeU1kqFoKKSbViFXMUYh1by' },
        { nome: 'Ana Clara', email: 'ana.clara@yahoo.com', senha: '$2b$04$A4bGXj.oEeAK.NOwIbvGJOaLd6rweEEXiFhFPCrh.ys7ox9i7.FWW' },
        { nome: 'Lucas Pereira', email: 'lucas.pereira@hotmail.com', senha: '$2b$04$WOyJ0eQRyFArbVF5n2CO4.8DgD1xL7iOwx2eoePDgCjIpAoJp/XfS' },
        { nome: 'Beatriz Fernandes', email: 'bia.fernandes@live.com', senha: '$2b$04$q4fi1/ojf080scDSW/n5LuWUu9Qj8gd8CSTfeSz8JAjTpBisBzL6O' },
        { nome: 'Gabriel Santos', email: 'gabriel.santos@gmail.com', senha: '$2b$04$4JVD8NGDhBcMXc7nhfChdO1v3pqXULj/qKmSC/hiRyFzA1n7X0Sv2' },
        { nome: 'Camila Rocha', email: 'camila.rocha@gmail.com', senha: '$2b$04$f9YUdJ9KE28ADGC1qbpc4OedUEOGHrDtjS3NHr4quCbxXczMiXIpe' },
        { nome: 'Ricardo Monteiro', email: 'ricardo.monteiro@outlook.com', senha: '$2b$04$DdnjArHFgpwIH2S2Yhtq3ew/O06F/HFEP2XMZZlned/PxREu4QgVu' },
        { nome: 'Larissa Alves', email: 'larissa.alves@gmail.com', senha: '$2b$04$yuzEq1HFcMWG.nmGJQcRBOIwnICOaLJLllyng3JwjrccfH1IX.LJ.' },
        { nome: 'Mateus Ribeiro', email: 'mateus.ribeiro@gmail.com', senha: '$2b$04$hhCQgTGPE5tnTo.9I6Nv6ONtzC87wu0ghbFUroQV/kXM3kfvJg66i' },
        { nome: 'Juliana Freitas', email: 'juliana.freitas@yahoo.com', senha: '$2b$04$nKJoCkHrDUaZ8ZP3D11oT.otKBTzWm98VdB5zv3xccK1R5yEc5sqO' },
        { nome: 'Thiago Neves', email: 'thiago.neves@live.com', senha: '$2b$04$O.JCY3M/W3bJTdfM464tte3jsEHFRek.9AVgUQ64aDZUfVHoJ5zRK' },
        { nome: 'Sofia Mendes', email: 'sofia.mendes@gmail.com', senha: '$2b$04$Uq2qS9S6r9a12DrEPJ5DD.C9idwwBywp5AnfybpfD0Ut/Aq6TEX3m' },
        { nome: 'Pedro Lima', email: 'pedro.lima@outlook.com', senha: '$2b$04$Rk5VBYkmq6JFFZBRXGA5C.7SKlYAd0qN2Qi.9D11ea4BvtHBY7bXK', },
        { nome: 'Isabela Moraes', email: 'isabela.moraes@gmail.com', senha: '$2b$04$Rq5h89JKt1u33qTtsyWuVOdqexYAMCpt8oykIPiDxUzk/IYMcdZDq', },
        { nome: 'Rafael Correia', email: 'rafael.correia@gmail.com', senha: '$2b$04$Uup0Rs.rrB2IXQYtfjbD/.zco6QRTLLsa.IB4jhDazKH2/7GU2Hku', },
        { nome: 'Bruna Castro', email: 'bruna.castro@hotmail.com', senha: '$2b$04$vyjyxnginnA/sKs6KqyYp.IUP6Y7IN0Gq0njHOkhUIQsnaedP2Yw.', },
        { nome: 'Eduardo Vieira', email: 'eduardo.vieira@gmail.com', senha: '$2b$04$swqRi0c7dYi6Z3Ce4.lR..vRp.EQz7jt/031.fOLOR9hgDw78wteS', },
        { nome: 'Amanda Farias', email: 'amanda.farias@gmail.com', senha: '$2b$04$hHFJriTuORscbk7dzXpeaev04MPii6QiAeR3Jmy2WUdZprRMVoy9C', },
        { nome: 'Fábio Mendes', email: 'fabio.mendes@yahoo.com', senha: '$2b$04$SbbeXvFSb7K4Z932a4PE6.jxaouEc47VH5QGjoDfNCXYpAHf4KtnS', },
        { nome: 'Giovanna Moreira', email: 'giovanna.moreira@gmail.com', senha: '$2b$04$kBXF2HQp7AQIo.TUaK6IhO6pkOOLV/2B7M/tg/Yr04MY9mwrgNjkm', },
        { nome: 'Carlos Nunes', email: 'carlos.nunes@gmail.com', senha: '$2b$04$o.VF8qvOEP7.lvGZKL9wlusabRAwCUfbRA/ZhDfNGjc0RRlDg3xFq', }
    ]);
  
    await Bibliotecario.bulkCreate([
        { idConta: 1 },
        { idConta: 2 },
        { idConta: 3 },
        { idConta: 4 },
        { idConta: 5 },
    ]);
  
    await Usuario.bulkCreate([
        { cpf: '547.892.123-45', idConta: 6 },
        { cpf: '123.456.789-01', idConta: 7 },
        { cpf: '987.654.321-09', idConta: 8 },
        { cpf: '654.321.987-12', idConta: 9 },
        { cpf: '111.222.333-44', idConta: 10 },
        { cpf: '444.555.666-77', idConta: 11 },
        { cpf: '777.888.999-00', idConta: 12 },
        { cpf: '121.343.565-78', idConta: 13 },
        { cpf: '232.434.656-89', idConta: 14 },
        { cpf: '343.545.767-90', idConta: 15 },
        { cpf: '454.656.878-01', idConta: 16 },
        { cpf: '565.767.989-12', idConta: 17 },
        { cpf: '676.878.090-23', idConta: 18 },
        { cpf: '787.989.101-34', idConta: 19 },
        { cpf: '898.090.212-45', idConta: 20 },
        { cpf: '909.101.323-56', idConta: 21 },
        { cpf: '010.212.434-67', idConta: 22 },
        { cpf: '121.323.545-78', idConta: 23 },
        { cpf: '233.414.656-89', idConta: 24 },
        { cpf: '313.545.727-90', idConta: 25 }
    ]);

    await Categoria.bulkCreate([
        { nome: 'Ficção Científica' },
        { nome: 'História' },
        { nome: 'Tecnologia' },
        { nome: 'Romance' },
        { nome: 'Suspense' },
        { nome: 'Filosofia' },
        { nome: 'Fantasia' },
        { nome: 'Biografias' },
        { nome: 'Aventura' },
        { nome: 'Autoajuda' }
    ]);

    await Livro.bulkCreate([
      { nome: 'O Guia do Mochileiro das Galáxias', descricao: 'A série de ficção científica humorística', nomeAutor: 'Douglas Adams', ano: 1979, nomeEditora: 'nomeEditora A', livroImage: 'mochileiro-das-galaxias.png', status: 'Disponivel'},
      { nome: '1984', descricao: 'Uma distopia clássica', nomeAutor: 'George Orwell', ano: 1949, nomeEditora: 'nomeEditora B', livroImage: '1984.png', status: 'Disponivel'},
      { nome: 'A Revolução dos Bichos', descricao: 'Uma alegoria sobre o poder', nomeAutor: 'George Orwell', ano: 1945, nomeEditora: 'nomeEditora AB', livroImage: 'a-revolucao-dos-bichos.png', status: 'Disponivel'},
      { nome: 'Orgulho e Preconceito', descricao: 'Um clássico da literatura romântica', nomeAutor: 'Jane Austen', ano: 1813, nomeEditora: 'nomeEditora C', livroImage: 'orgulho-e-preconceito.png', status: 'Disponivel'},
      { nome: 'A Metamorfose', descricao: 'Um conto surrealista', nomeAutor: 'Franz Kafka', ano: 1915, nomeEditora: 'nomeEditora CC', livroImage: 'a-metamorfose.png', status: 'Disponivel'},
      { nome: 'O Hobbit', descricao: 'Uma aventura épica', nomeAutor: 'J.R.R. Tolkien', ano: 1937, nomeEditora: 'nomeEditora D', livroImage: 'o-hobbit.png', status: 'Disponivel'},

      // Ficção Científica
      { nome: 'Duna', descricao: 'Um épico de ficção científica em um deserto', nomeAutor: 'Frank Herbert', ano: 1965, nomeEditora: 'Chilton Books', livroImage: 'duna.png', status: 'Disponivel' },
      { nome: 'Neuromancer', descricao: 'O clássico do cyberpunk', nomeAutor: 'William Gibson', ano: 1984, nomeEditora: 'Ace Books', livroImage: 'neuromancer.png', status: 'Disponivel' },
      { nome: 'Fundação', descricao: 'A obra-prima de Isaac Asimov', nomeAutor: 'Isaac Asimov', ano: 1951, nomeEditora: 'Gnome Press', livroImage: 'fundacao.png', status: 'Disponivel' },
      { nome: 'Admirável Mundo Novo', descricao: 'Uma visão distópica do futuro', nomeAutor: 'Aldous Huxley', ano: 1932, nomeEditora: null, livroImage: 'admiravel-mundo-novo.jpg', status: 'Disponivel' },
      { nome: 'Eu, Robô', descricao: 'Uma coletânea de contos de robôs', nomeAutor: 'Isaac Asimov', ano: 1950, nomeEditora: 'Gnome Press', livroImage: 'eu-robo.png', status: 'Disponivel' },
    ]);
    
    await LivroCategoria.bulkCreate([
      { idLivro: 1, idCategoria: 1 },
      { idLivro: 2, idCategoria: 1 },
      { idLivro: 3, idCategoria: 2 },
      { idLivro: 4, idCategoria: 4 },
      { idLivro: 5, idCategoria: 6 },
      { idLivro: 6, idCategoria: 7 },
      { idLivro: 7, idCategoria: 1 },
      { idLivro: 8, idCategoria: 1 },
      { idLivro: 9, idCategoria: 1 },
      { idLivro: 10, idCategoria: 1 },
    ]);

    console.log('Dados inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao semear o banco de dados:', error);
  }
}

seedDatabase();