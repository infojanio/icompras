import React from 'react'

import { TouchableOpacity } from 'react-native'
import {
  Center,
  HStack,
  Icon,
  useTheme,
  Text,
  VStack,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'
import { Input } from '@components/Input'
import { ButtonBack } from '@components/ButtonBack'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'

interface Props {
  title: string

}

export function HomeScreen({title}: Props) {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  return (
    <VStack>
      <HStack
        bg="gray.200"      
        paddingTop={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <ButtonBack />

        <Text ml={8} alignItems={'center'}>{title}</Text>
        
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