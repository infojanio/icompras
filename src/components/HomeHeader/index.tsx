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

import MarketPng from '@assets/rahdar.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '@hooks/useAuth'

import { Saldo } from './Saldo'

interface Props {
  city_id: string
}

export function HomeHeader() {
  const { user, signOut } = useAuth()

  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  function OpenLogo() {
    console.log('Abrir janela da logoMarca')
  }

  return (
    <VStack
      bg="green.300"
      padding={1}
      borderTopWidth={0.23}
      borderBottomWidth={0.25}
      borderBottomColor={'blue.300'}
    >
      <HStack
        bg="green.300"
        paddingBottom={1}
        paddingTop={1}
        justifyContent="space-between"
        alignItems="center"
        padding={1}
      >
        <VStack>
          <Saldo />

          {/* 
                    <TouchableOpacity onPress={OpenLogo}>
            <UserPhoto
              source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
              alt="Foto do usuário"
              size={20}
              mr={2}
              ml={2}
            />
          </TouchableOpacity>
          */}
        </VStack>
        <Center
          flex="1"
          borderRadius={'lg'}
          borderColor={'blue.600'}
          pr={2}
          ml="1"
          mr="2"
          mt="1"
          flexDirection="column"
        >
          <Image
            alt="Logo da Loja"
            source={MarketPng}
            h={30}
            w={160}
            borderRadius={'sm'}
          />
        </Center>

        <TouchableOpacity onPress={signOut}>
          <Center alignItems={'center'} p="1" mr={2} borderRadius={2}>
            <Icon
              as={<MaterialIcons name="settings-power" />}
              size={9}
              _light={{
                color: 'red.600',
              }}
              _dark={{
                color: 'red.700',
              }}
            />
            <Text color="red.600" fontSize="md">
              Sair
            </Text>
          </Center>
        </TouchableOpacity>
      </HStack>

      {/*
        <HStack
          bg="red.300"
          paddingBottom={1}
          paddingTop={1}
          justifyContent="space-between"
          alignItems="center"
          padding={1}
        >
          <Box>
            <Text
              color="black"
              fontWeight={'normal'}
              fontSize={16}
              numberOfLines={1}
            >
              {user.name},
            </Text>{' '}
          </Box>
          <Box ml={24}>
            <Text
              color="gray.600"
              fontWeight={'bold'}
              fontSize={16}
              numberOfLines={1}
            >
              {' '}
              Saldo: R$ 30,00
            </Text>
          </Box>
        </HStack>
        */}
    </VStack>
  )
}
