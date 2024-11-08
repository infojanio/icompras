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
        ml={1}
        mt={1}
        bg="white"
        alignItems={'center'}
        w={40}
        h={180}
        minW={24}
        rounded="md"
        mb="2"
        borderWidth={0.2}
      >
        <Center>
          <VStack mb="1">
            <Center>
              <Heading
                ml={2}
                mr={2}
                mb={1}
                fontSize="16"
                color="red.700"
                fontFamily="heading"
                numberOfLines={1}
              >
                {product.name}
              </Heading>
            </Center>
          </VStack>

          <Box bg="red.500" rounded="md" pl="1" pr="1" mb={2}>
            <Text fontSize="14" color="gray.100" numberOfLines={1}>
              {product.quantity} % cashback
            </Text>
          </Box>

          <Image
            source={{
              uri: product.image, //busca a URL da imagem
              //uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
            }}
            alt="Imagem do produto"
            w={30}
            h={20}
            rounded="md"
            mt={2}
            mr={2}
            ml={2}
            m={2}
            p={8}
            resizeMode="cover"
          />

          <Center h={8} w={32}>
            <Text
              color={'black'}
              fontWeight={'bold'}
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
