# 📚 Gerenciador de Livros - API REST + React

Sistema completo para gerenciamento de livros com CRUD, frontend em React e backend Node.js/Express conectado ao MongoDB.

## 🛠️ Tecnologias Utilizadas

**Frontend**:  
- React.js  
- Vite  

**Backend**:  
- Node.js  
- Express  

**Banco de Dados**:  
- MongoDB  
- Mongoose  

**Ferramentas**:  
- Postman  

## 👥 Integrantes

- Allan Pradella Frushio - RA: 10415355  
- Eduardo Alexandre Rodrigues - RA: 10415254  
- Felipe Jost Clavé - RA: 10415280  

## ⚙️ Pré-requisitos

- Node.js v18+  
- MongoDB Atlas ou local  
- NPM 9+ ou Yarn  
- Git (opcional)  

## 🔗 Links Úteis

- [Trello](https://trello.com/b/otSNx0gx/gerenciador-de-livros-api-rest-react)  
- [GitHub](https://github.com/feclave/My-Bookshelf)  

## 🚀 Instalação e Execução

### Configuração Inicial

Clone o repositório:

```bash
git clone https://github.com/feclave/My-Bookshelf.git
cd My-Bookshelf

Backend
Navegue até a pasta backend:
cd backend

Crie o arquivo .env com:
MONGO_URI=sua_uri_de_conexao_mongodb
PORT=5000

Instale as dependências e inicie:
npm install
npm start

Frontend
Navegue até a pasta frontend:
cd ../frontend

Instale as dependências e inicie:
npm install
npm install vite --save-dev
npm run dev
```

### 🌐 Endpoints da API
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

## 📂 Estrutura do Projeto

```text
my-bookshelf/
│
├── backend/                   # Pasta do servidor Node.js
│   ├── src/                   # Código fonte do backend
│   │   ├── controllers/       # Lógica dos endpoints
│   │   ├── models/            # Modelos do MongoDB
│   │   ├── routes/            # Definição de rotas
│   │   └── utils/             # Utilitários e helpers
│   ├── .env                   # Variáveis de ambiente
│   ├── server.js              # Ponto de entrada do servidor
│   └── package.json           # Dependências do backend
│
├── frontend/                  # Pasta da aplicação React
│   ├── src/
│   │   ├── assets/            # Imagens, fonts, etc
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── pages/             # Páginas/views da aplicação
│   │   ├── services/          # Integração com a API
│   │   ├── styles/            # Arquivos de estilização
│   │   ├── App.jsx            # Componente raiz
│   │   └── main.jsx           # Ponto de entrada
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md                  # Documentação principal
```