import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Center, Image, Box, Text, HStack } from 'native-base'

import IndicatorPng from '../../assets/down.png'

interface Props {
  mBottom: number
  onPress: () => void
}

export function InfoAdd() {
  return (
    <HStack      position={'absolute'}
      width={90}
      height={70}
      marginLeft={20}
      justifyContent={'space-between'}
      marginTop={530}
    
    >
      <Box h={60} w={180} ml={2} mr={2} bg={'gray.50'} 
      borderRadius='10'       
      opacity={0.70}
      borderWidth={0.2} 
      >
        
      <Text fontSize={13} fontWeight={'bold'} ml={2} >1º Incluir marcador</Text>
      <Text fontSize={13} fontWeight={'bold'} ml={2}>2º Ajustar marcador</Text>
      <Text fontSize={13} fontWeight={'bold'} ml={2}>3º Confirmar localização</Text>
      </Box>

      <Box h={20} w={120} borderRadius="20" textAlign="center" justifyContent={'space-between'} >
        <Image
          h={12}
          w={10}
          ml={'6'}
          

          source={IndicatorPng}
          defaultSource={IndicatorPng}
          alt="Pessoa comprando online"
          />
          </Box>

    </HStack>
  )
}