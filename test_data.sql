-- Désactiver temporairement les contraintes de clés étrangères
SET FOREIGN_KEY_CHECKS = 0;

-- Supprimer les données dans l'ordre inverse des dépendances
DELETE FROM loan;
DELETE FROM book;
DELETE FROM library;
DELETE FROM user;

-- Réactiver les contraintes de clés étrangères
SET FOREIGN_KEY_CHECKS = 1;

-- Insérer des utilisateurs
INSERT INTO user (id, name, email, password) VALUES
(1, 'Alice Dupont', 'alice@example.com', 'password1'),
(2, 'Bob Martin', 'bob@example.com', 'password2'),
(3, 'Charlie Durand', 'charlie@example.com', 'password3');

-- Insérer des bibliothèques
INSERT INTO library (id, name, location, userId) VALUES
(1, 'Bibliothèque Centrale', 'Paris', 1),
(2, 'Médiathèque du Quartier', 'Lyon', 2),
(3, 'Bibliothèque Municipale', 'Marseille', 3);

-- Insérer des livres
INSERT INTO book (id, title, author, genre, available, libraryId) VALUES
(1, '1984', 'George Orwell', 'Dystopie', TRUE, 1),
(2, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 'Conte', TRUE, 1),
(3, 'Les Misérables', 'Victor Hugo', 'Roman', FALSE, 2),
(4, 'Harry Potter', 'J.K. Rowling', 'Fantasy', TRUE, 3),
(5, 'Clean Code', 'Robert C. Martin', 'Informatique', TRUE, 3);

-- Insérer des prêts (emprunts)
INSERT INTO loan (id, bookId, borrowerId, start_date, end_date, returned) VALUES
(1, 3, 1, '2025-07-01', '2025-07-15', FALSE),
(2, 2, 2, '2025-06-20', '2025-07-05', TRUE);

