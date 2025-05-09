import styled from "styled-components";
import banner from "@/assets/mybookshelf.png";
import InsertBook from "../InsertBook";

const StyledBanner = styled.div`
display: flex;
flex-direction: column;
background-image: url(${banner});
background-size: cover;
max-width: 100%;
min-height: 360px;
border-radius: 24px;
margin: 0 10px;
`

const StyledTitle = styled.h1`
display: flex;
padding: 0 12px;
color: #661422;
font-size: 52px;
`

const StyledText = styled.p`
display: flex;
align-items: start;
text-align: left;
padding: 0 12px;
color: #661422;
font-size: 32px;
`

function Banner() {
    return (
        <StyledBanner>
            <StyledTitle>Organize your books</StyledTitle>
            <StyledText>and make room for new stories</StyledText>
            <InsertBook/>
        </StyledBanner>
    )
}

export default Banner

// Modificação feita para a Iteração 2