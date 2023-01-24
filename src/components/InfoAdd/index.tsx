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
      width={160}
      height={70}
      marginLeft={20}
      justifyContent={'space-between'}
      marginTop={530}
    
    >
      <Box h={70} w={180} ml={2} mr={2} bg={'gray.100'} 
      borderTopRightRadius={30} 
      borderTopLeftRadius={30}
      borderBottomLeftRadius={30}
       
      justifyContent={'center'}
      >
      <Text fontSize={17} fontWeight={'bold'} textAlign={'center'}>Local de entrega </Text>
      <Text fontSize={15} textAlign={'center'}>Ajuste sua localização </Text>
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