import React, { useState } from 'react'
import * as S from './registerPage.styles'
import { useNavigate } from 'react-router-dom'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import useAuth from '../../hooks/useAuth'
import LoginTemplate from '../../template/login'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [emailConf, setEmailConf] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleRegister = () => {
    if (!email || !emailConf || !senha) {
      setError('Preencha todos os campos.')
      return
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais.')
      return
    }

    const res = signup(email, senha)

    if (res) {
      setError(res)
      return
    }

    alert('Usuário cadatrado com sucesso!')
    navigate('/')
  }

  return (
    <LoginTemplate>
      <Heading size="h3">Cadastre-se</Heading>
      <Paragraph weight="normal">Preencha os campos necessários abaixo:</Paragraph>
      <Heading size="h6">E-mail</Heading>
      <S.Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e: any) => [setEmail(e.target.value), setError('')]}
      />
      <Heading size="h6">Confirme o E-mail</Heading>
      <S.Input
        type="email"
        placeholder="Confirme o seu e-mail"
        value={emailConf}
        onChange={(e: any) => [setEmailConf(e.target.value), setError('')]}
      />
      <Heading size="h6">Senha</Heading>
      <S.Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e: any) => [setSenha(e.target.value), setError('')]}
      />
      <S.labelError>{error}</S.labelError>
      <S.Button type="submit" onClick={handleRegister}>
        Cadastrar
      </S.Button>
    </LoginTemplate>
  )
}

export default RegisterPage
