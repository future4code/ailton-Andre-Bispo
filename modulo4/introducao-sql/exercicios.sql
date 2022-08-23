# RESOLUÇÃO ATIVIDADES INTRODUÇÃO SQL

## EXERCÍCIO 1

Para criação da tabela Users, utilizamos a query:

```
CREATE TABLE Users(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

## EXERCÍCIO 2

Para inserção dos dados fornecidos na tabela Users, utilizamos a query combinada:

```
INSERT INTO Users
VALUES(
	"001",
    "Luana",
	"lua@lbn.com"
),(
	"002",
    "Vinicius",
    "vini@lbn.com"
),(
	"003",
    "Laura",
    "lau@lbn.com"
);
```

## EXERCÍCIO 3

### LETRA A

Para selecionarmos todos os dados de todos os usuários na tabela Users, utilizamos a query:

```
SELECT * FROM Users;
```

### LETRA B

Para selecionarmos apenas id e name de todos os usuários da tabela Users, além de modificar a exibição de nome da coluna id por "identifier", utilizamos a query:

```
SELECT id AS identifier, name FROM Users;
```

### LETRA C

Para selecionarmos todos os dados de um usuário específico, buscando pelo seu id, utilizamos a query:

```
SELECT * FROM Users
WHERE id = "003";
```

### LETRA D

Para selecionarmos todos os dados de usuários na tabela Users, buscando pela existência da letra "a" em seus respectivos nomes, utilizamos a query:

```
SELECT * FROM Users
WHERE name LIKE "%a%";
```

### LETRA E

Para selecionarmos todos os dados de usuários na tabela Users, onde combinamos a busca pela não existência da letra "r" em seus respectivos nomes, mas também que exista a letra "u" em seus respectivos e-mails, utilizamos a query:

```
SELECT * FROM Users
WHERE (name NOT LIKE "%r%") AND (email LIKE "%u%");
```

## EXERCÍCIO 4

Primeiro, inserimos o novo dado fornecido, através da query:

```
INSERT INTO Users
VALUES(
	"004",
    "Yuzo",
    "yuzo@lbn.com"
);
```

Em seguida, para removermos este dado inserido buscando pelo seu id, utilizamos a query:

```
DELETE FROM Users
WHERE id = "004";
```

Para confirmar se o usuário foi criado/removido, utilizamos a query de busca completa da tabela:

```
SELECT * FROM Users;
```