import axios from "axios";

const booksAPI = axios.create({baseURL: "http://localhost:3000/books"})

async function getBooks( search = "") {
    const response = await booksAPI.get("/", { params: { search } });
    return response.data;
}

async function postBook(newBook) {
    const response = await booksAPI.post("/", newBook);
    return response.data;
}

async function patchBook(id, updatedBook) {
    const response = await booksAPI.patch(`/${id}`, updatedBook);
    return response.data;
}

async function deleteBook(id) {
    const response = await booksAPI.delete(`/${id}`);
    return response.data;
}

export {
    getBooks,
    postBook,
    patchBook, 
    deleteBook
}