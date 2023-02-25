import React from 'react'

import { CategoryItem } from './CategoryItem'
import { Category, categoryList } from '../../data/CategoryList'
import { ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { FlatList, View } from 'native-base'
import { SeparatorItem } from '../SeparatorItem'

export function Department() {
  function renderItem({ item }: ListRenderItemInfo<Category>) {
    return <CategoryItem {...item} />
  }

  return (
    <View>
      <FlatList
        // ListHeaderComponent={PromotionShow} Aceita outro componente dentro da lista
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        data={categoryList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
