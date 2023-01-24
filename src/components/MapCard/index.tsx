import { StyleSheet } from 'react-native'
import { HStack, Center, Text, Button } from 'native-base'

import LocationSvg from '@assets/location.svg'


export function MapCard() {
  return (
    <HStack 
    position={'absolute'}
    bg={'white'}
    width= {'95%'}
    height={'12%'}
    marginLeft={2}
    
    marginTop={2}    
    borderRadius={10}
    alignItems={'center'}
    justifyContent={'space-between'}
    >
      
   
      <LocationSvg height={40} width={40} />
      <Text justifyContent={'center'} fontSize={'13'}>
      Endereço: {'\n'}Setor Aeroporto, Rua 5, Qd. 6, Lt. 1{'\n'}Campos Belos 
      </Text>
      <Button bg={'green.400'} color={'green.400'} marginRight={2}>
        Alterar
      </Button>
      
    </HStack>
  )
}
/*
export function MapCard ()  {
  return (
    <View style={styles.container}>
            <Text>
Campos Belos, Setor Aeroporto, Rua 5, Qd. 6, Lt. 1
            </Text>
    </View>
  )
}
const styles  = StyleSheet.create({
    container: {
position: "absolute",
width: "70%",
height: "10%",
marginLeft: 40,
marginTop: 20,
borderRadius: 20,
paddingHorizontal: 20,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#fff"

        
    },
    text: {
        
        alignItems: "center",
        justifyContent: "center"
    }
})
*/