import React from 'react'
import Card from '../../components/Card'
import * as S from './homePage.styles'
import Template from '../../template/home'
import Heading from '../../components/Heading'
import { useNavigate } from 'react-router-dom'
import mockTasks from '../../mocks/mockAPI.json'

export interface ITasksProps {
  data?: ITask[]
}

export interface ITask {
  id: number
  nameTask: string
  description: string
  level?: string
}

const CardEasy = ({ id, nameTask, description }: ITask) => {
  return (
    <Card
      key={id}
      nameLevel="FÁCIL"
      level="easy"
      title={nameTask}
      description={description}
      nameButton="VER TAREFA"
    />
  )
}

const CardMiddle = ({ id, nameTask, description }: ITask) => {
  return (
    <Card
      key={id}
      nameLevel="MÉDIO"
      level="middle"
      title={nameTask}
      description={description}
      nameButton="VER TAREFA"
    />
  )
}

const CardDifficult = ({ id, nameTask, description }: ITask) => {
  return (
    <Card
      key={id}
      nameLevel="DIFÍCIL"
      level="difficult"
      title={nameTask}
      description={description}
      nameButton="VER TAREFA"
    />
  )
}

const HomePage = () => {
  const navigate = useNavigate()

  const Storage = JSON.parse(localStorage.getItem('users_bd')!)
  const name = Storage[0].email

  return (
    <Template>
      <S.Section>
        <Heading size="h4">Konnichiwa, Sensei {name}!</Heading>
        <S.Button type="submit" onClick={() => navigate('/adding-task')}>
          + Adicionar tarefa
        </S.Button>
      </S.Section>
      <S.Container>
        {mockTasks?.map(({ id, nameTask, description, level }) => {
          switch (level) {
            case 1:
              return CardEasy({ id, nameTask, description })
            case 2:
              return CardMiddle({ id, nameTask, description })
            case 3:
              return CardDifficult({ id, nameTask, description })
          }
        })}
      </S.Container>
    </Template>
  )
}

export default HomePage
