import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './page/loginPage/loginPage'
import HomePage from './page/homePage/homePage'
import { Fragment } from 'react'
import RegisterPage from './page/registerPage/registerPage'
import TaskPage from './page/taskPage/taskPage'

export function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/adding-task" element={<TaskPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
