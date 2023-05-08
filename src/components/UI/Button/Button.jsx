import styled from 'styled-components'
 const Button = (props) => {
    return(
        <Buttons onClick={props.onClick}>{props.children}</Buttons>
    )
}

const Buttons = styled.button`
    padding: 13px 25px;
    font-weight: 600;
    color: aliceblue;
    background-color: #4a026b;
    border:none;
    border-radius: 8px;
    cursor: pointer;
`
export default Button