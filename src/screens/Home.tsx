import { VStack, Text, HStack, FlatList } from 'native-base'
import { ScrollView } from 'react-native-virtualized-view'

import { Filter } from '@components/Filter'
import { Department } from '@components/Department'
import { SeparatorItem } from '@components/SeparatorItem'
import { Promotion } from '@components/Promotion'
import { HomeHeader } from '@components/HomeHeader'
import { ProductCategory } from 'src/descart/ProductCategory'
import { Product } from '@components/Product'
import { ProductSubCategory } from './Product/ProductSubCategory'
import { Category } from '@components/Category'
import { Sessions } from '@components/Sessions'
import { Catalog } from 'src/descart/Catalog'
import { SliderItem } from 'src/descart/SliderItem'
import { ProductCategoryVertical } from '@utils/ProductCategoryVertical'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Filter />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg={'gray.50'} marginTop={2}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Promoções
          </Text>
          <Promotion />
        </VStack>

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Categorias
          </Text>
        </VStack>
        <Category />
      </ScrollView>
    </VStack>
  )
}
