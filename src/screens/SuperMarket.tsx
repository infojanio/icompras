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
  Box,
} from 'native-base'

import { SeparatorItem } from '@components/SeparatorItem'
import { Group } from '@components/Group'
import { AllProduct } from '@components/AllProduct'
import { HomeScreen } from '@components/HomeScreen'
import { Market } from '@components/Market'

export function SuperMarket() {
  const [markets, setMarkets] = useState<string[]>([
    'Supermercado Mercadona',
    'Mercado do Ponto',
    'Goianão',
  ])
  const [marketSelected, setMarketSelected] = useState('Supermercado Mercadona')

  return (
    <VStack flex={1}>
      <HomeScreen title={'Supermercados'} />

      <Center bg={'gray.300'} flex={1} paddingTop={2}>
        <FlatList
          showsVerticalScrollIndicator
          data={markets}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Market
              title={item}
              subTitle="Horário de Atendimento"
              hour_week="Seg/Sáb (07:00 - 19:00)"
              hour_weekend="Dom (07:00 - 12:00)"
              isActive={marketSelected === item}
              onPress={() => setMarketSelected(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Center bg={'gray.300'} flex={1}>
              <Text tintColor={'red'} fontSize={18}>
                Ainda não temos parceiros na cidade!
              </Text>
            </Center>
          )}
          _contentContainerStyle={{ px: 2 } && { flex: 1 }}
        />
      </Center>
    </VStack>
  )
}
