import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import {
  VStack,
  Text,
  Divider,
  HStack,
  FlatList,
  Heading,
  useToast,
} from 'native-base'

import { Group } from '@components/Product/Group'

import { ProductCategoryVertical } from '@utils/ProductCategoryVertical'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Dimensions } from 'react-native'
import { ProductDTO } from '@dtos/ProductDTO'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { ProductCard } from '@components/Product/ProductCard'
const { width } = Dimensions.get('window')

export function ProductList() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const toast = useToast()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  //listar as subcategories no select
  async function fetchProductsList() {
    try {
      setIsLoading(true)

      const response = await api.get('/products')
      setProducts(response.data)
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
    fetchProductsList()
  }, [])

  return (
    <VStack flex={1} bg={'gray.200'} alignItems={'initial'}>
      <VStack flex={1} px={1}>
        <HStack justifyContent={'space-between'} ml={2} mb={2}>
          <Text
            fontSize={'md'}
            color={'black.200'}
            fontWeight={'bold'}
            ml={'2'}
          >
            Produtos
          </Text>
        </HStack>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleOpenProductDetails(item.id)}
            />
          )}
          numColumns={1}
          _contentContainerStyle={{
            marginLeft: 2,
            paddingBottom: 32,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  )
}
