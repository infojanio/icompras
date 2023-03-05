import { useNavigation } from '@react-navigation/native'
import { FlatList, VStack } from 'native-base'
import { HeaderList } from '@components/HeaderList'

import { ProductCard, ProductCardProps } from '@components/ProductCard'
import { PRODUCTS } from '../../data/products'

type Props = {
  subcategory: string
  data: ProductCardProps[]
}

export function Product({ data, subcategory }: Props) {
  const { navigate } = useNavigation()

  return (
    <VStack flex={1}>
      <HeaderList title={subcategory} counter={PRODUCTS.length} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            data={item}
            //onPress={() => navigate('productDetails', { productId: item.id })}
          />
        )}
        numColumns={2}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}

/*
import React from 'react'

import { ProductItem } from './ProductItem'
import { Product, productList } from '../../data/ProductList1'
import { ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { FlatList, View } from 'native-base'
import { SeparatorItem } from '../SeparatorItem'

export function Product() {
  function renderItem({ item }: ListRenderItemInfo<Product>) {
    return (
      <TouchableOpacity>
        <ProductItem {...item} />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        // ListHeaderComponent={PromotionShow} Aceita outro componente dentro da lista
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
*/
