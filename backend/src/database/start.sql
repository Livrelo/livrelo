INSERT INTO "Conta" (nome, email, senha, created_at, updated_at)
VALUES 
-- Contas de Bibliotecários
('Alice Martins', 'alice.martins@biblioteca.com', '$2b$04$wAM1A8STtb21ktfd8hP2LOC12ynzLtd0y8yJ/3vAG.Qt6STNkDLrW', NOW(), NOW()),
('João Costa', 'joao.costa@biblioteca.com', '$2b$04$NCugUIhrnlUunzZcqJOfBO39QtgFbM3g54PLb0Z4o.6KDhyM9HV0W', NOW(), NOW()),
('Mariana Lopes', 'mariana.lopes@biblioteca.com', '$2b$04$aJRQresG6cx9ZAx77diDoeHn1/jgNRMX5JZ5AFJ1kYNADYpc4Qqlu', NOW(), NOW()),
('Carlos Silva', 'carlos.silva@biblioteca.com', '$2b$04$okq6sfrFXiM7MxOS5ZjrKucU4jy9yySsDyTBOsCf0Zfrw.h/y3wCG', NOW(), NOW()),
('Renata Souza', 'renata.souza@biblioteca.com', '$2b$04$YHs7WYz1DfBM8cj8NpcEzuTS4grLoFl4fLw9wpuL7PKvbJa.tUqG6', NOW(), NOW()),
-- Contas de Usuários
('Fernando Oliveira', 'fernando.oliveira@gmail.com', '$2b$04$7JWEf8gUHxOVBh4mFBYkcepgtVBdDXWeU1kqFoKKSbViFXMUYh1by', NOW(), NOW()),
('Ana Clara', 'ana.clara@yahoo.com', '$2b$04$A4bGXj.oEeAK.NOwIbvGJOaLd6rweEEXiFhFPCrh.ys7ox9i7.FWW', NOW(), NOW()),
('Lucas Pereira', 'lucas.pereira@hotmail.com', '$2b$04$WOyJ0eQRyFArbVF5n2CO4.8DgD1xL7iOwx2eoePDgCjIpAoJp/XfS', NOW(), NOW()),
('Beatriz Fernandes', 'bia.fernandes@live.com', '$2b$04$q4fi1/ojf080scDSW/n5LuWUu9Qj8gd8CSTfeSz8JAjTpBisBzL6O', NOW(), NOW()),
('Gabriel Santos', 'gabriel.santos@gmail.com', '$2b$04$4JVD8NGDhBcMXc7nhfChdO1v3pqXULj/qKmSC/hiRyFzA1n7X0Sv2', NOW(), NOW()),
('Camila Rocha', 'camila.rocha@gmail.com', '$2b$04$f9YUdJ9KE28ADGC1qbpc4OedUEOGHrDtjS3NHr4quCbxXczMiXIpe', NOW(), NOW()),
('Ricardo Monteiro', 'ricardo.monteiro@outlook.com', '$2b$04$DdnjArHFgpwIH2S2Yhtq3ew/O06F/HFEP2XMZZlned/PxREu4QgVu', NOW(), NOW()),
('Larissa Alves', 'larissa.alves@gmail.com', '$2b$04$yuzEq1HFcMWG.nmGJQcRBOIwnICOaLJLllyng3JwjrccfH1IX.LJ.', NOW(), NOW()),
('Mateus Ribeiro', 'mateus.ribeiro@gmail.com', '$2b$04$hhCQgTGPE5tnTo.9I6Nv6ONtzC87wu0ghbFUroQV/kXM3kfvJg66i', NOW(), NOW()),
('Juliana Freitas', 'juliana.freitas@yahoo.com', '$2b$04$nKJoCkHrDUaZ8ZP3D11oT.otKBTzWm98VdB5zv3xccK1R5yEc5sqO', NOW(), NOW()),
('Thiago Neves', 'thiago.neves@live.com', '$2b$04$O.JCY3M/W3bJTdfM464tte3jsEHFRek.9AVgUQ64aDZUfVHoJ5zRK', NOW(), NOW()),
('Sofia Mendes', 'sofia.mendes@gmail.com', '$2b$04$Uq2qS9S6r9a12DrEPJ5DD.C9idwwBywp5AnfybpfD0Ut/Aq6TEX3m', NOW(), NOW()),
('Pedro Lima', 'pedro.lima@outlook.com', '$2b$04$Rk5VBYkmq6JFFZBRXGA5C.7SKlYAd0qN2Qi.9D11ea4BvtHBY7bXK', NOW(), NOW()),
('Isabela Moraes', 'isabela.moraes@gmail.com', '$2b$04$Rq5h89JKt1u33qTtsyWuVOdqexYAMCpt8oykIPiDxUzk/IYMcdZDq', NOW(), NOW()),
('Rafael Correia', 'rafael.correia@gmail.com', '$2b$04$Uup0Rs.rrB2IXQYtfjbD/.zco6QRTLLsa.IB4jhDazKH2/7GU2Hku', NOW(), NOW()),
('Bruna Castro', 'bruna.castro@hotmail.com', '$2b$04$vyjyxnginnA/sKs6KqyYp.IUP6Y7IN0Gq0njHOkhUIQsnaedP2Yw.', NOW(), NOW()),
('Eduardo Vieira', 'eduardo.vieira@gmail.com', '$2b$04$swqRi0c7dYi6Z3Ce4.lR..vRp.EQz7jt/031.fOLOR9hgDw78wteS', NOW(), NOW()),
('Amanda Farias', 'amanda.farias@gmail.com', '$2b$04$hHFJriTuORscbk7dzXpeaev04MPii6QiAeR3Jmy2WUdZprRMVoy9C', NOW(), NOW()),
('Fábio Mendes', 'fabio.mendes@yahoo.com', '$2b$04$SbbeXvFSb7K4Z932a4PE6.jxaouEc47VH5QGjoDfNCXYpAHf4KtnS', NOW(), NOW()),
('Giovanna Moreira', 'giovanna.moreira@gmail.com', '$2b$04$kBXF2HQp7AQIo.TUaK6IhO6pkOOLV/2B7M/tg/Yr04MY9mwrgNjkm', NOW(), NOW()),
('Carlos Nunes', 'carlos.nunes@gmail.com', '$2b$04$o.VF8qvOEP7.lvGZKL9wlusabRAwCUfbRA/ZhDfNGjc0RRlDg3xFq', NOW(), NOW());

