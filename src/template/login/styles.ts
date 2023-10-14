import styled from 'styled-components'
import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  font-family: Tilt Neon;
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  padding: 5rem;
  grid-template-columns: 1fr 1fr;
  background-color: #582c83;

  ${mediaQueries.lessThan('xl')`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  `}
`

export const SectionImage = styled.div`
  background-color: #8f63ba;
  border-radius: 5rem 0 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  & > img {
    width: 60%;
  }

  ${mediaQueries.lessThan('xl')`
    width: 80%;
    border-radius: 5rem 5rem 0 0;
    padding: 1rem;

    & > img {
      width: 40%;
    }
  `}

  ${mediaQueries.lessThan('lg')`
    height: 40vh;

    & > img {
      width: 50%;
    }
  `}
`

export const SectionLogin = styled.div`
  background-color: white;
  border-radius: 0 5rem 5rem 0;
  height: 80vh;
  display: grid;
  align-items: center;
  justify-content: center;

  ${mediaQueries.lessThan('xl')`
    width: 80%;
    border-radius: 0 0 5rem 5rem;
    padding: 1rem;
  `}
`

export const FormLogin = styled.div`
  display: grid;
`
