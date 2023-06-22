import React, { useState, useEffect } from 'react'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { Box, Text, VStack, FlatList, useToast } from 'native-base'
import { HomeScreen } from '@components/HomeScreen'
import { GroupCity } from '@components/CitySelect/GroupCity'
import { Group } from '@components/CitySelect/Group'
import { CityDTO } from '@dtos/CityDTO'

export function CitySelect() {
  const [cities, setCities] = useState<CityDTO[]>([])
  const [citySelected, setCitySelected] = useState('novo alegre')

  const toast = useToast()

  //listar as cidades no select
  async function fetchCities() {
    try {
      const response = await api.get('/cities')
      setCities(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades atendidas'

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
    <VStack flex={1} bg={'gray.200'}>
      <HomeScreen title="Escolha a cidade" />

      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
            name={item.name}
            isActive={
              //citySelected === item.name
              citySelected.toLocaleUpperCase() === item.name.toLocaleUpperCase()
            }
            onPress={() => setCitySelected(item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 2 }}
        mt={10}
        //maxH={10}
        minH={460}
      />

      <GroupCity selected={citySelected} onSelect={setCitySelected} />
    </VStack>
  )
}

/*
  <Select
          selectedValue={cities}
          minWidth="200"
          accessibilityLabel="Escolha a cidade"
          alignContent={'center'}
          placeholderTextColor={'gray.400'}
          fontSize={'16'}
          placeholder="Escolha a cidade"
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
*/
