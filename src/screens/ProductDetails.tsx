import { HomeScreen } from '@components/HomeScreen'
import { Center, VStack, Text } from 'native-base'

export function ProductDetails() {
  return (
    <VStack>
      <HomeScreen title="Detalhes do produto" />
      <Center>
        <Text>Detalhes do produto</Text>
      </Center>
    </VStack>
  )
}
