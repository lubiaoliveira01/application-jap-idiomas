import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const Section = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 3rem;

  ${mediaQueries.lessThan('lg')`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  `}

  & > div {
    font-size: 1.4rem;
  }
`

export const Button = styled.button`
  background-color: #582C83;
  border: none;
  border-radius: 2rem;
  padding: 1rem;
  min-height: 3rem;
  font-size: 1.5rem;
  color: white;
  font-family: Poiret One;
  width: 50%;
  justify-self: end;
  margin-top: 2rem;
  
  ${mediaQueries.lessThan('md')`
    width: 100%;
  `};
  
  &:hover{
    cursor: pointer;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0,0,0,0.60);
    transition: 0.2s ease-in-out;
  }
`

export const Container = styled.div`
  display: grid;
  padding-top: 5rem;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 3rem 1rem;

  ${mediaQueries.lessThan('xl')`
    grid-template-columns: 1fr 1fr;
  `};

${mediaQueries.lessThan('lg')`
    grid-template-columns: 1fr;
  `};
`
