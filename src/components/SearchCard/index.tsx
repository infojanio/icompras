import { StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Center, Text, Button, Icon } from 'native-base'


import { MaterialIcons } from '@expo/vector-icons'

export function SearchCard() {
  return (
    <HStack 
    position={'absolute'}
    
    width= {'100%'}
    height={'10%'}

    
    marginTop={590}   
    alignItems={'center'}
    justifyContent={'space-between'}
    >
      
   
      <TouchableOpacity>
          <Icon
          opacity={0.95}
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
      
      <Button bg={'green.400'} color={'green.400'} marginRight={2}>
        Confirmar localização
      </Button>
      
    </HStack>
  )
}