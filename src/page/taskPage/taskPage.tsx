import React from 'react'
import * as S from './taskPage.styles'
import Template from '../../template/home'
import Heading from '../../components/Heading'

const TaskPage = () => {
  return (
    <Template>
      <Heading size="h4" colorType="secondary">
        Adicionar Tarefa
      </Heading>
      <S.FormContent>
        <div>
          <Heading size="h6">Nome tarefa</Heading>
          <S.Input type="email" placeholder="Digite o nome da tarefa"></S.Input>
        </div>
        <S.ContentCheckbox>
          <Heading size="h6">Dificuldade</Heading>
          <label>
            <input type="radio" name="radio" />
            Fácil
          </label>
          <label>
            <input type="radio" name="radio" />
            Médio
          </label>
          <label>
            <input type="radio" name="radio" />
            Difícil
          </label>
        </S.ContentCheckbox>
        <div>
          <Heading size="h6">Tempo estipulado</Heading>
          <S.Input type="email" placeholder="Digite o tempo da tarefa"></S.Input>
        </div>
        <div>
          <Heading size="h6">Descrição</Heading>
          <S.Textarea placeholder="Digite a descrição da tarefa"></S.Textarea>
        </div>
      </S.FormContent>
      <S.Button type="submit">Criar</S.Button>
    </Template>
  )
}

export default TaskPage
