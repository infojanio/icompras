import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Image, VStack, Text, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {}

export function ProductCategory({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.50" alignItems="center" p={2} pr={4} rounded="md" mb="2">
        <Image
          source={{
            uri:
              'https://diarural.com.br/wp-content/uploads/2021/10/carne-6.jpg',
          }}
          alt="imagem de carnes"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="gray.700">
            Filé Mignon
          </Heading>

          <Text fontSize="10" color="gray.400" mt={1} numberOfLines={2}>
            carne nobre, extremamente terna, macia e suculenta, porém não muito
            saborosa
          </Text>
        </VStack>

        {/*  <Entypo name='chevron-thin-right' */}
        <Icon as={Entypo} name="chevron-thin-right" color="gray.700" />
      </HStack>
    </TouchableOpacity>
  )
}
