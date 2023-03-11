import { FlatList } from 'native-base'

import { Group } from '@components/Product/Group'
import { categoryList } from '../../data/categoryData'
import { GroupCategory } from '@components/Category/GroupCategory'
import { ImageProps } from 'react-native'
import { CategoryData } from '@data/categoryData'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Category() {
  return (
    <FlatList
      data={categoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GroupCategory id={item.id} image={item.image} title={item.title} />
      )}
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 16 }}
      mt={4}
      mb={24}
    />
  )
}
