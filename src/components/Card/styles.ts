import styled from 'styled-components'
import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  background-color: #f9f4f8;
  border-radius: 3rem;
  min-width: 25rem;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem 0 #bfbfba;

  ${mediaQueries.lessThan('md')`
      min-width: 20rem;
    `};
`

const handleColorLevel = (color: any) => {
  switch (color) {
    case 'easy':
      return '#5F8C1B'
    case 'middle':
      return '#F28B30'
    case 'difficult':
      return '#BF2A2A'
  }
}

export const Level = styled.div`
  height: 4rem;
  width: 100%;
  background-color: ${({ color }) => handleColorLevel(color)};
  border-radius: 3rem 3rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  padding: 2rem;
`

export const Button = styled.button`
  background-color: ${({ color }) => handleColorLevel(color)};
  margin: 2rem;
  border: none;
  border-radius: 2rem;
  height: 3rem;
  font-size: 1.5rem;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.4);
    transition: 0.2s ease-in-out;
  }
`
