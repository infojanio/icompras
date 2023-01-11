import React from 'react'

import { TouchableOpacity } from 'react-native'
import {
  Center,
  HStack,
  Icon,
  useTheme,
  Text,
  Button,
  Alert,
  Stack,
  VStack,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'
import LocationSvg from '@assets/location.svg'
import { Input } from '@components/Input'

const LogoImage =
  'https://play-lh.googleusercontent.com/BbcUGwdG1x5mJc-WXOwIblcYhmpyFPdBaunDHoWgS2L1ZUMeIncz1XZgKt7K1EKFHA=w240-h480'

export function HomeProduct() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  function OpenLogo() {
    console.log('Abrir janela da logoMarca')
  }

  return (
    <VStack>
      <HStack
        bg="gray.200"
        paddingBottom={4}
        paddingTop={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <TouchableOpacity>
          <Icon
            as={<MaterialIcons name="arrow-back" />}
            size={6}
            mr={1}
            ml={4}
            _light={{
              color: 'gray.600',
            }}
            _dark={{
              color: 'gray.700',
            }}
          />
        </TouchableOpacity>

        <Text>Açougue e Peixaria</Text>
        <Text fontWeight={'bold'} fontSize={16} color="red.600" ml={4}>
          R$ 0,00
        </Text>

        <TouchableOpacity>
          <Icon
            as={<MaterialIcons name="shopping-cart" />}
            size={6}
            mr={6}
            _light={{
              color: 'gray.700',
            }}
            _dark={{
              color: 'gray.700',
            }}
          />
        </TouchableOpacity>
      </HStack>

      <Center pr={4} ml="2" mr="2" mt="4" flexDirection="row">
        <Input
          flex={1}
          borderRadius="md"
          borderBottomWidth={2}
          size="md"
          placeholder="Buscar produtos"
          _light={{
            placeholderTextColor: 'blueGray.500',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.100',
          }}
        />{' '}
      </Center>
    </VStack>
  )
}