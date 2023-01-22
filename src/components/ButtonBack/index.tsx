import { StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Center, Text, Button, Icon } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

//voltar a tela anterior
export function ButtonBack() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    // navigation.goBack()
    console.log('voltei')
  }

  return (
    <HStack
      position={'absolute'}
      width={'20%'}
      height={'10%'}
      marginTop={590}
      alignItems={'center'}
      borderRadius={30}
    >
      <TouchableOpacity onPress={handleGoBack}>
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
    </HStack>
  )
}