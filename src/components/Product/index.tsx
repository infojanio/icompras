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