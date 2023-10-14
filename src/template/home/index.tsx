import React from 'react'
import Menu from '../../components/Menu'
import * as S from './styles'
import Footer from '../../components/Footer'

export interface ITemplateProps {
  children?: React.ReactNode
}

const Template = ({ children }: ITemplateProps) => {
  return (
    <S.Container>
      <Menu />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  )
}

export default Template
