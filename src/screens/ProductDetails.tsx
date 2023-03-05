import { HomeScreen } from '@components/HomeScreen'
import { Center, VStack, Text } from 'native-base'
import { ProductSubCategory } from './ProductSubCategory'

export function ProductDetails() {
  return (
    <VStack flex={1}>
      <HomeScreen title="Detalhes do produto" />
    </VStack>
  )
}
