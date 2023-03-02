import { useState } from 'react'
import { HomeProduct } from '@components/HomeProduct'
import { VStack, Text, Divider, HStack, FlatList, Heading } from 'native-base'

import { Group } from '@components/Group'

import { ProductCategory } from '@components/ProductCategory'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export function ProductList() {
  const [activeIndex, setActiveIndex] = useState(0)

  const [groups, setGroups] = useState([
    'carnes bovinas',
    'aves',
    'Peixes',
    'linguiças',
  ])

  const [subCategory, setSubCategory] = useState([
    'Filé Mignon',
    'Picanha',
    'Fraudinha',
    'Contra filé',
    'Filé Mignonn',
    'Picanhan',
    'Fraudinhan',
    'Contra filén',
  ])

  const [groupSelected, setGroupSelected] = useState('Carnes bovinas')

  return (
    <VStack flex={1}>
      <HomeProduct name="Açougue e Peixaria" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 2 }}
        maxH={16}
      />

      <VStack flex={1} px={1}>
        <HStack justifyContent={'space-between'} ml={2} mb={2}>
          <Text fontSize={'md'} color={'black.200'}>
            Produtos
          </Text>
        </HStack>

        <FlatList
          data={subCategory}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ProductCategory />}
          horizontal
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 32 }}
        />
      </VStack>
    </VStack>
  )
}