INSERT INTO "Bibliotecario"
VALUES 
(1, NOW(), NOW()), 
(2, NOW(), NOW()), 
(3, NOW(), NOW()), 
(4, NOW(), NOW()), 
(5, NOW(), NOW());


INSERT INTO "Usuario"
VALUES 
('547.892.123-45', 6, NOW(), NOW()), 
('123.456.789-01', 7, NOW(), NOW()), 
('987.654.321-09', 8, NOW(), NOW()), 
('654.321.987-12', 9, NOW(), NOW()), 
('111.222.333-44', 10, NOW(), NOW()), 
('444.555.666-77', 11, NOW(), NOW()), 
('777.888.999-00', 12, NOW(), NOW()), 
('121.343.565-78', 13, NOW(), NOW()), 
('232.434.656-89', 14, NOW(), NOW()), 
('343.545.767-90', 15, NOW(), NOW()), 
('454.656.878-01', 16, NOW(), NOW()), 
('565.767.989-12', 17, NOW(), NOW()), 
('676.878.090-23', 18, NOW(), NOW()), 
('787.989.101-34', 19, NOW(), NOW()), 
('898.090.212-45', 20, NOW(), NOW()), 
('909.101.323-56', 21, NOW(), NOW()), 
('010.212.434-67', 22, NOW(), NOW()), 
('121.323.545-78', 23, NOW(), NOW()), 
('233.414.656-89', 24, NOW(), NOW()), 
('313.545.727-90', 25, NOW(), NOW());

INSERT INTO "Categoria" (nome, created_at, updated_at)
VALUES 
('Ficção Científica', NOW(), NOW()), 
('História', NOW(), NOW()), 
('Tecnologia', NOW(), NOW()), 
('Romance', NOW(), NOW()), 
('Suspense', NOW(), NOW()), 
('Filosofia', NOW(), NOW()), 
('Fantasia', NOW(), NOW()), 
('Biografias', NOW(), NOW()), 
('Aventura', NOW(), NOW()), 
('Autoajuda', NOW(), NOW());

