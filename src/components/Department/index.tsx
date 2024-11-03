import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { DepartmentCard } from '@components/Department/DepartmentCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { TenantDTO } from '@dtos/TenantDTO'
import { Loading } from '@components/Loading'
import { CompanyDTO } from '@dtos/CompanyDTO'

type RouteParamsProps = {
  userId: string
  //  companyId: string
}

type Props = {
  department: string
  data: TenantDTO[]
}

export function Department() {
  const [department, setDepartments] = useState<TenantDTO[]>([])

  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenSubCategories(tenantId: string) {
    // navigation.navigate('productBySubCategory', { tenantId })
  }

  const route = useRoute()
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

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }
  */

  //listar as categorias
  async function fetchDepartments() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/companies/company/?company_id=${companyId}`,
      const response = await api.get(`/tenants`)

      //const response = await api.get('/categories/category/?category_id=${categoryId}')

      setDepartments(response.data)
      console.log(response.data)
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
    //fetchCompanies()
    fetchDepartments()
  }, [userId])

  return (
    <HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack>
          <FlatList
            data={department}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DepartmentCard
                data={item}
                onPress={() => handleOpenSubCategories(item.id)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 2 }}
            mt={4}
            mb={24}
          />
        </VStack>
      )}
    </HStack>
  )
}
