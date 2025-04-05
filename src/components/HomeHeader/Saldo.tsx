import { useAuth } from '@hooks/useAuth'
import { Image, IImageProps, VStack, Text, Box, HStack } from 'native-base'

export function Saldo() {
  const { user } = useAuth()
  return (
    <VStack
      bg="green.300"
      paddingBottom={1}
      paddingTop={2}
      justifyContent="space-between"
      alignItems="center"
      borderRadius={'md'}
      padding={1}
    >
      <Box mr={4}>
        <Text
          color="black"
          fontWeight={'normal'}
          fontSize={18}
          numberOfLines={1}
          borderTopWidth={0.2}
          borderBottomWidth={0.2}
        >
          Seu saldo
        </Text>
      </Box>

      <Box ml={1}>
        <Text
          color="darkBlue.600"
          fontWeight={'bold'}
          fontSize={20}
          numberOfLines={1}
        >
          R$ {(Number(user.balance) || 0).toFixed(2)}
        </Text>
        <Box ml={0} width={24} height={1} bg={'green.500'}>
          {''}
        </Box>
      </Box>
    </VStack>
  )
}
