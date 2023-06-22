import { Box, FlatList, VStack, useToast } from 'native-base'

import { Group } from '@components/Product/Group'
import { SubcategoryList } from '../../data/subcategory'
import { useEffect, useState } from 'react'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { CityDTO } from '@dtos/CityDTO'

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function GroupCity({ onSelect, selected }: Props) {
  const [cities, setCities] = useState<CityDTO[]>([])
  const [citySelected, setCitySelected] = useState('Novo Alegre')

  const toast = useToast()

  //listar as cidades no select
  async function fetchCities() {
    try {
      const response = await api.get('/cities')
      setCities(response.data.name)
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
    <VStack flex={1}>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
            name={item.name}
            isActive={selected === item.name}
            onPress={() => onSelect(item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        mt={8}
        maxH={16}
        minH={16}
      />
    </VStack>
  )
}
