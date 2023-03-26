import { FlatList, VStack } from 'native-base'

import { Card } from '@components/Category/Card'
import { categoryList } from '../../data/category'

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function GroupCategory({ onSelect, selected }: Props) {
  return (
    <VStack>
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            isActive={selected === item.name}
            onPress={() => onSelect(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        mt={8}
        maxH={16}
        minH={16}
      />
    </VStack>
  )
}
