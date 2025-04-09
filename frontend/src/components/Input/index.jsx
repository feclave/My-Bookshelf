import styled from "styled-components";

const StyledInput = styled.input`
    display: flex;
    width: 280px;
    border-radius: 18px;
    padding: 12px;
    color: #661422;
    background-color: #feebb9;
`

function Input(props) {
    return(
        <StyledInput {...props}/>
    )
}

export default Input