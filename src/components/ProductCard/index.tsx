import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { VStack, Image, Heading, Text, Center, Box, HStack } from 'native-base'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export type ProductCardProps = {
  id: string
  brand: string
  category: string
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
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenProductDetail() {
    navigation.navigate('productDetails')
  }

  return (
    <VStack
      ml={1}
      mt={2}
      bg="white"
      alignItems={'center'}
      w={40}
      h={210}
      minW={24}
      rounded="md"
      mb="2"
      borderWidth={0.2}
    >
      <Center>
        <Image
          source={data.image}
          alt="Imagem do produto"
          w={32}
          h={20}
          rounded="md"
          mt={6}
          mr={2}
          ml={2}
          m={2}
          p={2}
          resizeMode="cover"
        />
        <HStack mb="1">
          <Text>R$</Text>
          <Heading ml={2} mr={2} mb={1} fontSize="16" color="red.700">
            {data.price}
          </Heading>
          <Box bg="red.500" rounded="md" pl="1" pr="1" mb={2}>
            <Text fontSize="12" color="gray.100" numberOfLines={1}>
              {data.unity}
            </Text>
          </Box>
        </HStack>

        <Box h={10} w={24}>
          <Text fontSize="12" numberOfLines={2}>
            {data.name}
          </Text>
        </Box>

        <Center px={2} mb={16} mt={2}>
          <Button
            title="Adicionar"
            h={9}
            w={24}
            onPress={handleOpenProductDetail}
          />
        </Center>
      </Center>
    </VStack>
  )
}
