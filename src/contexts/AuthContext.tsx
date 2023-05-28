import { UserDTO } from '@dtos/UserDTO'
import { ReactNode, createContext, useState } from 'react'

export type AuthContextDataProps = {
  user: UserDTO
}

type authContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

//criação de contexto
export function AuthContextProvider({ children }: authContextProviderProps) {
  //armazenamos os dados em um estado
  const [user, setUser] = useState({
    id: '1',
    name: 'Jânio',
    email: 'janio@saneago.com.br',
    avatar: 'perfil.png',
  })

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
