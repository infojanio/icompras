import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base' //renomeia o Input para não dar conflito as NativeBaseInput

type Props = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={2}>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      <NativeBaseInput
        variant="underlined"
        bg="gray.50"
        h={10}
        px={4}
        borderBottomWidth="2"
        fontSize="md"
        color="gray.700"
        fontFamily="body"
        placeholderTextColor="gray.400"
        fontWeight="normal"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bg: 'gray.50',
          borderBottomWidth: 2,
          borderColor: 'green.700',
        }}
        {...rest}
      />
    </FormControl>
  )
}
