import { useNavigation } from '@react-navigation/native'
import { FlatList, VStack } from 'native-base'
import { HeaderList } from '@components/HeaderList'

import {
  CategoryCard,
  CategoryCardProps,
} from '@components/Category/CategoryCard'
import { CATEGORY } from '../../data/categoryData'
import { Alert } from 'react-native'

export function Category() {
  const { navigate } = useNavigation()

  return (
    <VStack>
      <FlatList
        data={CATEGORY}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            data={item}
            onPress={() =>
              navigate('productSubCategory', { categoryId: item.id })
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 16 }}
        mt={4}
        mb={24}
      />
    </VStack>
  )
}

/*
import { FlatList } from 'native-base'

import { CATEGORY } from '../../data/categoryData'
import { GroupCategory } from '@components/Category/GroupCategory'

export function Category() {
  return (
    <FlatList
      data={CATEGORY}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GroupCategory id={item.id} image={item.image} title={item.name} />
      )}
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 16 }}
      mt={4}
      mb={24}
    />
  )
}



*/
