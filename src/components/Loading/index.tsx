import { Center, Spinner, Image, Text } from 'native-base'

import SplashImg from '@assets/fundo.png'

export function Loading() {
  return (
    <Center flex={1} bg="gray.200">
      <Image
        size={80}
        source={SplashImg}
        defaultSource={SplashImg}
        alt="Pessoa comprando online"
        resizeMode="contain"
        position="relative"
      />
      <Text fontSize={14}>Compre App Soluctions </Text>

      <Spinner color="green.500" />
    </Center>
  )
}