import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Image, VStack, Text, Icon, Center } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@components/Button'

type Props = TouchableOpacityProps & {}

export function ProductCategory({ ...rest }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  //abrir detalhes do produto
  function handleOpenProductDetails() {
    navigation.navigate('productDetails')
  }

  return (
    <HStack flex="1" pl={1}>
      <HStack bg="gray.200" px={2} rounded="md" mb="2">
        <Center>
          <Image
            source={{
              uri:
                'https://appmercados.com.br/inc/timthumb.php?w=800&h=800&zc=2&src=%2Fuploads%2Fa7dfd128a12ae1a9986401df2cd1659a.png',
            }}
            alt="imagem de carnes"
            w={32}
            h={32}
            rounded="md"
            mr={2}
            resizeMode="center"
          />

          <VStack bg="gray.100" rounded="md" pl="1" pr="1" mb="1" ml="160">
            <Text fontSize="14" color="gray.500" mt={1} numberOfLines={2}>
              Kg
            </Text>
          </VStack>
          <Center>
            <Button title="Adicionar" onPress={handleOpenProductDetails} />
          </Center>
          <HStack mb="4">
            <Text>R$</Text>
            <Heading ml={2} mr={2} fontSize="lg" color="red.700">
              39,90
            </Heading>
            <Text>Kg</Text>
          </HStack>
          <Heading fontSize="sm">Paleta Bovina</Heading>
        </Center>
      </HStack>
    </HStack>
  )
}
