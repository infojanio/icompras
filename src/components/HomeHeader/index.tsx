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
  Box,
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
    <VStack bg="gray.100" padding={1}>
      <HStack
        bg="green.500"
        paddingBottom={4}
        borderRadius={'full'}
        paddingTop={4}
        justifyContent="space-between"
        alignItems="center"
        padding={2}
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
      {/* 
      <Box mr={32} bg={'gray.100'}>
        <Text
          color="gray.700"
          fontWeight={'bold'}
          fontSize={14}
          numberOfLines={1}
        >
          Olá! {user.name}
        </Text>
      </Box>
      */}
    </VStack>
  )
}
