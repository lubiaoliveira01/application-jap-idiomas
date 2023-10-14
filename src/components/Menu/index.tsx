import React, { useState } from 'react'
import * as S from './styles'
import logoJI from '../../assets/logo-japa-idiomas.png'
import iconMenu from '../../assets/icon-menu.svg'
import Paragraph from '../Paragraph'

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <S.Container>
        <img src={logoJI} alt="Logo Jap Idiomas" />
        <Paragraph weight="bold" colorType="white">
          <S.ItemMenu href="/home" rel="noopener noreferrer">
            Home
          </S.ItemMenu>
          <S.ItemMenu href="/" rel="noopener noreferrer">
            Alunos
          </S.ItemMenu>
          <S.ItemMenu href="/" rel="noopener noreferrer">
            Exercícios
          </S.ItemMenu>
          <S.ItemMenu href="/" rel="noopener noreferrer">
            Perfil
          </S.ItemMenu>
        </Paragraph>
        <S.SideIcon onClick={() => setIsOpen(!isOpen)}>
          <img src={iconMenu} width={45} alt="Logo Jap Idiomas" />
        </S.SideIcon>
      </S.Container>
      {isOpen && (
        <S.SideMenu>
          <Paragraph weight="bold" colorType="white">
            <S.SideItem href="/" rel="noopener noreferrer">
              Home
            </S.SideItem>
            <S.SideItem href="/" rel="noopener noreferrer">
              Alunos
            </S.SideItem>
            <S.SideItem href="/" rel="noopener noreferrer">
              Exercícios
            </S.SideItem>
            <S.SideItem href="/" rel="noopener noreferrer">
              Perfil
            </S.SideItem>
          </Paragraph>
        </S.SideMenu>
      )}
    </>
  )
}

export default Menu
