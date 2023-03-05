import { ImageSourcePropType, Platform } from 'react-native'
import { Text, Pressable, IPressableProps } from 'native-base'

type Props = IPressableProps & {
  name: string
  isActive: boolean
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={1}
      ml={1}
      mt={2}
      mb={2}
      w={32}
      h={12}
      bg={'gray.50'}
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        bgColor: 'gray.200',
        borderColor: 'red.500',
        borderBottomWidth: 2,
      }}
      {...rest}
    >
      <Text
        color={isActive ? 'green.700' : 'gray.700'}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}
