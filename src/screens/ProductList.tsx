import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { VStack, Text, Divider, HStack, FlatList } from 'native-base'
import { Filter } from '@components/Filter'
import { Department } from '@components/Department'

import { SeparatorItem } from '@components/SeparatorItem'
import { ScrollView } from 'react-native-virtualized-view'
import { Promotion } from '@components/Promotion'
import { Group } from '@components/Group'
import { useState } from 'react'

export function ProductList() {
  const [groups, setGroups] = useState([
    'Carnes & Peixes',
    'Frios & Laticínios',
    'Higiene & Perfumaria',
    'Bebidas',
  ])
  const [groupSelected, setGroupSelected] = useState('Carnes & Peixes')

  return (
    <VStack flex={1}>
      <HomeHeader />

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
          <Text fontSize={'lg'} paddingLeft={4} bg={'gray.100'}>
            Carnes, Aves e Peixes
          </Text>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
