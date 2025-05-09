# 📚 Gerenciador de Livros - API REST + React
**Versão: Iteração 2 (v2)**

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
- [Roteiro de Testes (Postman)](https://docs.google.com/spreadsheets/d/1XSuGE6N5h_gqhlCCpTnb7ZDzekRAo0p3Y6hms8IVDb0/edit?usp=sharing)

## 🚀 Instalação e Execução
### 1. Clone o repositório
```bash
git clone https://github.com/feclave/My-Bookshelf.git
cd My-Bookshelf
```
### 2. Backend
```bash
cd backend
# Crie o arquivo .env com as variáveis abaixo:
MONGO_URI=sua_uri_de_conexao_mongodb
PORT=5000
# Instale as dependências e inicie
npm install
npm start
```
### 3. Frontend
```bash
cd ../frontend
npm install
npm install vite --save-dev
npm run dev
```

## 🌐 Endpoints da API
| Método | Endpoint    | Descrição             |
|--------|-------------|------------------------|
| GET    | /books      | Lista todos os livros |
| POST   | /books      | Adiciona novo livro   |
| GET    | /books/:id  | Obtém um livro específico |
| PUT    | /books/:id  | Atualiza um livro     |
| DELETE | /books/:id  | Remove um livro       |

### 📦 Exemplo de corpo para POST/PUT
```json
{
  "title": "Dom Casmurro",
  "author": "Machado de Assis",
  "year": 1899,
  "pages": 256
}
```

## 🧪 Testes
Você pode testar os endpoints da API com o [Postman](https://www.postman.com/). Um roteiro de testes está disponível no link abaixo:
📄 [Roteiro de Testes](https://docs.google.com/spreadsheets/d/1XSuGE6N5h_gqhlCCpTnb7ZDzekRAo0p3Y6hms8IVDb0/edit?usp=sharing)

## 📂 Estrutura do Projeto
```text
my-bookshelf/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 🧩 Iteração 2: Ajustes de teste
- Adicionado comentário no componente `Banner` (frontend);
- Adição de nota no `README.md` para indicar alterações;
- Criação da tag `v2` no repositório.