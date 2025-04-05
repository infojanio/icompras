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
  Center,
} from 'native-base'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { api } from '@services/api'

import { Group } from '@components/Product/Group'

import { ProductDTO } from '@dtos/ProductDTO'
import { SubCategoryDTO } from '@dtos/SubCategoryDTO'
import { ProductCard } from '@components/Product/ProductCard'
import { Loading } from '@components/Loading'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { CategoryDTO } from '@dtos/CategoryDTO'

type RouteParamsProps = {
  categoryId: string
}

type Props = {
  subcategory: string
  data: ProductDTO[]
}

export function ProductsBySubCategory() {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<CategoryDTO[]>([])

  const [subCategories, setSubCategories] = useState<SubCategoryDTO[]>([])
  const [products, setProducts] = useState<ProductDTO[]>([])

  const route = useRoute()
  const { categoryId } = route.params as RouteParamsProps
  console.log('ID =>', categoryId)

  //const [categorySelected, setCategorySelected] = useState(categoryId)
  const [subCategorySelected, setSubCategorySelected] = useState('')

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const toast = useToast()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  //listar as subcategories no select
  async function fetchCategories() {
    try {
      setIsLoading(true)
      const response = await api.get(`/categories/${categoryId}`)
      setCategories(response.data)
      console.log('categoria', response.data.category)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar a categoria'

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
  async function fetchSubCategories() {
    try {
      setIsLoading(true)

      //console.log('URL:', `/subcategories/category?categoryId=${categoryId}`)
      const response = await api.get(
        `/subcategories/category?categoryId=${categoryId}`,
      )

      console.log(response.data)
      setSubCategories(response.data)
      console.log('Subcategorias recebidas:', response.data)
      console.log('Estado atual de subcategories:', subCategories)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as subcategorias'

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
  async function fetchProductsBySubcategory() {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/products/subcategory?subcategoryId=${subCategorySelected}`,
        //  `/products/subcategory/?subcategory_id=${subCategorySelected}`,
      )
      console.log('selecionada', subCategorySelected)
      setProducts(response.data)
      console.log('Produtos', response.data)
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
    if (categoryId) {
      console.log('Chamando fetchSubCategories com ID:', categoryId)
      fetchCategories()
      fetchSubCategories()
    }
  }, [categoryId])

  const firstSubCategory = subCategories.length > 0 ? subCategories[0] : null

  useFocusEffect(
    useCallback(() => {
      fetchProductsBySubcategory()
    }, [subCategorySelected]),
  )

  return (
    <VStack flex={1}>
      <HomeProduct />

      <Box flex={1} ml={-6} mt={-6}>
        {firstSubCategory ? (
          <FlatList
            data={subCategories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Group
                name={item.name}
                subcategory={item.id}
                isActive={subCategorySelected === item.id}
                onPress={() => setSubCategorySelected(item.id)} //o segredo tá aqui, passando id = subcategory_id
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
        ) : (
          <Center mt={6} mb={2}>
            <Text color={'red.600'} fontSize={14}>
              Nenhuma subcategoria encontrada!
            </Text>
          </Center>
        )}

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
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <ProductCard
                  product={item}
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
