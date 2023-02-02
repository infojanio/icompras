import React, { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { VStack, Text, Divider, HStack, FlatList, View, Center } from 'native-base'

import { SeparatorItem } from '@components/SeparatorItem'
import { Group } from '@components/Group'
import { AllProduct } from '@components/AllProduct'
import { HomeScreen } from '@components/HomeScreen'
import { Market } from '@components/Market'



export function SuperMarket() {
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
      <FlatList
      
      showsVerticalScrollIndicator
        data={markets}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Market
          w={120}
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