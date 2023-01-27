import { HomeCart } from '@components/HomeCart'
import { Center, Text, VStack } from 'native-base'


export function Cart() {
  return (
    <VStack>
      <HomeCart title={'Carrinho'} price={1435.52} quantity={12} />

    </VStack>
  )
}
