import { VStack } from 'native-base'

import { ItemsCart } from '@components/Cart/ItemsCart'
import { HomeCart } from '@components/Cart/HomeCart'

export function Cart() {
  return (
    <VStack flex={1}>
      <HomeCart title={'Carrinho'} price={1435.52} quantity={2} />

      <ItemsCart />
    </VStack>
  )
}
