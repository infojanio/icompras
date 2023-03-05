import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { VStack, Image, Heading, Text, Center, Box, HStack } from 'native-base'
import { Button } from '@components/Button'

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
    <VStack
      ml={1}
      mt={2}
      bg="gray.50"
      alignItems={'center'}
      w={40}
      h={240}
      rounded="md"
      mb="6"
      borderWidth={0.2}
    >
      <Center>
        <Image
          source={data.thumb}
          alt="Imagem do produto"
          w={32}
          h={20}
          rounded="md"
          mt={4}
          mr={2}
          ml={2}
          p={2}
          m={2}
          resizeMode="cover"
        />
        <HStack mb="1">
          <Text>R$</Text>
          <Heading ml={2} mr={2} mb={1} fontSize="16" color="red.700">
            {data.price}
          </Heading>
          <Box bg="red.500" rounded="md" pl="1" pr="1" mb={2}>
            <Text fontSize="12" color="gray.100" numberOfLines={1}>
              Kg
            </Text>
          </Box>
        </HStack>

        <Box h={10} w={24}>
          <Text fontSize="12" numberOfLines={2}>
            {data.description}
          </Text>
        </Box>

        <Center px={2} mb={16} mt={2}>
          <Button
            title="Adicionar"
            h={9}
            w={24}
            //  onPress={handleOpenProductDetails}
          />
        </Center>
      </Center>
    </VStack>
  )
}
