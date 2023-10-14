import React from 'react'
import * as S from './styles'
import logoJI from '../../assets/logo-japa-idiomas.png'

export interface ILoginTemplateProps {
  children: React.ReactNode
}

const LoginTemplate = ({ children }: ILoginTemplateProps) => {
  return (
    <S.Container>
      <S.SectionImage>
        <img src={logoJI} alt="Logo Jap Idiomas" />
      </S.SectionImage>
      <S.SectionLogin>
        <S.FormLogin>{children}</S.FormLogin>
      </S.SectionLogin>
    </S.Container>
  )
}

export default LoginTemplate
