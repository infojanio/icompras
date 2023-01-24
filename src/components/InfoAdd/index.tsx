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
      width={120}
      height={70}
      marginLeft={20}
      justifyContent={'space-between'}
      marginTop={530}
    
    >
      <Box h={70} w={170} ml={2} mr={2} bg={'gray.100'} borderRadius="8" justifyContent={'center'}>
      <Text fontSize={16} fontWeight={'bold'} textAlign={'center'}>Adicione a localização </Text>
      <Text fontSize={14} textAlign={'center'}>Ajuste o ponto no mapa </Text>
      </Box>

      <Box h={20} w={120} borderRadius="20" textAlign="center" justifyContent={'space-between'} >
        <Image
          h={12}
          w={10}
          ml={'10'}
          mb={'2'}

          source={IndicatorPng}
          defaultSource={IndicatorPng}
          alt="Pessoa comprando online"
          />
          </Box>

    </HStack>
  )
}