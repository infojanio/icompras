import { Sessions } from 'src/components/Sessions'
import { HomeHeader } from 'src/components/HomeHeader'
import { VStack, Text, Divider } from 'native-base'
import { Filter } from 'src/components/Filter'
import { Department } from 'src/components/Department'

import { SeparatorItem } from 'src/components/SeparatorItem'
import { ScrollView } from 'react-native-virtualized-view'
import { Promotion } from 'src/components/Promotion'
import { ProductList } from '@screens/ProductList'
import { Group } from 'src/components/Group'

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
