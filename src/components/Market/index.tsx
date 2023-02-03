import React from 'react'
import {
  View,
  Text,
  Image,
  HStack,
  VStack,
  ScrollView,
  Box,
  Center,
  Divider,
} from 'native-base'


import { useNavigation } from '@react-navigation/native'

import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import { TouchableOpacity } from 'react-native'

import MarketPng from '@assets/logoMercado/03.png'

export function Market() {

  const navigation = useNavigation<StackNavigatorRoutesProps>()




  return (
    <TouchableOpacity  onPress={() => navigation.navigate('home')}>
      <HStack
        justifyContent={'space-between'}
        bg={'gray.100'}
        h={120}
        w={345}
    
        mb={2}
        borderRadius={8}
      >
        <VStack >

          <Box h={110} w={170} ml={1} mt={2} alignItems={'center'}>
            <Text fontSize={18} fontWeight={'bold'}>
              Supermercado Lima
            </Text>
            <Text fontSize={14} fontWeight={'bold'}>
              Horário de Atendimento
            </Text>
            <Text>Seg/Sáb (07:00 - 19:00) </Text>
            <Text>Domingo (07:00 - 12:00) </Text>
          </Box>
        </VStack>
        <Center mt={2} mb={4} mr={2} alignItems={'center'} h={110} w={155}>
          <Image alt="Logo do mercado" source={MarketPng} h={70} w={150} />
        </Center>
      </HStack>
    </TouchableOpacity>
  )
}
