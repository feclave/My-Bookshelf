import styled from "styled-components";
import logo from "@/assets/logo.png";
import { Link } from "react-router";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    background-color: #661422;
    padding: 8px;
    max-width: 100%;
    margin: 10px;
`

const StyledList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    margin-right: 32px;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #feebb9;
    font-size: 24px;
    &:hover{
    cursor: pointer;
    color: #db5f3c;
    font-size: 34px;
    }
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #feebb9;
    font-size: 32px;
    gap: 12px;
    margin-left: 32px;
`

function Header() {

    return (
        <StyledHeader>
                <Logo>
                <img src={logo} /> My Bookshelf
                </Logo>
            <StyledList>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/bookshelf'>Bookshelf</StyledLink>
            </StyledList>
        </StyledHeader>
    )
}

export default Header