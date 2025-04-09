import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import styled from "styled-components";
import { postBook } from "../../services/BookService.jsx";
import Overlay from "../Overlay/index.jsx";
import Input from "../Input/index.jsx";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: #661422;
    color: #feebb9;
    width: 40%;
    padding: 12px;
    margin: 12px;
    border-radius: 24px;
    &:hover{
        cursor: pointer;
        background-color: #db5f3c;
        color: #661422;
}
`

const FormContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 38%;
    background: #db5f3c;
    width: fit-content;
    border-radius: 24px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #feebb9;
    background-color: #661422;
    border-radius: 20px 20px 0 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin: 46px;
    gap: 16px;
`

const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 18px;
    color: #661422;
    background-color: #feebb9;
    font-size: 32px;
    font-weight: 600;
    margin-top: 32px;
    width: 70%;
    &:hover{
        cursor: pointer;
        background-color: #661422;
        color: #feebb9;
    }
`


function InsertBook() {

    const [modalForm, setModalForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        rating: "",
        comments: "",
        coverUrl: "",
    });

    const openModal = () => setModalForm(true);
    const closeModal = () => setModalForm(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await postBook(formData);
            alert("Book successfully added!");
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book. Please try again.");
        }
    };

    return (
        <>
            <StyledButton onClick={openModal}>Insert a book</StyledButton>

            {modalForm && (
                <>
                    <Overlay onClick={closeModal}/>
                    <FormContainer>
                        <TitleContainer>
                            <h2>Insert a new book</h2>
                            <IoIosCloseCircle onClick={closeModal} color="#db5f3c" size='32px' cursor='pointer' />
                        </TitleContainer>
                        <StyledForm onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="title"
                                placeholder="What's the book title?"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="author"
                                placeholder="Who's the book author?"
                                value={formData.author}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="publisher"
                                placeholder="Who published it?"
                                value={formData.publisher}
                                onChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="coverUrl"
                                placeholder="Is there a link to the cover image?"
                                value={formData.coverUrl}
                                onChange={handleChange}
                            />
                            <Input
                                type="number"
                                max="10"
                                min="1"
                                name="rating"
                                placeholder="Rate it from 1 to 10."
                                value={formData.rating}
                                onChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="comments"
                                placeholder="Insert a comment about it."
                                value={formData.comments}
                                onChange={handleChange}
                            />
                            <SendButton type="submit">Send</SendButton>
                        </StyledForm>
                    </FormContainer>
                </>
            )}
        </>
    )
}

export default InsertBook