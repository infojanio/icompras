import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { VStack, Image, Heading, Text, Center, Box, HStack } from 'native-base'
import { ProductDTO } from '@dtos/ProductDTO'

type Props = TouchableOpacityProps & {
  data: ProductDTO
  // image: ImageSourcePropType
}

export function ProductCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
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
          <HStack mb="1">
            <Text>R$ {data.price}</Text>
            <Heading
              ml={2}
              mr={2}
              mb={1}
              fontSize="16"
              color="red.700"
              fontFamily="heading"
            >
              {data.name}
            </Heading>
            <Box bg="red.500" rounded="md" pl="1" pr="1" mb={2}>
              <Text fontSize="12" color="gray.100" numberOfLines={1}>
                {data.quantity}
              </Text>
            </Box>
          </HStack>

          <Box h={10} w={24}>
            <Text fontSize="12" numberOfLines={2}>
              {data.subcategory_id}
            </Text>
          </Box>
        </Center>
      </VStack>
    </TouchableOpacity>
  )
}

/*
 <Image
            source={image}
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

          */
