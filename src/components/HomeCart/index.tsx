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
  price: number
  quantity: number
}


export function HomeCart({title, price, quantity}: Props) {
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
        <Text fontWeight={'bold'} fontSize={16} color="green.700" ml={4}>
          Total R$ {price}
        </Text>

        <VStack  mr={4} alignItems={'center'} justifyContent={'center'} >  
        <Center bg={'red.500'} borderRadius='full' padding={1}>
        <Text fontSize={14} fontWeight={'bold'} color='white'> 
        {quantity}
        </Text>
        </Center>
          <Icon
            as={<MaterialIcons name="shopping-cart" />}
            size={8}
            
            _light={{
              color: 'gray.700',
            }}
            _dark={{
              color: 'gray.700',
            }}
          />
       
        </VStack>

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