import { FlatList } from 'native-base'

import { Group } from '@components/Group'
import { categoryList } from '../../data/category'
import { GroupCategory } from '@components/GroupCategory'
import { ImageProps } from 'react-native'
import { Category } from '@data/CategoryList'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Department() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <FlatList
      data={categoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GroupCategory
          id={item.id}
          image={item.image}
          title={item.title}
          onPress={() => {
            // navigation.navigate('productDetails')
          }}
        />
      )}
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 16 }}
      mt={4}
      mb={24}
    />
  )
}
