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
} from 'native-base'

import { UserPhoto } from './UserPhoto'
import MarketPng from '@assets/logoMercado/03.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '@hooks/useAuth'

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

export function HomeHeader() {
  const { user, signOut } = useAuth()

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
        <Text color="gray.100" fontSize={14} left={2} size={12}>
          Olá, {user.name}
        </Text>
      </VStack>
      <Center flex="1" pr={4} ml="1" mr="2" mt="1" flexDirection="row">
        <Image alt="Logo do mercado" source={MarketPng} h={70} w={160} />
      </Center>

      <TouchableOpacity onPress={signOut}>
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
