import { useEffect, useState } from 'react'
import { Text, Center, FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { CityCard } from '@components/CitySelect/CityCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { CityDTO } from '@dtos/CityDTO'
import { Loading } from '@components/Loading'
import { HomeHeader } from '@components/HomeHeader'
import { HomeScreen } from '@components/HomeScreen'
import { CompanyDTO } from '@dtos/CompanyDTO'
import { CompanyCard } from '@components/Company/CompanyCard'
import { TenantDTO } from '@dtos/TenantDTO'

type RouteParamsProps = {
  tenantId: string
}

type Props = {
  tenant: string
  data: CompanyDTO[]
}

export function CompaniesByTenant() {
  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [tenants, setTenants] = useState<TenantDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenHome(cityId: string) {
    navigation.navigate('home', { cityId })
  }

  const route = useRoute()
  const { tenantId } = route.params as RouteParamsProps
  console.log('ID tenant=>', tenantId)

  //listar os estabelecimentos por Ramo de atividade, ex: Farmácias
  async function fetchCompanies() {
    try {
      setIsLoading(true)
      //const response = await api.get('/companies')
      const response = await api.get(`/companies/tenant/?tenant_id=${tenantId}`)
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
    // fetchTenants()
    fetchCompanies()
  }, [tenantId])

  const firstCompany = companies.length > 0 ? companies[0] : null

  return (
    <VStack>
      {/*
      <HomeScreen title="Empresas" />
  */}
      <Text left={5}>Estabelecimentos</Text>
      <VStack>
        {isLoading ? (
          <Loading />
        ) : (
          <VStack>
            {firstCompany ? (
              <FlatList
                data={companies}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CompanyCard
                    data={item}
                    onPress={() => handleOpenHome(item.id)}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 2 }}
                mt={4}
                mb={24}
              />
            ) : (
              <Center mt={6} mb={2}>
                <Text color={'red.600'} fontSize={14}>
                  Nenhuma empresa encontrada!
                </Text>
              </Center>
            )}
          </VStack>
        )}
      </VStack>
    </VStack>
  )
}
