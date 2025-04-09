import styled from "styled-components";

const StyledOverlay = styled.div`
    background-color: rgba(255, 234, 207, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

function Overlay(props) {
    return(
        <StyledOverlay {...props}/>
    )
}

export default Overlay