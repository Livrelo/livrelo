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
      {idLivro: 1, nome: 'O Guia do Mochileiro das Galáxias', descricao: 'A série de ficção científica humorística', nomeAutor: 'Douglas Adams', ano: 1979, nomeEditora: 'nomeEditora A', livroImage: null, status: 'Disponivel'},
      {idLivro: 2, nome: '1984', descricao: 'Uma distopia clássica', nomeAutor: 'George Orwell', ano: 1949, nomeEditora: 'nomeEditora B', livroImage: null, status: 'Disponivel'},
      {idLivro: 3, nome: 'A Revolução dos Bichos', descricao: 'Uma alegoria sobre o poder', nomeAutor: 'George Orwell', ano: 1945, nomeEditora: 'nomeEditora AB', livroImage: null, status: 'Disponivel'},
      {idLivro: 4, nome: 'Orgulho e Preconceito', descricao: 'Um clássico da literatura romântica', nomeAutor: 'Jane Austen', ano: 1813, nomeEditora: 'nomeEditora C', livroImage: null, status: 'Disponivel'},
      {idLivro: 5, nome: 'A Metamorfose', descricao: 'Um conto surrealista', nomeAutor: 'Franz Kafka', ano: 1915, nomeEditora: 'nomeEditora CC', livroImage: null, status: 'Disponivel'},
      {idLivro: 6, nome: 'O Hobbit', descricao: 'Uma aventura épica', nomeAutor: 'J.R.R. Tolkien', ano: 1937, nomeEditora: 'nomeEditora D', livroImage: null, status: 'Disponivel'},

      // Ficção Científica
      { idLivro: 7, nome: 'Duna', descricao: 'Um épico de ficção científica em um deserto', nomeAutor: 'Frank Herbert', ano: 1965, nomeEditora: 'Chilton Books', livroImage: null, status: 'Disponivel' },
      { idLivro: 8, nome: 'Neuromancer', descricao: 'O clássico do cyberpunk', nomeAutor: 'William Gibson', ano: 1984, nomeEditora: 'Ace Books', livroImage: null, status: 'Disponivel' },
      { idLivro: 9, nome: 'Fundação', descricao: 'A obra-prima de Isaac Asimov', nomeAutor: 'Isaac Asimov', ano: 1951, nomeEditora: 'Gnome Press', livroImage: null, status: 'Disponivel' },
      { idLivro: 10, nome: 'Admirável Mundo Novo', descricao: 'Uma visão distópica do futuro', nomeAutor: 'Aldous Huxley', ano: 1932, nomeEditora: null, livroImage: null, status: 'Disponivel' },
      { idLivro: 11, nome: 'Eu, Robô', descricao: 'Uma coletânea de contos de robôs', nomeAutor: 'Isaac Asimov', ano: 1950, nomeEditora: 'Gnome Press', livroImage: null, status: 'Disponivel' },
    
      // História
      { idLivro: 12, nome: 'Sapiens: Uma Breve História da Humanidade', descricao: 'Um panorama da história humana', nomeAutor: 'Yuval Noah Harari', ano: 2011, nomeEditora: 'Harvill Secker', livroImage: null, status: 'Disponivel' },
      { idLivro: 13, nome: 'História do Brasil', descricao: 'Um guia essencial da história brasileira', nomeAutor: 'Boris Fausto', ano: 1994, nomeEditora: 'nomeEditora Moderna', livroImage: null, status: 'Disponivel' },
      { idLivro: 14, nome: 'A Era dos Extremos', descricao: 'Uma visão do século XX', nomeAutor: 'Eric Hobsbawm', ano: 1994, nomeEditora: 'Pantheon Books', livroImage: null, status: 'Disponivel' },
      { idLivro: 15, nome: 'O Mundo de Ontem', descricao: 'Uma memória do século XX', nomeAutor: 'Stefan Zweig', ano: 1942, nomeEditora: 'Penguin Books', livroImage: null, status: 'Disponivel' },
      { idLivro: 16, nome: 'A Marcha da Insensatez', descricao: 'Uma análise de decisões políticas desastrosas', nomeAutor: 'Barbara W. Tuchman', ano: 1984, nomeEditora: 'Knopf', livroImage: null, status: 'Disponivel' },
    
      // Tecnologia
      { idLivro: 17, nome: 'Clean Code', descricao: 'Práticas para escrever código limpo', nomeAutor: 'Robert C. Martin', ano: 2008, nomeEditora: 'Prentice Hall', livroImage: null, status: 'Disponivel' },
      { idLivro: 18, nome: 'O Programador Pragmático', descricao: 'Conselhos práticos para desenvolvimento de software', nomeAutor: 'Andrew Hunt e David Thomas', ano: 1999, nomeEditora: 'Addison-Wesley', livroImage: null, status: 'Disponivel' },
      { idLivro: 19, nome: 'Introdução aos Algoritmos', descricao: 'O clássico livro sobre algoritmos', nomeAutor: 'Thomas H. Cormen', ano: 1990, nomeEditora: 'MIT Press', livroImage: null, status: 'Disponivel' },
      { idLivro: 20, nome: 'Design Patterns', descricao: 'Soluções reutilizáveis de software', nomeAutor: 'Erich Gamma', ano: 1994, nomeEditora: 'Addison-Wesley', livroImage: null, status: 'Disponivel' },
      { idLivro: 21, nome: 'Estruturas de Dados em C', descricao: 'Uma introdução prática', nomeAutor: 'Mark Allen Weiss', ano: 1993, nomeEditora: 'Addison-Wesley', livroImage: null, status: 'Disponivel' },
    
      // Romance
      { idLivro: 22, nome: 'Dom Casmurro', descricao: 'Uma obra-prima do realismo brasileiro', nomeAutor: 'Machado de Assis', ano: 1899, nomeEditora: 'nomeEditora Garnier', livroImage: null, status: 'Disponivel' },
      { idLivro: 23, nome: 'O Morro dos Ventos Uivantes', descricao: 'Um romance gótico clássico', nomeAutor: 'Emily Brontë', ano: 1847, nomeEditora: 'Thomas Cautley Newby', livroImage: null, status: 'Disponivel' },
      { idLivro: 24, nome: 'Memórias Póstumas de Brás Cubas', descricao: 'Um livro inovador e irreverente', nomeAutor: 'Machado de Assis', ano: 1881, nomeEditora: 'Revista Brasileira', livroImage: null, status: 'Disponivel' },
      { idLivro: 25, nome: 'A Culpa é das Estrelas', descricao: 'Um romance contemporâneo emocionante', nomeAutor: 'John Green', ano: 2012, nomeEditora: 'Dutton Books', livroImage: null, status: 'Disponivel' },
      { idLivro: 26, nome: 'O Grande Gatsby', descricao: 'Um clássico sobre o sonho americano', nomeAutor: 'F. Scott Fitzgerald', ano: 1925, nomeEditora: 'Scribner', livroImage: null, status: 'Disponivel' },
    
      // Suspense
      { idLivro: 27, nome: 'O Silêncio dos Inocentes', descricao: 'Um thriller psicológico icônico', nomeAutor: 'Thomas Harris', ano: 1988, nomeEditora: 'St. Martins Press', livroImage: null, status: 'Disponivel' },
      { idLivro: 28, nome: 'Os Homens que Não Amavam as Mulheres', descricao: 'Uma história intrigante de mistério', nomeAutor: 'Stieg Larsson', ano: 2005, nomeEditora: 'Norstedts Förlag', livroImage: null, status: 'Disponivel' },
      { idLivro: 29, nome: 'O Código Da Vinci', descricao: 'Um bestseller mundial de suspense', nomeAutor: 'Dan Brown', ano: 2003, nomeEditora: 'Doubleday', livroImage: null, status: 'Disponivel' },
      { idLivro: 30, nome: 'Garota Exemplar', descricao: 'Um suspense surpreendente', nomeAutor: 'Gillian Flynn', ano: 2012, nomeEditora: 'Crown Publishing Group', livroImage: null, status: 'Disponivel' },
      { idLivro: 31, nome: 'Sherlock Holmes: O Cão dos Baskervilles', descricao: 'Um mistério clássico', nomeAutor: 'Arthur Conan Doyle', ano: 1902, nomeEditora: 'George Newnes', livroImage: null, status: 'Disponivel' },
    
      // Filosofia
      { idLivro: 32, nome: 'O Mundo de Sofia', descricao: 'Uma introdução à filosofia', nomeAutor: 'Jostein Gaarder', ano: 1991, nomeEditora: 'Farrar, Straus and Giroux', livroImage: null, status: 'Disponivel' },
      { idLivro: 33, nome: 'Crítica da Razão Pura', descricao: 'Uma das obras fundamentais da filosofia', nomeAutor: 'Immanuel Kant', ano: 1781, nomeEditora: 'Farrar, Straus and Giroux', livroImage: null, status: 'Disponivel' },
      { idLivro: 34, nome: 'Além do Bem e do Mal', descricao: 'Uma obra provocadora de Nietzsche', nomeAutor: 'Friedrich Nietzsche', ano: 1886, nomeEditora: 'Farrar, Straus and Giroux', livroImage: null, status: 'Disponivel' },
      { idLivro: 35, nome: 'Meditações', descricao: 'Reflexões de um imperador romano', nomeAutor: 'Marco Aurélio', ano: 180, nomeEditora: 'Farrar, Straus and Giroux', livroImage: null, status: 'Disponivel' },
      { idLivro: 36, nome: 'República', descricao: 'Um dos diálogos mais famosos de Platão', nomeAutor: 'Platão', ano: -380, nomeEditora: 'Farrar, Straus and Giroux', livroImage: null, status: 'Disponivel' },
    
      // Fantasia
      { idLivro: 37, nome: 'Harry Potter e a Pedra Filosofal', descricao: 'O início de uma saga mágica', nomeAutor: 'J.K. Rowling', ano: 1997, nomeEditora: 'Bloomsbury', livroImage: null, status: 'Disponivel' },
      { idLivro: 38, nome: 'As Crônicas de Nárnia', descricao: 'Um clássico da literatura fantástica', nomeAutor: 'C.S. Lewis', ano: 1950, nomeEditora: 'Geoffrey Bles', livroImage: null, status: 'Disponivel' },
      { idLivro: 39, nome: 'O Senhor dos Anéis', descricao: 'Uma jornada épica pela Terra Média', nomeAutor: 'J.R.R. Tolkien', ano: 1954, nomeEditora: 'Allen & Unwin', livroImage: null, status: 'Disponivel' },
      { idLivro: 40, nome: 'Eragon', descricao: 'Uma fantasia moderna', nomeAutor: 'Christopher Paolini', ano: 2002, nomeEditora: 'Knopf', livroImage: null, status: 'Disponivel' },
      { idLivro: 41, nome: 'A Canção do Sangue', descricao: 'Uma história envolvente de fantasia épica', nomeAutor: 'Anthony Ryan', ano: 2013, nomeEditora: 'Orbit', livroImage: null, status: 'Disponivel' },
    
      // Autoajuda
      { idLivro: 42, nome: 'O Poder do Hábito', descricao: 'Como os hábitos moldam nossas vidas', nomeAutor: 'Charles Duhigg', ano: 2012, nomeEditora: 'Random House', livroImage: null, status: 'Disponivel' },
      { idLivro: 43, nome: 'Como Fazer Amigos e Influenciar Pessoas', descricao: 'Um guia clássico de autoaperfeiçoamento', nomeAutor: 'Dale Carnegie', ano: 1936, nomeEditora: 'Simon and Schuster', livroImage: null, status: 'Disponivel' },
      { idLivro: 44, nome: 'A Arte da Guerra', descricao: 'Lições de estratégia e sabedoria', nomeAutor: 'Sun Tzu', ano: -500, nomeEditora: 'Clássico', livroImage: null, status: 'Disponivel' },
      { idLivro: 45, nome: 'Os 7 Hábitos das Pessoas Altamente Eficazes', descricao: 'Hábitos para sucesso pessoal', nomeAutor: 'Stephen R. Covey', ano: 1989, nomeEditora: 'Free Press', livroImage: null, status: 'Disponivel' },
      { idLivro: 46, nome: 'Mindset', descricao: 'A nova psicologia do sucesso', nomeAutor: 'Carol S. Dweck', ano: 2006, nomeEditora: 'Ballantine Books', livroImage: null, status: 'Disponivel' }
    ]);
    
    await LivroCategoria.bulkCreate([
      { idLivro: 1, idCategoria: 1 },
      { idLivro: 2, idCategoria: 1 },
      { idLivro: 3, idCategoria: 2 },
      { idLivro: 4, idCategoria: 4 },
      { idLivro: 5, idCategoria: 6 },
      { idLivro: 6, idCategoria: 7 },
      { idLivro: 7, idCategoria: 1 }, // Duna
      { idLivro: 8, idCategoria: 1 }, // Neuromancer
      { idLivro: 9, idCategoria: 1 }, // Fundação
      { idLivro: 10, idCategoria: 1 }, // Admirável Mundo Novo
      { idLivro: 11, idCategoria: 1 }, // Eu, Robô
      { idLivro: 12, idCategoria: 2 }, // Sapiens: Uma Breve História da Humanidade
      { idLivro: 13, idCategoria: 2 }, // História do Brasil
      { idLivro: 14, idCategoria: 2 }, // A Era dos Extremos
      { idLivro: 15, idCategoria: 2 }, // O Mundo de Ontem
      { idLivro: 16, idCategoria: 2 }, // A Marcha da Insensatez
      { idLivro: 17, idCategoria: 3 }, // Clean Code
      { idLivro: 18, idCategoria: 3 }, // O Programador Pragmático
      { idLivro: 19, idCategoria: 3 }, // Introdução aos Algoritmos
      { idLivro: 20, idCategoria: 3 }, // Design Patterns
      { idLivro: 21, idCategoria: 3 }, // Estruturas de Dados em C
      { idLivro: 22, idCategoria: 4 }, // Dom Casmurro
      { idLivro: 23, idCategoria: 4 }, // O Morro dos Ventos Uivantes
      { idLivro: 24, idCategoria: 4 }, // Memórias Póstumas de Brás Cubas
      { idLivro: 25, idCategoria: 4 }, // A Culpa é das Estrelas
      { idLivro: 26, idCategoria: 4 }, // O Grande Gatsby
      { idLivro: 27, idCategoria: 5 }, // O Silêncio dos Inocentes
      { idLivro: 28, idCategoria: 5 }, // Os Homens que Não Amavam as Mulheres
      { idLivro: 29, idCategoria: 5 }, // O Código Da Vinci
      { idLivro: 30, idCategoria: 5 }, // Garota Exemplar
      { idLivro: 31, idCategoria: 5 }, // Sherlock Holmes: O Cão dos Baskervilles
      { idLivro: 32, idCategoria: 6 }, // O Mundo de Sofia
      { idLivro: 33, idCategoria: 6 }, // Crítica da Razão Pura
      { idLivro: 34, idCategoria: 6 }, // Além do Bem e do Mal
      { idLivro: 35, idCategoria: 6 }, // Meditações
      { idLivro: 36, idCategoria: 6 }, // República
      { idLivro: 37, idCategoria: 7 }, // Harry Potter e a Pedra Filosofal
      { idLivro: 38, idCategoria: 7 }, // As Crônicas de Nárnia
      { idLivro: 39, idCategoria: 7 }, // O Senhor dos Anéis
      { idLivro: 40, idCategoria: 7 }, // Eragon
      { idLivro: 41, idCategoria: 7 }, // A Canção do Sangue
      { idLivro: 42, idCategoria: 8 }, // O Poder do Hábito
      { idLivro: 43, idCategoria: 8 }, // Os Sete Hábitos das Pessoas Altamente Eficazes
      { idLivro: 44, idCategoria: 8 }, // A Mágica da Arrumação
      { idLivro: 45, idCategoria: 8 }, // Mindset
      { idLivro: 46, idCategoria: 8 }  // Como Fazer Amigos e Influenciar Pessoas
    ]);

    console.log('Dados inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao semear o banco de dados:', error);
  }
}

seedDatabase();