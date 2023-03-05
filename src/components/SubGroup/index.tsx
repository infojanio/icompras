import { FlatList } from 'native-base'

import { Group } from '@components/Group'
import { SubcategoryList } from '../../data/subcategory'

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function SubGroup({ onSelect, selected }: Props) {
  return (
    <FlatList
      data={SubcategoryList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Group
          name={item.title}
          isActive={selected === item.title}
          onPress={() => onSelect(item.title)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 8 }}
      mt={10}
      maxH={16}
      minH={16}
    />
  )
}
