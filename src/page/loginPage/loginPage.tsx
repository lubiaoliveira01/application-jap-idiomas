import React, { useState } from 'react'
import * as S from './loginPage.styles'
import { Link, useNavigate } from 'react-router-dom'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import useAuth from '../../hooks/useAuth'
import LoginTemplate from '../../template/login'

const LoginPage = () => {
  const navigate = useNavigate()
  const { signin } = useAuth()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email || !senha) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <LoginTemplate>
      <Heading size="h3">Login</Heading>
      <Paragraph weight="normal">Digite os seus dados de acessos nos campos abaixo:</Paragraph>
      <Heading size="h6">E-mail</Heading>
      <S.Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e: any) => [setEmail(e.target.value), setError('')]}
      ></S.Input>
      <Heading size="h6">Senha</Heading>
      <S.Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e: any) => [setSenha(e.target.value), setError('')]}
      ></S.Input>
      <S.labelError>{error}</S.labelError>
      <S.Button type="submit" onClick={handleLogin}>
        Acessar
      </S.Button>
      <Paragraph size="medium" alignment="center">
        Não tem uma conta?
        <S.Strong>
          <Link to="/register">&nbsp;Cadastre-se</Link>
        </S.Strong>
      </Paragraph>
    </LoginTemplate>
  )
}

export default LoginPage
