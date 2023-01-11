import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { VStack, Text, Divider } from 'native-base'
import { Filter } from '@components/Filter'
import { Department } from '@components/Department'

import { SeparatorItem } from '@components/SeparatorItem'
import { ScrollView } from 'react-native-virtualized-view'
import { Promotion } from '@components/Promotion'
import { ProductList } from '@screens/ProductList'
import { Group } from '@components/Group'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Filter />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg={'gray.50'} marginTop={2}>
          <Text fontSize={'lg'} paddingLeft={4} bg={'gray.100'}>
            Promoções
          </Text>
          <Promotion />
        </VStack>

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'lg'} paddingLeft={4} bg={'gray.100'}>
            Departamentos
          </Text>
        </VStack>
        <Department />
      </ScrollView>
    </VStack>
  )
}
