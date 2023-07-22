import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { CityCard } from '@components/CitySelect/CityCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { CityDTO } from '@dtos/CityDTO'
import { Loading } from '@components/Loading'
import { HomeHeader } from '@components/HomeHeader'
import { HomeScreen } from '@components/HomeScreen'
import { CompanyDTO } from '@dtos/CompanyDTO'
import { CompanyCard } from '@components/Company/CompanyCard'

type RouteParamsProps = {
  cityId: string
}

export function CompanyByCity() {
  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  /*
  function handleOpenCompanies(cityId: string) {
    navigation.navigate('companyByCity', { cityId })
  }
  */

  const route = useRoute()
  const { cityId } = route.params as RouteParamsProps
  console.log('ID city=>', cityId)

  //listar as citias
  async function fetchCities() {
    try {
      setIsLoading(true)
      const response = await api.get(`/cities/${cityId}`)
      // const response = await api.get('/companies')
      setCompanies(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades cadastradas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  //listar as subcategories no select
  async function fetchCompanies() {
    try {
      setIsLoading(true)
      //const response = await api.get('/companies')
      const response = await api.get(`/companies/city/?city_id=${cityId}`)

      console.log(response.data)
      setCompanies(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as empresas'
      console.log('Não foi possível carregar as empresas')

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCities()
    fetchCompanies()
  }, [cityId])

  return (
    <VStack>
      <HomeScreen title="Empresas" />
      <VStack>
        {isLoading ? (
          <Loading />
        ) : (
          <VStack>
            <FlatList
              data={companies}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CompanyCard
                  data={item}
                  //  onPress={() => handleOpenCompanies(item.id)}
                />
              )}
              showsHorizontalScrollIndicator={false}
              _contentContainerStyle={{ px: 2 }}
              mt={4}
              mb={24}
            />
          </VStack>
        )}
      </VStack>
    </VStack>
  )
}