INSERT INTO "Livro" 
VALUES 
(1, 'O Guia do Mochileiro das Galáxias', 'A série de ficção científica humorística', 'Douglas Adams', 1979, 'Editora A', NULL, 'Disponivel', NOW(), NOW()),
(2, '1984', 'Uma distopia clássica', 'George Orwell', 1949, 'Editora B', NULL, 'Disponivel', NOW(), NOW()),
(3, 'A Revolução dos Bichos', 'Uma alegoria sobre o poder', 'George Orwell', 1945, 'Editora AB', NULL, 'Disponivel', NOW(), NOW()),
(4, 'Orgulho e Preconceito', 'Um clássico da literatura romântica', 'Jane Austen', 1813, 'Editora C', NULL, 'Disponivel', NOW(), NOW()),
(5, 'A Metamorfose', 'Um conto surrealista', 'Franz Kafka', 1915, 'Editora CC', NULL, 'Disponivel', NOW(), NOW()),
(6, 'O Hobbit', 'Uma aventura épica', 'J.R.R. Tolkien', 1937, 'Editora D', NULL, 'Disponivel', NOW(), NOW());

INSERT INTO "LivroCategoria"
VALUES 
(1, 1, NOW(), NOW()), (2, 1, NOW(), NOW()), (3, 2, NOW(), NOW()), (4, 4, NOW(), NOW()), (5, 6, NOW(), NOW()), (6, 7, NOW(), NOW());

INSERT INTO "Livro"
VALUES 
-- Ficção Científica
(7,'Duna', 'Um épico de ficção científica em um deserto', 'Frank Herbert', 1965, 'Chilton Books', NULL, 'Disponivel', NOW(), NOW()),
(8,'Neuromancer', 'O clássico do cyberpunk', 'William Gibson', 1984, 'Ace Books', NULL, 'Disponivel', NOW(), NOW()),
(9,'Fundação', 'A obra-prima de Isaac Asimov', 'Isaac Asimov', 1951, 'Gnome Press', NULL, 'Disponivel', NOW(), NOW()),
(10,'Admirável Mundo Novo', 'Uma visão distópica do futuro', 'Aldous Huxley', 1932, NULL, NULL, 'Disponivel', NOW(), NOW()),
(11,'Eu, Robô', 'Uma coletânea de contos de robôs', 'Isaac Asimov', 1950, 'Gnome Press', NULL, 'Disponivel', NOW(), NOW()),

-- História
(12,'Sapiens: Uma Breve História da Humanidade', 'Um panorama da história humana', 'Yuval Noah Harari', 2011, 'Harvill Secker', NULL, 'Disponivel', NOW(), NOW()),
(13,'História do Brasil', 'Um guia essencial da história brasileira', 'Boris Fausto', 1994, 'Editora Moderna', NULL, 'Disponivel', NOW(), NOW()),
(14,'A Era dos Extremos', 'Uma visão do século XX', 'Eric Hobsbawm', 1994, 'Pantheon Books', NULL, 'Disponivel', NOW(), NOW()),
(15,'O Mundo de Ontem', 'Uma memória do século XX', 'Stefan Zweig', 1942, 'Penguin Books', NULL, 'Disponivel', NOW(), NOW()),
(16,'A Marcha da Insensatez', 'Uma análise de decisões políticas desastrosas', 'Barbara W. Tuchman', 1984, 'Knopf', NULL, 'Disponivel', NOW(), NOW()),

-- Tecnologia
(17,'Clean Code', 'Práticas para escrever código limpo', 'Robert C. Martin', 2008, 'Prentice Hall', NULL, 'Disponivel', NOW(), NOW()),
(18,'O Programador Pragmático', 'Conselhos práticos para desenvolvimento de software', 'Andrew Hunt e David Thomas', 1999, 'Addison-Wesley', NULL, 'Disponivel', NOW(), NOW()),
(19,'Introdução aos Algoritmos', 'O clássico livro sobre algoritmos', 'Thomas H. Cormen', 1990, 'MIT Press', NULL, 'Disponivel', NOW(), NOW()),
(20,'Design Patterns', 'Soluções reutilizáveis de software', 'Erich Gamma', 1994, 'Addison-Wesley', NULL, 'Disponivel', NOW(), NOW()),
(21,'Estruturas de Dados em C', 'Uma introdução prática', 'Mark Allen Weiss', 1993, 'Addison-Wesley', NULL, 'Disponivel', NOW(), NOW()),

