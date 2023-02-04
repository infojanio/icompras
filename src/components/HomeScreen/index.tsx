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
        bg="gray.300"      
<<<<<<< HEAD
        pt={2}        
        mb={2}
=======
        pt={4}        
        
>>>>>>> a1ad2a14a7fe927b4caf37dbf243c18e310cc7db
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={0.2}
      >
<<<<<<< HEAD
        <ButtonBack />
        <Center justifyContent={'center'} paddingBottom={2}>
=======
        <ButtonBack/>
        <Center justifyContent={'center'} marginBottom={4}>
>>>>>>> a1ad2a14a7fe927b4caf37dbf243c18e310cc7db
        <Text mr={180} fontSize={18} fontWeight={'bold'}  justifyContent="center" alignItems={'center'}>{title}</Text>
        </Center>   
      
      </HStack>
      
    </VStack>
  )
}