import { ButtonBack } from '@components/ButtonBack'
import { HomeScreen } from '@components/HomeScreen'
import { Center, Text, VStack } from 'native-base'
import { Localization } from './Localization'

export function Profile() {
  return (
<VStack>
      <HomeScreen title='Perfil'/>
    <Center bg={'amber.500'}>
      <Text color="black">Carrinho</Text>
    </Center>
    </VStack>
  )
}
