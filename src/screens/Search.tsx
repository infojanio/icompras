import { HomeHeader } from '@components/HomeHeader'
import { Center, Text } from 'native-base'
import { ProductList } from './ProductList'

export function Search() {
  return (
    <Center flex={1}>
      <ProductList/>
     
    </Center>
  )
}
