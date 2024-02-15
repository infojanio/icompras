import { ReactNode, createContext, useEffect, useState } from 'react'

import {
  storageCitySave,
  storageCityGet,
  storageCityRemove,
} from '@storage/storageCity'

import { CityDTO } from '@dtos/CityDTO'
import { api } from '@services/api'

export type CityContextDataProps = {
  city: CityDTO
  /*
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  */
  isLoadingCityStorageData: boolean
}

type CityContextProviderProps = {
  children: ReactNode
}

export const CityContext = createContext<CityContextDataProps>(
  {} as CityContextDataProps,
)

//criação de contexto
export function CityContextProvider({ children }: CityContextProviderProps) {
  //armazenamos os dados em um estado
  const [city, setCity] = useState<CityDTO>({} as CityDTO)
  const [isLoadingCityStorageData, setIsLoadingCityStorageData] = useState(true)

  //salva as informações no dispositivo
  async function storageCityAndTokenSave(
    cityData: CityDTO,
    token: string,
    refresh_token: string,
  ) {
    try {
      setIsLoadingCityStorageData(true)

      await storageCitySave(cityData)
    } catch (error) {
      throw error
    } finally {
      setIsLoadingCityStorageData(false)
    }
  }

  //retorna os dados do token e do usuário logado
  async function loadCityData() {
    try {
      setIsLoadingCityStorageData(true)
    } catch (error) {
      throw error
    } finally {
      setIsLoadingCityStorageData(false)
    }
  }

  useEffect(() => {
    loadCityData()
  }, [])

  return (
    <CityContext.Provider
      value={{
        city,
        isLoadingCityStorageData,
      }}
    >
      {children}
    </CityContext.Provider>
  )
}
