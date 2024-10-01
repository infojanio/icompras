import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { CompanyCard } from '@components/Company/CompanyCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { TenantDTO } from '@dtos/TenantDTO'
import { Loading } from '@components/Loading'
import { CompanyDTO } from '@dtos/CompanyDTO'

type RouteParamsProps = {
  cityId: string
  companyId: string
}

type Props = {
  tenant: string
  company: string
  data: CompanyDTO[]
}

export function Company() {
  const [tenants, setTenants] = useState<TenantDTO[]>([])

  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenCompanies(tenantId: string) {
    navigation.navigate('companiesByTenant', { tenantId })
  }

  const route = useRoute()
  const { cityId } = route.params as RouteParamsProps
  console.log('city=>', cityId)

  //listar os tipos de empresa
  async function fetchCompanies() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/categories/${categoryId}`)
      //const response = await api.get(`/companies`)
      const response = await api.get(`/companies/city/?city_id=${cityId}`)

      setCompanies(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as lojas cadastradas'

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
    fetchCompanies()
    // fetchDepartments()
  }, [cityId])

  return (
    <HStack>
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
                onPress={() => handleOpenCompanies(item.id)}
              />
            )}
            //horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 2 }}
            mt={4}
            mb={14}
          />
        </VStack>
      )}
    </HStack>
  )
}
