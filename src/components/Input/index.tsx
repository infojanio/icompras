import { Input as NativeBaseInput, IInputProps } from 'native-base' //renomeia o Input para não dar conflito as NativeBaseInput

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      variant="underlined"
      bg="gray.50"
      h={10}
      px={4}
      borderBottomWidth="1"
      fontSize="md"
      color="gray.700"
      fontFamily="body"
      mb={2}
      placeholderTextColor="gray.400"
      fontWeight="normal"
      _focus={{
        bg: 'gray.50',
        borderBottomWidth: 1,
        borderColor: 'green.700',
      }}
      {...rest}
    />
  )
}