import { HomeProduct } from '@components/HomeProduct'
import { VStack, Text, Divider, HStack, FlatList, Heading } from 'native-base'

import { Group } from '@components/Group'
import { useState } from 'react'

import { ProductCategory } from '@components/ProductCategory'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function ProductList() {
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

      <VStack flex={1} px={4}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading fontSize={'md'} color={'black.200'}>
            {groups[0]}
          </Heading>

          <Text fontSize={'md'} color={'black.200'}>
            {subCategory.length}
          </Text>
        </HStack>

        <FlatList
          data={subCategory}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ProductCategory />}
          horizontal
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
}
