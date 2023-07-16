import { HomeScreen } from '@components/HomeScreen'

import { Platform } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import {
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
  HStack,
} from 'native-base'

import { useCart } from '../../hooks/useCart'

import { ProductDTO } from '@dtos/ProductDTO'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AppError } from '@utils/AppError'
import { api } from '@services/api'

type RouteParamsProps = {
  productId: string
}

export function ProductDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const [size, setSize] = useState('35')
  const [quantity, setQuantity] = useState('1')
  const [product, setProduct] = useState<ProductDTO>({} as ProductDTO)

  const [productSelected, setProductSelected] = useState(product.id)

  const toast = useToast()
  const { navigate } = useNavigation()
  const { addProductCart } = useCart()

  const route = useRoute()
  const { productId } = route.params as RouteParamsProps
  console.log('ID =>', productId)

  //listar as subcategories no select
  async function fetchProductDetails() {
    try {
      setIsLoading(true)

      const response = await api.get(
        //'/products',
        `/products/${productId}`,
      )
      setProduct(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do produto'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddProductToCart() {
    try {
      await addProductCart({
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: Number(quantity),
        price: Number(quantity),
        //size: product.size,
      })

      toast.show({
        title: 'Produto adicionado no carrinho',
        placement: 'top',
        bgColor: 'green.500',
      })

      navigate('cart')
    } catch (error) {
      toast.show({
        title: 'Não foi possível adicionar o produto no carrinho',
        placement: 'top',
        bgColor: 'reed.500',
      })
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchProductDetails()
    }, [productSelected]),
  )

  return (
    <VStack flex={1}>
      <HomeScreen title="Detalhes do produto" />

      <ScrollView>
        <Image
          key={String(new Date().getTime())}
          source={{
            uri: product.image, //busca a URL da imagem
            //uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
          }}
          w={56}
          h={56}
          resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
          alt="Imagem do produto"
          alignSelf="center"
        />

        <VStack p={6}>
          <HStack w="full" justifyContent="space-between" alignItems="center">
            <VStack flex={1}>
              <Heading
                color="gray.700"
                fontFamily="heading"
                fontSize="14"
                mb={2}
              >
                {product.name}
              </Heading>

              <Text color="gray.700" fontSize="md" fontFamily="heading">
                R$ {product.price}
              </Text>
            </VStack>

            <VStack alignItems="flex-end">
              <Text color="gray.700" fontSize="sm" textAlign="justify" pt={4}>
                Quantidade
              </Text>

              <Input
                onChangeText={setQuantity}
                keyboardType="numeric"
                textAlign="center"
                value={quantity}
                w={16}
              />
            </VStack>
          </HStack>

          <Text
            color="gray.700"
            fontSize="md"
            textAlign="justify"
            pt={2}
            mb={2}
          >
            {productSelected /*product.available*/}
          </Text>

          {/*  colocar condição: se if(categoria === sapato)

          <Sizes onSelect={setSize} selected={size} />
          
          */}
          <Button
            title="Adicionar no carrinho"
            onPress={handleAddProductToCart}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
