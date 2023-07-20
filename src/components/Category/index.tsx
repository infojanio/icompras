import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { CategoryCard } from '@components/Category/CategoryCard'

import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { CategoryDTO } from '@dtos/CategoryDTO'
import { Loading } from '@components/Loading'

export function Category() {
  const [categories, setCategories] = useState<CategoryDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenSubCategories(categoryId: string) {
    navigation.navigate('ProductBySubCategory', { categoryId })
  }

  //listar as categorias
  async function fetchCategories() {
    try {
      setIsLoading(true)

      const response = await api.get('/categories')
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

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack>
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
