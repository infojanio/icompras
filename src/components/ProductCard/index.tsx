import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { VStack, Image, Heading, Text, Center } from 'native-base'

export type ProductCardProps = {
  id: string
  brand: string
  subcategory: string
  name: string
  price: string
  unity: string
  thumb: ImageSourcePropType
  image: ImageSourcePropType
  description: string
  observation: string
  quantity: number
  size: number
}

type Props = TouchableOpacityProps & {
  data: ProductCardProps
}

export function ProductCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <VStack
        w={40}
        h={40}
        bgColor="gray.500"
        rounded="md"
        alignItems="center"
        p={2}
        m={2}
      >
        <Center>
          <Image
            source={data.thumb}
            alt="Imagem do produto"
            w={24}
            h={24}
            rounded="md"
            mt={4}
            mr={2}
            ml={2}
            resizeMode="cover"
          />

          <Heading color="white" fontFamily="heading" fontSize="lg" mt={2}>
            {data.name}
          </Heading>

          <Text color="gray.200" fontSize="sm">
            R$ {data.price}
          </Text>
        </Center>
      </VStack>
    </TouchableOpacity>
  )
}
