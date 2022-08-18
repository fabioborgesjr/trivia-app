import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.backgroundColor};
  color: white;
  background-color: ${props => props.backgroundColor};
  font-family: cursive;
  font-size: 1em;
  margin: 0 1em;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.8
  }
`

export default Button