# RESOLUÇÃO ATIVIDADE APROFUNDAMENTO SQL

## EXERCÍCIO 1

Para criação da tabela Projects, utilizamos a query:

```
CREATE TABLE Projects(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);
```

### EXERCÍCIO 2

Para inserção dos dados fornecidos na tabela Projects, utilizamos a query combinada:

```
INSERT INTO Projects
VALUES(
	"001",
    "LabeSky",
    "LSy",
	"2023-10-05"
),(
	"002",
    "Labefy",
    "LFy",
    "2024-01-06"
),(
	"003",
    "AstroZoom",
    "AZm",
    "2022-12-20"
);
```

## EXERCÍCIO 3

### LETRA A

Para a remoção da coluna "title" da tabela Projects, utilizamos a query:

```
ALTER TABLE Projects DROP COLUMN title;
```

### LETRA B

Para modificação do nome da coluna "date" para "dueDate", utilizamos a query:

```
ALTER TABLE Projects CHANGE date dueDate;
```

### LETRA C

Para adicionar a CONSTRATINS UNIQUE na coluna "email" da tabela Users, utilizamos a query:

```
ALTER TABLE Users CHANGE email email NOT NULL UNIQUE;
```

Para verificar as alterações, utilizamos a query:

```
DESCRIBE Users;
```

## EXERCÍCIO 4

### LETRA A

Para adicionar a nova coluna "description" na tabela Projects, utilizamos a query:

```
ALTER TABLE Projects ADD description VARCHAR(255) NOT NULL;
```

### LETRA B

Para atualizarmos o valor de "description" de cada projeto inserido, utilizamos as queries:

```
UPDATE Projects
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projects
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projects
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";
```

## EXERCÍCIO 5

Para exibir a lista de projetos, ordenados na forma decrescente de data de vencimento do projeto, utilizamos a query:

### LETRA A

```
SELECT * FROM Projects
ORDER BY dueDate DESC;
```

### LETRA B

Para exibir os 2 primeiros projetos, ordenados por data de vencimento e forma crescente, utilizamos a query:

```
SELECT name, dueDate FROM Projects
ORDER BY dueDate ASC
LIMIT 2;
```