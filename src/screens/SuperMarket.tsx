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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 76f9ddf654c2afee5ff5946604859f36ce39296d
  const [markets, setMarkets] = useState([1, 2, 3, 4, 5, 6, 7])
  const [marketSelected, setMarketSelected] = useState('Supermercado Goiano')

  return (
<<<<<<< HEAD
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
=======
  const [markets, setMarkets] = useState([1, 2, 3, 4, 5, 6, 7])
>>>>>>> lista de supermercados
  const [marketSelected, setMarketSelected] = useState('Supermercado Goiano')

  return (
    <VStack flex={1}>
      <HomeScreen title={'Supermercados'} />

<<<<<<< HEAD
      <Center bg={'amber.400'} flex={1}>
>>>>>>> lista de supermercados
=======
      <Center bg={'gray.100'} flex={1}>
>>>>>>> lista de supermercados
=======
    <VStack flex={1}>
      <HomeScreen title={'Supermercados'} />

      <Center bg={'gray.100'} flex={1}>
>>>>>>> 76f9ddf654c2afee5ff5946604859f36ce39296d
        <FlatList
          showsVerticalScrollIndicator
          data={markets}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Market
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              w={120}
>>>>>>> lista de supermercados
=======
>>>>>>> lista de supermercados
=======
>>>>>>> 76f9ddf654c2afee5ff5946604859f36ce39296d
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
