import { useNavigation } from '@react-navigation/native'
import { FlatList, VStack } from 'native-base'
import { HeaderList } from '@components/HeaderList'

import { ProductCard, ProductCardProps } from '@components/Product/ProductCard'
import { PRODUCTS } from '../../data/products'

type Props = {
  subcategory: string
  data: ProductCardProps[]
}

export function Product({ data, subcategory }: Props) {
  const { navigate } = useNavigation()

  return (
    <VStack bg={'gray.200'}>
      <HeaderList title={subcategory} counter={PRODUCTS.length} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            data={item}
            onPress={() => navigate('productDetails', { productId: item.id })}
          />
        )}
        numColumns={2}
        _contentContainerStyle={{
          marginLeft: 8,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