-- Romance
(22,'Dom Casmurro', 'Uma obra-prima do realismo brasileiro', 'Machado de Assis', 1899, 'Editora Garnier', NULL, 'Disponivel', NOW(), NOW()),
(23,'O Morro dos Ventos Uivantes', 'Um romance gótico clássico', 'Emily Brontë', 1847, 'Thomas Cautley Newby', NULL, 'Disponivel', NOW(), NOW()),
(24,'Memórias Póstumas de Brás Cubas', 'Um livro inovador e irreverente', 'Machado de Assis', 1881, 'Revista Brasileira', NULL, 'Disponivel', NOW(), NOW()),
(25,'A Culpa é das Estrelas', 'Um romance contemporâneo emocionante', 'John Green', 2012, 'Dutton Books', NULL, 'Disponivel', NOW(), NOW()),
(26,'O Grande Gatsby', 'Um clássico sobre o sonho americano', 'F. Scott Fitzgerald', 1925, 'Scribner', NULL, 'Disponivel', NOW(), NOW()),

-- Suspense
(27,'O Silêncio dos Inocentes', 'Um thriller psicológico icônico', 'Thomas Harris', 1988, 'St. Martins Press', NULL, 'Disponivel', NOW(), NOW()),
(28,'Os Homens que Não Amavam as Mulheres', 'Uma história intrigante de mistério', 'Stieg Larsson', 2005, 'Norstedts Förlag', NULL, 'Disponivel', NOW(), NOW()),
(29,'O Código Da Vinci', 'Um bestseller mundial de suspense', 'Dan Brown', 2003, 'Doubleday', NULL, 'Disponivel', NOW(), NOW()),
(30,'Garota Exemplar', 'Um suspense surpreendente', 'Gillian Flynn', 2012, 'Crown Publishing Group', NULL, 'Disponivel', NOW(), NOW()),
(31,'Sherlock Holmes: O Cão dos Baskervilles', 'Um mistério clássico', 'Arthur Conan Doyle', 1902, 'George Newnes', NULL, 'Disponivel', NOW(), NOW()),

-- Filosofia
(32,'O Mundo de Sofia', 'Uma introdução à filosofia', 'Jostein Gaarder', 1991, 'Farrar, Straus and Giroux', NULL, 'Disponivel', NOW(), NOW()),
(33,'Crítica da Razão Pura', 'Uma das obras fundamentais da filosofia', 'Immanuel Kant', 1781, 'Farrar, Straus and Giroux', NULL, 'Disponivel', NOW(), NOW()),
(34,'Além do Bem e do Mal', 'Uma obra provocadora de Nietzsche', 'Friedrich Nietzsche', 1886, 'Farrar, Straus and Giroux', NULL, 'Disponivel', NOW(), NOW()),
(35,'Meditações', 'Reflexões de um imperador romano', 'Marco Aurélio', 180, 'Farrar, Straus and Giroux', NULL, 'Disponivel', NOW(), NOW()),
(36,'República', 'Um dos diálogos mais famosos de Platão', 'Platão', -380, 'Farrar, Straus and Giroux', NULL, 'Disponivel', NOW(), NOW()),

-- Fantasia
(37,'Harry Potter e a Pedra Filosofal', 'O início de uma saga mágica', 'J.K. Rowling', 1997, 'Bloomsbury', NULL, 'Disponivel', NOW(), NOW()),
(38,'As Crônicas de Nárnia', 'Um clássico da literatura fantástica', 'C.S. Lewis', 1950, 'Geoffrey Bles', NULL, 'Disponivel', NOW(), NOW()),
(39,'O Senhor dos Anéis', 'Uma jornada épica pela Terra Média', 'J.R.R. Tolkien', 1954, 'Allen & Unwin', NULL, 'Disponivel', NOW(), NOW()),
(40,'Eragon', 'Uma fantasia moderna', 'Christopher Paolini', 2002, 'Knopf', NULL, 'Disponivel', NOW(), NOW()),
(41,'A Canção do Sangue', 'Uma história envolvente de fantasia épica', 'Anthony Ryan', 2013, 'Orbit', NULL, 'Disponivel', NOW(), NOW()),

