import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
<<<<<<< HEAD
import { VStack, Text, FlatList, useToast, Box, HStack } from 'native-base'
=======
import {
  VStack,
  Text,
  Divider,
  HStack,
  FlatList,
  Heading,
  useToast,
} from 'native-base'
>>>>>>> parent of bfeca9e... Lista de produtos

import { Group } from '@components/Product/Group'

import { ProductCategoryVertical } from '@utils/ProductCategoryVertical'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Dimensions } from 'react-native'
import { ProductDTO } from '@dtos/ProductDTO'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { ProductCard } from '@components/Product/ProductCard'
<<<<<<< HEAD
import { TouchableOpacity } from 'react-native'
=======
const { width } = Dimensions.get('window')
>>>>>>> parent of bfeca9e... Lista de produtos

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
<<<<<<< HEAD
    <VStack flex={1} bg={'gray.100'} alignItems={'center'} mt={4} h={240}>
      <VStack>
        <VStack justifyContent={'space-between'} ml={1} mb={1}>
          <HStack justifyContent={'space-between'} mr={2}>
            <Text
              fontSize={'sm'}
              color={'black.200'}
              fontWeight={'semibold'}
              ml={'2'}
            >
              Mais Cashback
            </Text>
            <TouchableOpacity>
              <Box
                mr={2}
                borderBottomWidth={'3.5'}
                borderColor={'yellow.300'}
                borderRadius={'md'}
              >
                <Text
                  fontSize={'sm'}
                  color={'green.700'}
                  fontWeight={'semibold'}
                  ml={'2'}
                >
                  Ver todos
                </Text>
              </Box>
            </TouchableOpacity>
          </HStack>
          <Box ml={2} width={8} height={1} bg={'yellow.300'}>
            {''}
          </Box>
        </VStack>
=======
    <VStack flex={1} bg={'gray.200'} alignItems={'center'}>
      <VStack>
        <HStack justifyContent={'space-between'} ml={1} mb={1}>
          <Text
            fontSize={'md'}
            color={'black.200'}
            fontWeight={'semibold'}
            ml={'2'}
          >
            Mais Cashback
          </Text>
        </HStack>
>>>>>>> parent of bfeca9e... Lista de produtos

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
