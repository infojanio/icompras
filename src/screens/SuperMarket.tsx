import React, { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import {
  VStack,
  Text,
  Divider,
  HStack,
  FlatList,
  View,
  Center,
} from 'native-base'

import { SeparatorItem } from '@components/SeparatorItem'
import { Group } from '@components/Group'
import { AllProduct } from '@components/AllProduct'
import { HomeScreen } from '@components/HomeScreen'
import { Market } from '@components/Market'

export function SuperMarket() {
<<<<<<< HEAD
  const [markets, setMarkets] = useState([1, 2, 3, 4, 5, 6, 7])
  const [marketSelected, setMarketSelected] = useState('Supermercado Goiano')

  return (
    <VStack flex={1} >
      <HomeScreen title={'Supermercados'} />
        
      <Center bg={'gray.300'} flex={1} paddingTop={2}>
=======
  const [markets, setMarkets] = useState([
    'Supermercado Mineiro',
    'Supermercado Goiano',
    'Supermercado do ponto',
    'Supermercado Bahia',
  ])
  const [marketSelected, setMarketSelected] = useState('Supermercado Goiano')

  return (
    <VStack flex={1}>
      <HomeScreen title={'Supermercados'} />

      <Center bg={'amber.400'} flex={1}>
>>>>>>> lista de supermercados
        <FlatList
          showsVerticalScrollIndicator
          data={markets}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Market
<<<<<<< HEAD
=======
              w={120}
>>>>>>> lista de supermercados
              name={item}
              isActive={marketSelected === item}
              onPress={() => setMarketSelected(item)}
            />
          )}
          _contentContainerStyle={{ px: 2 }}
        />
      </Center>
    </VStack>
  )
}
