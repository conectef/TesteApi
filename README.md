# Sistema Web Robot

## Como usar 

1. Suba os containers:
```
docker-compose up --build
```

2. Crie a tabela no PostgreSQL:
```
docker exec -it sistemat-db-1 psql -U postgres -d tarefas -c "CREATE TABLE IF NOT EXISTS tarefas (id SERIAL PRIMARY KEY, titulo TEXT NOT NULL);"
```

3. Acesse a API em `http://localhost:3000/tarefas`

4. Execute os testes Robot Framework:
```
robot tests/test.robot
```

Tecnologias usadas
Node.js (API)

PostgreSQL (Banco de dados)

Docker

Robot Framework (Testes E2E)