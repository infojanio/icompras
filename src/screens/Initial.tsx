import React, {useState} from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  View,
  ScrollView,
  IconButton,
  Box,
  Icon,
  Divider,
  Flex,
  Stack,

  Select,
  CheckIcon,
} from 'native-base'

import { Button } from '@components/Button'
import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import LogoPng from '@assets/logoInitial.png'


import { useNavigation } from '@react-navigation/native'

export function Initial() {
  const [service, setService] = useState("");
  const navigation = useNavigation<StackNavigatorRoutesProps>()

  //Criar nova conta
  function handleGoHome() {
   // navigation.navigate('City')
  }

  //voltar a tela anterior
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack bg={'gray.50'} flex={1}>
    <Center bg={'gray.50'}>
      <Image alt='Imagem logo' h={300} w={360} source={LogoPng}   />
 
    </Center>
    <Box 
    alignItems={'center'} 
    justifyContent={'center'} 
    marginTop={2}
    >
        <Text color={'gray.700'} fontWeight={'bold'} fontSize={'24'}>
          Click Fácil 
          </Text>
        
        <Text color={'gray.500'} fontSize={'16'} fontWeight={'bold'}>
          Compre pelo aplicativo e receba em sua casa 
          </Text>
      </Box>
      <Box marginTop={8} padding={4} >
        
        
      <Select 
      selectedValue={service} 
      minWidth="200" 
      accessibilityLabel="Choose Service"
      alignContent={'center'}
      
      placeholderTextColor={'gray.400'} 
      fontSize={'18'}
      placeholder="Cidades Atendidas" 
      _selectedItem={{
        bg: "teal.200",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Campos Belos - GO" value="cb" />
          <Select.Item label="Monte Alegre - GO" value="ma" />
          <Select.Item label="Alto Paraíso - GO" value="ap" />
          <Select.Item label="Arraias - TO" value="ar" />
          <Select.Item label="Novo Alegre - TO" value="na" />
          <Select.Item label="Posse - GO" value="po" />
          <Select.Item label="São Domingos - GO" value="sd" />
          <Select.Item label="Iaciara - GO" value="ia" />
          <Select.Item label="Cavalcante - GO" value="ca" />
          <Select.Item label="Teresina - GO" value="te" />
          <Select.Item label="Taguatinga - TO" value="ta" />
                 </Select>
     <Box mt={2}>
     <Button title='Buscar Supermercados' />
     </Box>

      </Box>


    </VStack>
  )
  }