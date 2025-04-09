# 📚 Gerenciador de Livros - API REST + React

Sistema completo para gerenciamento de livros com CRUD, frontend em React e backend Node.js/Express conectado ao MongoDB.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Ferramentas**: Postman, Mongoose

## ⚙️ Pré-requisitos

- Node.js v18+
- MongoDB Atlas ou local
- NPM 9+ ou Yarn
- Git (opcional)

## 🚀 Instalação e Execução

### 1. Configuração Inicial

Clone o repositório (se aplicável) e instale as dependências para ambas as pastas:

# Frontend
cd ../frontend
npm install

### Backend

1. Navegue até a pasta backend:
```bash
cd backend

2. Adicionar o arquivo .env com as variáveis e parâmetros necessários para conexão com o banco de dados.

MONGO_URI=sua_uri_de_conexao_mongodb
PORT=5000

3. Instale as dependências:
npm install

4. Inicie o servidor:
npm start

-- / -- / -- / -- 
FRONTEND

1. Navegue até a pasta frontend:
cd frontend

2. Instale as dependências:
npm install

3. Inicie o aplicativo: 
npm run dev

🌐 Endpoints da API
Método	Endpoint	Descrição
GET	/books	Lista todos os livros
POST	/books	Adiciona novo livro
GET	/books/:id	Obtém um livro específico
PUT	/books/:id	Atualiza um livro
DELETE	/books/:id	Remove um livro


Exemplo de corpo para POST/PUT:
{
  "title": "Dom Casmurro",
  "author": "Machado de Assis",
  "year": 1899,
  "pages": 256
}


📂 ESTRUTURA DO PROJETO 
book-manager/
├── backend/
│   ├── models/          # Modelos MongoDB
│   ├── routes/          # Rotas da API
│   ├── .env             # Configurações
│   ├── server.js        # Servidor principal
│   └── package.json
└── frontend/
    ├── public/          # Assets estáticos
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── pages/       # Views da aplicação
    │   ├── services/    # API calls
    │   └── App.js       # Componente raiz
    └── package.json