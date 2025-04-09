import styled from "styled-components";
import { Outlet } from "react-router";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import GlobalStyle from "../../components/GlobalStyles";

const GradientBackground = styled.div`
display: flex;
flex-direction: column;
top: 0px;
background: linear-gradient(174.61deg, #661422 4.16%, #db5f3c 48%, #feebb9 96.76%);
max-width: 100%;
min-height: 100vh;
overflow: hidden;
`
const Container = styled.div`
display: flex;
margin: 2em 12em;
align-items: center;
justify-content: center;
`

function Core() {

    return (
        <GradientBackground>
            <GlobalStyle />
            <Header />
            <Banner />
            <Container>
                <Outlet />
            </Container>
        </GradientBackground>
    )
}

export default Core