-- Autoajuda
(42,'O Poder do Hábito', 'Como os hábitos moldam nossas vidas', 'Charles Duhigg', 2012, 'Random House', NULL, 'Disponivel', NOW(), NOW()),
(43,'Os Sete Hábitos das Pessoas Altamente Eficazes', 'Princípios para eficácia pessoal', 'Stephen R. Covey', 1989, 'Free Press', NULL, 'Disponivel', NOW(), NOW()),
(44,'A Mágica da Arrumação', 'Um guia para organizar sua vida', 'Marie Kondo', 2011, 'Ten Speed Press', NULL, 'Disponivel', NOW(), NOW()),
(45,'Mindset', 'A psicologia do sucesso', 'Carol S. Dweck', 2006, 'Random House', NULL, 'Disponivel', NOW(), NOW()),
(46,'Como Fazer Amigos e Influenciar Pessoas', 'Um guia clássico de autoajuda', 'Dale Carnegie', 1936, 'Simon and Schuster', NULL, 'Disponivel', NOW(), NOW());

INSERT INTO "LivroCategoria" 
VALUES
-- Ficção Científica
(7, 1, NOW(), NOW()), -- Duna
(8, 1, NOW(), NOW()), -- Neuromancer
(9, 1, NOW(), NOW()), -- Fundação
(10, 1, NOW(), NOW()), -- Admirável Mundo Novo
(11, 1, NOW(), NOW()), -- Eu, Robô

-- História
(12, 2, NOW(), NOW()), -- Sapiens: Uma Breve História da Humanidade
(13, 2, NOW(), NOW()), -- História do Brasil
(14, 2, NOW(), NOW()), -- A Era dos Extremos
(15, 2, NOW(), NOW()), -- O Mundo de Ontem
(16, 2, NOW(), NOW()), -- A Marcha da Insensatez

-- Tecnologia
(17, 3, NOW(), NOW()), -- Clean Code
(18, 3, NOW(), NOW()), -- O Programador Pragmático
(19, 3, NOW(), NOW()), -- Introdução aos Algoritmos
(20, 3, NOW(), NOW()), -- Design Patterns
(21, 3, NOW(), NOW()), -- Estruturas de Dados em C

-- Romance
(22, 4, NOW(), NOW()), -- Dom Casmurro
(23, 4, NOW(), NOW()), -- O Morro dos Ventos Uivantes
(24, 4, NOW(), NOW()), -- Memórias Póstumas de Brás Cubas
(25, 4, NOW(), NOW()), -- A Culpa é das Estrelas
(26, 4, NOW(), NOW()), -- O Grande Gatsby

-- Suspense
(27, 5, NOW(), NOW()), -- O Silêncio dos Inocentes
(28, 5, NOW(), NOW()), -- Os Homens que Não Amavam as Mulheres
(29, 5, NOW(), NOW()), -- O Código Da Vinci
(30, 5, NOW(), NOW()), -- Garota Exemplar
(31, 5, NOW(), NOW()), -- Sherlock Holmes: O Cão dos Baskervilles

-- Filosofia
(32, 6, NOW(), NOW()), -- O Mundo de Sofia
(33, 6, NOW(), NOW()), -- Crítica da Razão Pura
(34, 6, NOW(), NOW()), -- Além do Bem e do Mal
(35, 6, NOW(), NOW()), -- Meditações
(36, 6, NOW(), NOW()), -- República

-- Fantasia
(37, 7, NOW(), NOW()), -- Harry Potter e a Pedra Filosofal
(38, 7, NOW(), NOW()), -- As Crônicas de Nárnia
(39, 7, NOW(), NOW()), -- O Senhor dos Anéis
(40, 7, NOW(), NOW()), -- Eragon
(41, 7, NOW(), NOW()), -- A Canção do Sangue

-- Autoajuda
(42, 8, NOW(), NOW()), -- O Poder do Hábito
(43, 8, NOW(), NOW()), -- Os Sete Hábitos das Pessoas Altamente Eficazes
(44, 8, NOW(), NOW()), -- A Mágica da Arrumação
(45, 8, NOW(), NOW()), -- Mindset
(46, 8, NOW(), NOW()); -- Como Fazer Amigos e Influenciar Pessoas
