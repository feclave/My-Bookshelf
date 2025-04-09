import author from "../models/Author.js";

class AuthorController {
    static async getAuthors(req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search authors.` });
        }
    };

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const foundAuthor = await author.findById(id);
            res.status(200).json(foundAuthor)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search an author by ID.` });
        }
    };

    static async postAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Sucessfully created an author!", author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to create an author.` });
        }
    };

    static async patchAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author updated!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update an author.` });
        }
    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Sucessfully deleted an author!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete an author.` });
        }
    };

    static async getAuthorByName(req, res) {
        const { name } = req.query;
        try {
            const authors = await author.find({ name: { $regex: name, $options: 'i' } });
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search author by name.` });
        }
    };
}

export default AuthorController