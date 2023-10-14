import styled from 'styled-components'
import mediaQueries from '../../styles/mediaQueries'

export const FormContent = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  ${mediaQueries.lessThan('lg')`
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    align-items: baseline;
    padding: 0;
  `}
`

export const Input = styled.input`
  border-radius: 1rem;
  border: #d9d8d2 solid 2px;
  padding: 0.75rem;
  margin-top: 1rem;
  height: 2rem;
  width: 100%;
  font-family: Poiret One;
  font-size: 1.5rem;

  &:hover {
    border: #73726f solid 2px;
  }
`

export const ContentCheckbox = styled.div`
  & > div {
    padding-bottom: 1.5rem;
  }

  & > label {
    font-family: Poiret One;
    padding: 0.5rem;
    font-size: 1.5rem;

    ${mediaQueries.lessThan('lg')`
    display: flex;
    
  `}
  }
`

export const Textarea = styled.textarea`
  border-radius: 1rem;
  border: #d9d8d2 solid 2px;
  padding: 0.75rem;
  margin-top: 1rem;
  height: 5rem;
  width: 100%;
  font-family: Poiret One;
  font-size: 1.5rem;

  ${mediaQueries.lessThan('lg')`
    width: 50vw;
  `};
`

export const Button = styled.button`
  background-color: #582c83;
  border: none;
  border-radius: 2rem;
  min-height: 3rem;
  font-size: 1.5rem;
  color: white;
  font-family: Poiret One;
  width: 30%;
  margin-top: 2rem;

  ${mediaQueries.lessThan('md')`
    width: 100%;
  `};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.6);
    transition: 0.2s ease-in-out;
  }
`
