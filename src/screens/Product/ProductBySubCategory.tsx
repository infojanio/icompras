import { useCallback, useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import {
  Text,
  Box,
  FlatList,
  HStack,
  Heading,
  VStack,
  useToast,
} from 'native-base'

import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { api } from '@services/api'

import { Group } from '@components/Product/Group'

import { ProductDTO } from '@dtos/ProductDTO'
import { SubCategoryDTO } from '@dtos/SubCategoryDTO'
import { ProductCard } from '@components/Product/ProductCard'
import { Loading } from '@components/Loading'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

type Props = {
  subcategory: string
  data: ProductDTO[]
}

export function ProductBySubCategory() {
  const [isLoading, setIsLoading] = useState(true)
  const [subCategories, setSubCategories] = useState<SubCategoryDTO[]>([])
  const [products, setProducts] = useState<ProductDTO[]>([])

  const [subCategorySelected, setSubCategorySelected] = useState(
    'Refrigerantes',
  )

  const toast = useToast()
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  //listar as subcategories no select
  async function fetchSubCategories() {
    try {
      const response = await api.get('/subcategories')
      setSubCategories(response.data)
      //console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades atendidas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  //listar as subcategories no select
  async function fetchProductsBySubcategory() {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/products/subcategory/?subcategory_id=${subCategorySelected}`,
      )
      setProducts(response.data)
      // console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os produtos'

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
    fetchSubCategories()
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchProductsBySubcategory()
    }, [subCategorySelected]),
  )

  return (
    <VStack flex={1}>
      <HomeProduct />

      <Box flex={1} ml={-6} mt={-6}>
        <FlatList
          data={subCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Group
              name={item.name}
              subcategory={item.id}
              isActive={
                //subCategorySelected === item.name
                subCategorySelected.toLocaleUpperCase() ===
                item.name.toLocaleUpperCase()
              }
              onPress={() => setSubCategorySelected(item.name)} //o segredo tá aqui, passando id = subcategory_id
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          mt={6}
          mb={2}
          maxH={12}
          minH={10}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <VStack flex={1} px={2} bg={'gray.200'}>
            <VStack px={6} bg={'gray.200'}>
              <HStack justifyContent="space-between" mb={5}>
                <Heading color={'gray.700'} fontSize={'md'}>
                  {subCategorySelected}
                </Heading>

                <Text color="gray.700" fontSize={'md'}>
                  {products.length}
                </Text>
              </HStack>
            </VStack>

            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProductCard
                  data={item}
                  onPress={() => handleOpenProductDetails(item.id)}
                />
              )}
              numColumns={2}
              _contentContainerStyle={{
                marginLeft: 8,
                paddingBottom: 32,
              }}
              showsVerticalScrollIndicator={false}
            />
          </VStack>
        )}
      </Box>
    </VStack>
  )
}
