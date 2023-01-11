import { Image, IImageProps } from 'native-base'

type Props = IImageProps & {
  size: number
}

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="3xl"
      borderWidth={1}
      borderColor="gray.100"
      {...rest}
    />
  )
}