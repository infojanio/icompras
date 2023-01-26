import React, { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { VStack, Text, Divider, HStack, FlatList } from 'native-base'

import { HomeProduct } from '@components/HomeProduct'
import { SeparatorItem } from '@components/SeparatorItem'
import { Group } from '@components/Group'
import { AllProduct } from '@components/AllProduct'


export function ProductList() {
  const [groups, setGroups] = useState([
    'Carnes Bovinas',
    'Aves',
    'Peixes',
    'Linguiças',
  ])
  const [groupSelected, setGroupSelected] = useState('Carnes Bovinas')

  return (
    <VStack flex={1}>
      <HomeProduct />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 2 }}
        maxH={16}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg={'gray.200'} marginTop={2}></VStack>

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'sm'} paddingLeft={4} bg={'gray.100'}>
            Açougue e peixaria
          </Text>
        </VStack>
        <AllProduct />
      </ScrollView>
    </VStack>
  )
}
