import { FlatList, VStack } from 'native-base'

import { Group } from '@components/Product/Group'
import { categoryList } from '../../data/category'

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function SubGroup({ onSelect, selected }: Props) {
  return (
    <VStack>
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
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
