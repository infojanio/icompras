import { VStack, Text, HStack, FlatList } from 'native-base'
import { ScrollView } from 'react-native-virtualized-view'

import { Filter } from '@components/Filter'

import { SeparatorItem } from '@components/SeparatorItem'
import { Promotion } from '@components/Promotion'
import { HomeHeader } from '@components/HomeHeader'
import { Category } from '@components/Category'
import { useAuth } from '@hooks/useAuth'
import { useCity } from '@hooks/useCity'

export function Home() {
  const { user } = useAuth()
  const { city } = useCity()

  return (
    <VStack flex={1}>
      <HomeHeader />
      <Filter />

      <VStack bg={'gray.100'} marginTop={2}>
        <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
          {user.name}
        </Text>
      </VStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*
        <VStack flex={1} bg={'gray.50'} marginTop={2}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Promoções
          </Text>
          <Promotion />
        </VStack>
        */}

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Categorias
          </Text>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
