import React, { useEffect, useState } from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Box,
  Select,
  CheckIcon,
  useToast,
} from 'native-base'

import { api } from '@services/api'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Button } from '@components/Button'
import LogoPng from '@assets/logoInitial.png'

import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { AppError } from '@utils/AppError'

export function Initial() {
  const [cities, setCities] = useState('')

  // const [service, setService] = useState('')

  const toast = useToast()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  async function fetchCities() {
    try {
      const response = await api.get('/cities')
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades cadastradas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  useEffect(() => {
    fetchCities()
  }, [])

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
          @iCompras
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
          selectedValue={cities}
          minWidth="200"
          accessibilityLabel="Choose Service"
          alignContent={'center'}
          placeholderTextColor={'gray.400'}
          fontSize={'16'}
          placeholder="Cidades Atendidas"
          _selectedItem={{
            bg: 'blue.100',
            endIcon: <CheckIcon size="4" />,
          }}
          mt={4}
          onValueChange={(itemValue) => setCities(itemValue)}
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
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Center h={'50'} w={'340'} borderRadius={4} borderWidth={0.2}>
            <Text color="blue.700" fontSize="md" fontFamily="body">
              Possui cadastro? Faça Login
            </Text>
          </Center>
        </TouchableOpacity>
      </Center>
    </VStack>
  )
}
