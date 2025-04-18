import axios from "axios";

const booksAPI = axios.create({baseURL: "https://my-bookshelf-uobo.onrender.com"})

async function getBooks( search = "") {
    const response = await booksAPI.get("/books", { params: { search } });
    return response.data;
}

async function postBook(newBook) {
    const response = await booksAPI.post("/books", newBook);
    return response.data;
}

async function patchBook(id, updatedBook) {
    const response = await booksAPI.patch(`/books/${id}`, updatedBook);
    return response.data;
}

async function deleteBook(id) {
    const response = await booksAPI.delete(`/books/${id}`);
    return response.data;
}

export {
    getBooks,
    postBook,
    patchBook, 
    deleteBook
}