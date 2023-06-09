import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Center,
  HStack,
  Icon,
  useTheme,
  Image,
  VStack,
  Text,
  Heading,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { UserPhoto } from './UserPhoto'
import MarketPng from '@assets/logoMercado/03.png'
import { MaterialIcons } from '@expo/vector-icons'
import LocationSvg from '@assets/location.svg'
import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import { useAuth } from '@hooks/useAuth'

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

const LogoImage =
  'https://xesque.rocketseat.dev/users/avatar/profile-2851c272-858f-4f34-84be-a0f773bffb76-1667218054675.jpg'

export function HomeHeader() {
  const navigation = useNavigation<StackNavigatorRoutesProps>()

  const { user } = useAuth()

  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  function OpenLogo() {
    console.log('Abrir janela da logoMarca')
  }

  return (
    <HStack
      bg="green.500"
      paddingBottom={4}
      borderRadius={4}
      paddingTop={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack>
        <TouchableOpacity onPress={OpenLogo}>
          <UserPhoto
            source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
            alt="Foto do usuário"
            size={20}
            mr={2}
            ml={2}
          />
        </TouchableOpacity>
        <Text color="gray.100" fontSize={14} left={2}>
          Olá, {user.name}
        </Text>
      </VStack>
      <Center flex="1" pr={4} ml="1" mr="2" mt="1" flexDirection="row">
        <Image alt="Logo do mercado" source={MarketPng} h={70} w={160} />
      </Center>

      <TouchableOpacity onPress={() => navigation.navigate('initial')}>
        <Center alignItems={'center'} p="1" mr={2} borderRadius={2}>
          <Icon
            as={<MaterialIcons name="logout" />}
            size={6}
            _light={{
              color: 'red.100',
            }}
            _dark={{
              color: 'red.700',
            }}
          />
        </Center>
      </TouchableOpacity>
    </HStack>
  )
}
