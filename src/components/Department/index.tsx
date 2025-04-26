import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { DepartmentCard } from '@components/Department/DepartmentCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { TenantDTO } from '@dtos/TenantDTO'
import { Loading } from '@components/Loading'
import { CompanyDTO } from '@dtos/CompanyDTO'

type RouteParamsProps = {
<<<<<<< HEAD
  cityId: string
  companyId: string
=======
  userId: string
  //  companyId: string
>>>>>>> loja
}

type Props = {
  tenant: string
  company: string
  data: TenantDTO[]
}

export function Department() {
  const [tenants, setTenants] = useState<TenantDTO[]>([])
  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenCompanies(tenantId: string) {
    navigation.navigate('companiesByDepartment', { tenantId })
  }

  const route = useRoute()
<<<<<<< HEAD
  const { cityId } = route.params as RouteParamsProps
  console.log('cidade=>', cityId)
=======
  const { userId } = route.params as RouteParamsProps
  console.log('ID usuário=>', userId)

  //const { companyId } = route.params as RouteParamsProps
  //console.log('ID company=>', companyId)

  /*listar os tipos de empresa
  async function fetchCompanies() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/categories/${categoryId}`)
      const response = await api.get(`/companies/${companyId}`)
      setCompanies(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as lojas cadastradas'
>>>>>>> loja

  const { companyId } = route.params as RouteParamsProps
  console.log('ID company=>', companyId)

  //listar os departamentos
  async function fetchDepartments() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/tenants`)
      const response = await api.get(`/tenants/city/?city_id=${cityId}`)
      //const response = await api.get('/categories/category/?category_id=${categoryId}')
      console.log(response.data)
      setTenants(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os departamentos cadastrados'

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
    // fetchCompanies()
    fetchDepartments()
<<<<<<< HEAD
  }, [cityId])
=======
  }, [userId])
>>>>>>> loja

  return (
    <HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack>
          <FlatList
            data={tenants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DepartmentCard
                data={item}
                onPress={() => handleOpenCompanies(item.id)}
              />
            )}
            horizontal
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
