import React, { useState } from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Box,
  Select,
  CheckIcon,
} from 'native-base'

import { Button } from '@components/Button'
import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import LogoPng from '@assets/logoInitial.png'

import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

export function Initial() {
  const [service, setService] = useState('')
  const navigation = useNavigation<StackNavigatorRoutesProps>()

  return (
    <VStack bg={'gray.50'} flex={1}>
      <Box alignItems={'center'} bg={'gray.50'}>
        <Image alt="logo" h={300} w={360} source={LogoPng} />
      </Box>

      <Box
        pb={2}
        ml={4}
        mr={4}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={2}
      >
        <Text color={'blue.700'} fontWeight={'bold'} fontSize={'24'}>
          Click Fácil
        </Text>

        <Text color={'blue.700'} fontSize={'16'}>
          Compre no aplicativo e receba em sua casa
        </Text>
      </Box>

      <Box
        bg={'gray.100'}
        borderRadius={2}
        borderWidth={'0.2'}
        marginTop={2}
        ml={2}
        mr={2}
        padding={2}
      >
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          alignContent={'center'}
          placeholderTextColor={'gray.400'}
          fontSize={'16'}
          placeholder="Cidades Atendidas"
          _selectedItem={{
            bg: 'blue.100',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={4}
          onValueChange={(itemValue) => setService(itemValue)}
        >
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

        <Box mt={4}>
          <Button
            title="Buscar Supermercados"
            onPress={() => navigation.navigate('supermarket')}
          />{' '}
        </Box>
      </Box>

      <Center mt={4} mb={2}>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Center h={'50'} w={'340'} borderRadius={4} borderWidth={0.2}>
            <Text color="blue.700" fontSize="md" fontFamily="body">
              Ainda não tenho cadastro
            </Text>
          </Center>
        </TouchableOpacity>
      </Center>
    </VStack>
  )
}
