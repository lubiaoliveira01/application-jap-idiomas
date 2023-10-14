import { createContext, useEffect, useState, ReactNode } from 'react'

export interface IUserProps {
  email: string
  password: string
}

interface IAuthContextProps {
  user: IUserProps | null
  signed: boolean
  signin: (email: string, password: string) => void | string
  signup: (email: string, password: string) => void | string
  signout: () => void
}

export const AuthContext = createContext<IAuthContextProps>({
  user: null,
  signed: false,
  signin: () => {},
  signup: () => {},
  signout: () => {},
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUserProps | null>(null)

  useEffect(() => {
    const userToken = localStorage.getItem('user_token')
    const usersStorage = localStorage.getItem('users_bd')

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user: IUserProps) => user.email === JSON.parse(userToken).email,
      )

      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const signin = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd')!)

    const hasUser = usersStorage?.filter((user: IUserProps) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('user_token', JSON.stringify({ email, token }))
        setUser({ email, password })
        return
      } else {
        return 'E-mail ou senha incorretos.'
      }
    } else {
      return 'Usuário não cadastrado.'
    }
  }

  const signup = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd')!)

    const hasUser = usersStorage?.filter((user: IUserProps) => user.email === email)

    if (hasUser?.length) {
      return 'Já tem uma conta com esse E-mail.'
    }

    let newUser: IUserProps[]

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }]
    } else {
      newUser = [{ email, password }]
    }

    localStorage.setItem('users_bd', JSON.stringify(newUser))

    return
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
  }

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
