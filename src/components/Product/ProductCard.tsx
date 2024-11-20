import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { VStack, Image, Heading, Text, Center, Box, HStack } from 'native-base'

import { api } from '@services/api'
import { ProductDTO } from '@dtos/ProductDTO'

export type ProductCardProps = TouchableOpacityProps & {
  product: ProductDTO
}

export function ProductCard({ product, ...rest }: ProductCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <VStack
        mr={1}
        mt={1}
        bg="white"
        alignItems={'center'}
        w={32}
        h={154}
        minW={24}
        rounded="md"
        mb="1"
        borderWidth={1.2}
        borderColor={'green.200'}
      >
        <Center>
          <VStack mt="1" mb="1">
            <Image
              source={{
                uri: product.image, //busca a URL da imagem
                //uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
              }}
              alt="Imagem do produto"
              w={28}
              h={70}
              rounded="3xl"
              p={10}
              resizeMode="contain"
            />
          </VStack>
          <Center>
            <Text
              ml={2}
              mr={2}
              fontSize="12"
              color="black"
              fontFamily="heading"
              numberOfLines={1}
            >
              {product.name}
            </Text>
          </Center>

          <Box bg="red.500" rounded="md" pl="1" pr="1">
            <Text fontSize="13" color="gray.100" numberOfLines={1}>
              {product.quantity} % cashback
            </Text>
          </Box>
          <Center h={6} w={32}>
            <Text
              color={'black'}
              fontWeight={'normal'}
              fontSize="14"
              numberOfLines={2}
            >
              Ganhe R$ {product.price}
            </Text>
          </Center>
        </Center>
      </VStack>
    </TouchableOpacity>
  )
}
