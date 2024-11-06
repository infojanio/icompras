import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { CategoryCard } from '@components/Category/CategoryCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { CategoryDTO } from '@dtos/CategoryDTO'
import { Loading } from '@components/Loading'
import { CompanyDTO } from '@dtos/CompanyDTO'

type RouteParamsProps = {
  categoryId: string
  //  companyId: string
}

type Props = {
  category: string
  data: CategoryDTO[]
}

export function Category() {
  const [categories, setCategories] = useState<CategoryDTO[]>([])

  const [companies, setCompanies] = useState<CompanyDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenSubCategories(categoryId: string) {
    navigation.navigate('productBySubCategory', { categoryId })
  }

  /*
  const route = useRoute()
  const { categoryId } = route.params as RouteParamsProps
  console.log('ID category=>', categoryId)

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
  async function fetchCategories() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/companies/company/?company_id=${companyId}`,
      const response = await api.get(`/categories`)

      //const response = await api.get('/categories/category/?category_id=${categoryId}')

      setCategories(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as categorias cadastradas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(
    () => {
      //fetchCompanies()
      fetchCategories()
    },
    [
      /*categoryId*/
    ],
  )

  return (
    <HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack flex={1}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryCard
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
