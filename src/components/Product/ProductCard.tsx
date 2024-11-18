import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { VStack, Image, Heading, Text, Center, Box, HStack } from 'native-base'

import { api } from '@services/api'
import { ProductDTO } from '@dtos/ProductDTO'

export type ProductCardProps = TouchableOpacityProps & {
  data: ProductDTO
}

export function ProductCard({ data, ...rest }: ProductCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <VStack
        ml={1}
        mt={1}
        bg="white"
        alignItems={'center'}
        w={32}
        h={174}
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
                uri: data.image, //busca a URL da imagem
                // uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
              }}
              alt="Imagem do produto"
              w={20}
              h={90}
              rounded="2xl"
              p={6}
              resizeMode="cover"
            />
          </VStack>
          <Center>
            <Text
              ml={2}
              mr={2}
              fontSize="14"
              color="black"
              fontFamily="heading"
              numberOfLines={1}
            >
              {data.name}
            </Text>
          </Center>

          <Box bg="red.500" rounded="md" pl="1" pr="1" mb={'2'}>
            <Text fontSize="14" color="gray.100" numberOfLines={1}>
              {data.quantity} % cashback
            </Text>
          </Box>
          <Center h={4} w={32}>
            <Text
              color={'black'}
              fontWeight={'normal'}
              fontSize="14"
              numberOfLines={2}
            >
              Ganhe R$ {data.price}
            </Text>
          </Center>
        </Center>
      </VStack>
    </TouchableOpacity>
  )
}
