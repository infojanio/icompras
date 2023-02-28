import React from 'react'

import { TouchableOpacity } from 'react-native'
import { Center, HStack, Icon, useTheme, Text, VStack } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'
import { Input } from '@components/Input'
import { ButtonBack } from '@components/ButtonBack'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'

type Props = {
  title: string
}

export function HomeScreen({ title }: Props) {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  return (
    <VStack>
      <HStack
        bg="gray.300"
        pt={4}
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={0.2}
      >
        <ButtonBack />
        <Center mr={160} marginBottom={4}>
          <Text fontSize={16} fontWeight={'bold'}>
            {title}
          </Text>
        </Center>
      </HStack>
    </VStack>
  )
}
