/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { getBooks } from "../../services/BookService";
import { IoReloadCircle } from "react-icons/io5";
import Input from "../Input";

const SearchContainer = styled.form`
    display: flex;
    height: fit-content;
    gap: 12px;

    button, svg {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 8px;
    background-color: #feebb9;
    font-weight: 600;
    color: #661422;
    transition: transform 0.2s, color 0.2s;

    &:hover{
        cursor: pointer;
        color: #db5f3c;
        background-color: #661422;
        transform: scale(1.2);
        }
    }
    `
function Search({ setSearchResults }) { //ambas as funçõs são recebidas como props da pagina bookshelf
    const [query, setQuery] = useState(""); //query armazena o texto digitado, setquery atualiza o valor digitado na busca

    const handleSearch = async (event) => {
        event.preventDefault();

        if (query.trim()) {
            
            try {
                const results = await getBooks(query); //realiza a busca diretamente no backend
                setSearchResults(results);
            } catch (error) {
                console.error("Failed to get books:", error);
                setSearchResults([]);
            }
        }
    };

    return (
        <SearchContainer onSubmit={handleSearch}>
            <Input
                placeholder="Book title, author or publisher"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
            <IoReloadCircle size="32px" onClick={() => window.location.reload()} />
        </SearchContainer>
    );
}

export default Search