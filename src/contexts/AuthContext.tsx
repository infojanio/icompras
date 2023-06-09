import { ReactNode, createContext, useEffect, useState } from 'react'

import { storageUserSave, storageUserGet } from '@storage/storageUser'

import { UserDTO } from '@dtos/UserDTO'
import { api } from '@services/api'

export type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

//criação de contexto
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  //armazenamos os dados em um estado
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  //Faz o login no aplicativo
  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password })

      if (data.user) {
        setUser(data.user)
        storageUserSave(data.user) // salva os dados no dispositivo
      }
    } catch (error) {
      throw error
    }
  }

  //retorna os dados do usuário logado
  async function loadUserData() {
    const userLogged = await storageUserGet()

    if (userLogged) {
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserData()
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
