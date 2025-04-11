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

### 📂 Estrutura do Projeto
MY-BOOKSHELF/
├── backend/
│   ├── src/            # Modelos MongoDB e rotas da API
│   ├── .gitignore
│   ├── server.js       # Servidor principal
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/ # Componentes React
│   │   ├── pages/      # Views da aplicação
│   │   ├── services/   # Chamadas à API
│   │   └── App.js      # Componente raiz
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── pictures/          # Imagens do projeto
├── .env               # Variáveis de ambiente
└── README.md          # Este arquivo
