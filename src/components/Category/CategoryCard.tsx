import React from 'react'

import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { Image, Text, Box, HStack, Icon, VStack } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { CategoryDTO } from '@dtos/CategoryDTO'

export type Props = TouchableOpacityProps & {
  data: CategoryDTO
}

export function CategoryCard({ data, ...rest }: Props) {
  return (
    <VStack mb={2}>
      <TouchableOpacity {...rest}>
        <HStack
          backgroundColor="white"
          alignItems="center"
          marginLeft={2}
          marginRight={2}
          pb={2}
          borderRadius={'xl'}
          minH={'16'}
        >
          <Box rounded="lg" mb={3} overflow="hidden">
            <Image
              w={16}
              h={16}
              source={{
                uri: data.image, //busca a URL da imagem
                //uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
              }}
              alt="Imagem"
              rounded="md"
              mr={4}
              resizeMode="cover"
            />
          </Box>

          <Box flex={1} marginLeft={2}>
            <Text fontSize={16}>{data.name}</Text>
          </Box>
          <Icon
            as={<MaterialIcons name="navigate-next" />}
            size={6}
            ml={2}
            mr={4}
            _light={{
              color: 'gray.500',
            }}
            _dark={{
              color: 'gray.200',
            }}
          />
        </HStack>
      </TouchableOpacity>
    </VStack>
  )
}

/*
import React from 'react'
import { Image, Text, Box, HStack, Icon, VStack } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export type CategoryCardProps = {
  id: string
  name: string
  image: ImageSourcePropType
}

export type Props = TouchableOpacityProps & {
  data: CategoryCardProps
}

export function CategoryCard({ data, ...rest }: Props) {
  return (
    <VStack mb={2}>
      <TouchableOpacity {...rest}>
        <HStack
          backgroundColor="white"
          alignItems="center"
          marginLeft={2}
          marginRight={2}
          pb={2}
          borderRadius={'xl'}
          minH={'16'}
        >
          <Text>{data.id}</Text>
          <Image
            alt="produtos"
            alignItems={'center'}
            ml={2}
            height={16}
            width={24}
            source={data.image}
          />
          <Box flex={1} marginLeft={2}>
            <Text fontSize={16}>{data.name}</Text>
          </Box>
          <Icon
            as={<MaterialIcons name="navigate-next" />}
            size={6}
            ml={2}
            mr={4}
            _light={{
              color: 'gray.500',
            }}
            _dark={{
              color: 'gray.200',
            }}
          />
        </HStack>
      </TouchableOpacity>
    </VStack>
  )
}*/
