import styled from 'styled-components'

export const Button = styled.button`
  background-color: #582c83;
  margin: 1rem;
  border: none;
  border-radius: 2rem;
  height: 4rem;
  font-size: 2rem;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.6);
    transition: 0.2s ease-in-out;
  }
`

export const Input = styled.input`
  border-radius: 1rem;
  border: #d9d8d2 solid 2px;
  padding: 0.5rem;
  margin: 0.5rem 0 1rem 0;
  height: 2rem;

  &:hover {
    border: #73726f solid 2px;
  }
`

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`
