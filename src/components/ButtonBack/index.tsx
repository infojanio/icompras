import { StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Center, Text, Button, Icon } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
<<<<<<< HEAD
import { AppNavigatorRoutesProps } from '@routes/app.routes' //Atenção: verificar se precisará logar -> AuthRoutes
=======
import { AppNavigatorRoutesProps } from '@routes/app.routes'
>>>>>>> a1ad2a14a7fe927b4caf37dbf243c18e310cc7db

//voltar a tela anterior
export function ButtonBack() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
     navigation.goBack()
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
          opacity={1.25}
          as={<MaterialIcons name="arrow-back" />}
          size={6}
          mr={1}
          ml={4}
          _light={{
            color: 'gray.800',
          }}
          _dark={{
            color: 'gray.100',
          }}
        />
      </TouchableOpacity>
    </HStack>
  )
}
