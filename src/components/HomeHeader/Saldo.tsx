import { useAuth } from '@hooks/useAuth'
import { Image, IImageProps, VStack, Text, Box, HStack } from 'native-base'

export function Saldo() {
  const { user } = useAuth()
  return (
    <VStack
      bg="green.300"
      paddingBottom={3}
      paddingTop={3}
      justifyContent="space-between"
      alignItems="center"
      borderRadius={'3xl'}
      borderWidth={0.24}
      padding={1}
    >
      <Box>
        <Text
          color="black"
          fontWeight={'normal'}
          fontSize={15}
          numberOfLines={1}
        >
          {' '}
          Seu saldo:
        </Text>
      </Box>

      <Box>
        <Text color="black" fontWeight={'bold'} fontSize={24} numberOfLines={1}>
          {/*'R$ {user.name} '*/}
          R$ 0,00
        </Text>
      </Box>
    </VStack>
  )
}
