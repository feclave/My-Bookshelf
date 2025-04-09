/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getBooks, patchBook, deleteBook } from "../../services/BookService.jsx"
import styled from "styled-components"
import Overlay from "../Overlay/index.jsx"
import { TbPencil, TbPencilCancel, TbPencilCheck, TbPencilX } from "react-icons/tb"
import Input from "../Input/index.jsx"

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`

const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #feebb9;
    border-radius: 24px;
    color: #661422;
    padding: 12px;
    gap: 8px;
    overflow: hidden;
    box-shadow: 4px 4px 8px 6px #6614226e;

    &:hover{
        cursor: pointer;
    }

    h4{
        margin: 0;
    }

    p {
        margin: 0;
    }

    img {
        width: 100%;
        aspect-ratio: 3/2;
        object-fit: cover;
        border-radius: 24px;
    }
`

const Hero = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 65%;
    position: absolute;
    top: 45%;
    background-color: #db5f3c;
    padding: 12px;
    border-radius: 24px;

    img {
        margin-left: 112px;
        width: 260px;
        aspect-ratio: 2/3;
        object-fit: cover;
        border-radius: 24px;
    }
`

const Side = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding: 12px;
`

const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 12px;
    color: #661422;
    font-weight: 500;
`

const ActionButtons = styled.div`
    display: flex;
    position: absolute;
    right: 32px;
    bottom: 20px;
    gap: 32px;
    font-size: 36px;
    color: #feebb9;
    svg {
        transition: transform 0.2s, color 0.2s;
        &:hover {
            transform: scale(1.2); /* Aumenta o tamanho no hover */
            color: #661422; /* Altere para a cor desejada */
        }
    }
`

function Grid({ searchResults }) {
    const [books, setBooks] = useState([]);
    const [openBook, setOpenBook] = useState(null); //livro que está sendo exibido
    const [isEditing, setIsEditing] = useState(false); //estado de edição
    const [editedBook, setEditedBook] = useState({}); //livro que está sendo editado

    useEffect(() => {
        fetchBooks(); 
    }, []);

    async function fetchBooks() {
        const gridBooks = await getBooks();
        setBooks(gridBooks);
    };

    const booksToDisplay = searchResults.length > 0 ? searchResults : books;

    const openModalBook = (book) => {
        setOpenBook(book); //armazena o livro para ser exibido
        setEditedBook({ ...book }); //cria uma cópia do livro para edição
    };

    const closeModalBook = () => {
        setOpenBook(null);
        setIsEditing(false);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (edit) => {
        const { name, value } = edit.target; //extrai o "name" e o "value" do campo que disparou o evento
        setEditedBook({ ...editedBook, [name]: value }); //atualiza apenas o campo correspondente no estado
    };

    const saveChanges = async () => {
        try {
            await patchBook(editedBook._id, editedBook); // Salva as alterações no backend
            await fetchBooks(); // Atualiza a lista de livros diretamente da API
            setOpenBook(null); // Fecha o modal após salvar
            setIsEditing(false); // Sai do modo de edição
        } catch (error) {
            console.error("Failed to edit book:", error);
        }
    };

    const deleteBookFromBookshelf = async (id) => {
        try{
            await deleteBook(id); //chama o serviço para excluir o livro
            setBooks((oldBooks) => oldBooks.filter((book) => book._id !== id));
            closeModalBook();
        } catch (error) {
            console.error("Failed to delete book:", error)
        }
    }

    return (
        <>
            <StyledGrid>
                {booksToDisplay.map((book) => (
                    <BookContainer
                        key={book._id}
                        onClick={() => openModalBook(book)}
                    >
                        <img src={book.coverUrl} alt={`${book.title} book cover`} />
                        <h4>{book.title}</h4>
                        <p>{book.author.name}</p>
                    </BookContainer>
                ))}
            </StyledGrid>
            {openBook ? (
                <>
                    <Overlay onClick={closeModalBook} />
                    <Hero>
                        <img src={openBook.coverUrl || "https://via.placeholder.com/150"} alt={`${openBook.title} book cover`} />
                        <Side>
                            <BookInfo>
                                {isEditing ? (
                                    <>
                                        <Input
                                            type="text"
                                            name="title"
                                            value={editedBook.title}
                                            onChange={handleInputChange}
                                        />
                                        <Input
                                            type="text"
                                            name="author"
                                            value={editedBook.author.name}
                                            onChange={handleInputChange}
                                        />
                                        <Input
                                            type="text"
                                            name="publisher"
                                            value={editedBook.publisher}
                                            onChange={handleInputChange}
                                        />
                                        <Input
                                            type="text"
                                            name="coverUrl"
                                            value={editedBook.coverUrl}
                                            onChange={handleInputChange}
                                        />
                                        <Input
                                            type="number"
                                            name="rating"
                                            max="10"
                                            min="1"
                                            value={editedBook.rating}
                                            onChange={handleInputChange}
                                        />
                                        <Input
                                            type="text"
                                            name="comments"
                                            value={editedBook.comments}
                                            onChange={handleInputChange}
                                        />
                                    </>
                                ) : (

                                    <>
                                        <h2>{openBook.title}</h2>
                                        <h3>Author: {openBook.author.name}</h3>
                                        <h4>Publisher: {openBook.publisher}</h4>
                                        <p>Comments: {openBook.comments}</p>
                                        <p>Rate: {openBook.rating}</p>
                                    </>
                                )}
                            </BookInfo>
                            <ActionButtons>
                                {isEditing ? (
                                    <>
                                        <TbPencilCheck onClick={saveChanges} title="Save"/>
                                        <TbPencilCancel onClick={handleEditToggle} title="Cancel"/>
                                    </>
                                ) : (
                                    <>
                                    <TbPencil onClick={handleEditToggle} title="Edit"/>
                                    <TbPencilX onClick={() => deleteBookFromBookshelf(openBook._id)} title="Delete"/>
                                    </>
                                )}
                            </ActionButtons>
                        </Side>
                    </Hero>
                </>
            ) : ( <p> Open a card to view or edit information </p>
            )}
        </>
    );
}

export default Grid