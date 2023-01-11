import React from 'react'

import { TouchableOpacity } from 'react-native'
import { Center, HStack, Icon, useTheme, Button, Alert } from 'native-base'

import { UserPhoto } from './UserPhoto'

import { MaterialIcons } from '@expo/vector-icons'
import LocationSvg from '@assets/location.svg'

const LogoImage =
  'https://play-lh.googleusercontent.com/BbcUGwdG1x5mJc-WXOwIblcYhmpyFPdBaunDHoWgS2L1ZUMeIncz1XZgKt7K1EKFHA=w240-h480'

export function HomeHeader() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  function OpenLogo() {
    console.log('Abrir janela da logoMarca')
  }

  return (
    <HStack
      bg="green.600"
      paddingBottom={4}
      paddingTop={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <TouchableOpacity onPress={OpenLogo}>
        <UserPhoto
          source={{ uri: LogoImage }}
          alt="Logomarca do estabelecimento"
          size={16}
          mr={2}
          ml={2}
        />
      </TouchableOpacity>

      <Center flex="1" pr={4} ml="1" mr="1" mt="1" flexDirection="row">
        <Button
          bg="gray.100"
          color="gray.700"
          variant="ghost"
          borderColor="gray.100"
          leftIcon={<LocationSvg height={32} width={32} />}
          onPress={() => {
            console.log('Adicione a localização!')
          }}
          _light={{
            color: 'gray.200',
          }}
          _dark={{
            color: 'gray.700',
          }}
        >
          Informe o local de entrega
        </Button>
      </Center>

      <TouchableOpacity>
        <Icon
          as={<MaterialIcons name="logout" />}
          size={6}
          mr={4}
          _light={{
            color: 'gray.200',
          }}
          _dark={{
            color: 'gray.700',
          }}
        />
      </TouchableOpacity>
    </HStack>
  )
}