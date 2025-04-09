import styled from "styled-components";
import Grid from "../../components/Grid";
import Search from "../../components/Search";
import { useState } from "react";

const BookshelfContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 22px;

    h1{
        display: flex;
        color: #661422;
    }
`

function Bookshelf() {
    const [searchResults, setSearchResults] = useState([]); //armazena os resultados da busca

    return (
        <BookshelfContainer>
            <TitleContainer>
                <h1>Bookshelf</h1>
                <Search setSearchResults={setSearchResults} />
            </TitleContainer>
            <Grid searchResults={searchResults} />
        </BookshelfContainer>
    );
}
export default Bookshelf