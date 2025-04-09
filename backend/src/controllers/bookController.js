import book from "../models/Book.js"
import author from "../models/Author.js"

class BookController {

    static async getBooks(req, res) { //regex busca o que estiver escrito e options 'i' ignora maiusculas e minusculas
        try {
            const { search } = req.query; //captura o parâmetro 'search' da url
            let filter = {}; //objeto filter que vai conter os critérios da busca

            if (search) {
                const matchingAuthor = await author.find({ name: { $regex: search, $options: 'i' } }, '_id'); //busca autores que correspondam à string de busca
                const authorId = matchingAuthor.map(searchedAuthors => searchedAuthors._id); //cria um array com o ID dos autores encontrados em matchingAuthor e seleciona apenas os IDs deles

                filter = {
                    $or: [ //realiza uma busca em múltiplos campos
                        { title: { $regex: search, $options: 'i' } },
                        { publisher: { $regex: search, $options: 'i' } },
                        { author: { $in: authorId } } //busca autores cujos IDs correspondem
                    ]
                };
            }

            const listBooks = await book.find(filter).populate('author', 'name');
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search books.` });
        }
    };

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search a book by ID.` });
        }
    };

    static async postBook(req, res) {
        const newBook = req.body;
        try {
            let foundAuthor = await author.findOne({ name: newBook.author }); //verificar se o autor já existe
            if (!foundAuthor) {
                foundAuthor = new author({ name: newBook.author }); //se não existir, criá-lo
                await foundAuthor.save();
            }
            const wholeBook = { ...newBook, author: foundAuthor._id };
            const createdBook = await book.create(wholeBook);
            res.status(201).json({ message: "Sucessfully created a book!", book: createdBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to create a book.` });
        }
    };

    static async patchBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Book updated!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update a book.` });
        }
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Sucessfully deleted a book!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete a book.` });
        }
    };
};

export default BookController