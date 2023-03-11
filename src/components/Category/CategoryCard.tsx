import React from 'react'
import {
  Image,
  FlatList,
  Text,
  Box,
  View,
  HStack,
  Icon,
  VStack,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { Category } from '@data/CategoryList'
import {
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export type CategoryCardProps = {
  id: string
  title: string
  image: ImageProps['source']
}

type Props = TouchableOpacityProps & {
  data: CategoryCardProps
}

export function CategoryCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <VStack mb={2}>
        <HStack
          backgroundColor="white"
          alignItems="center"
          marginLeft={2}
          marginRight={2}
          pb={2}
          borderRadius={'xl'}
          minH={'16'}
        >
          <Image
            alt="produtos"
            alignItems={'center'}
            ml={2}
            height={16}
            width={24}
            source={data.image}
          />
          <Box flex={1} marginLeft={2}>
            <Text fontSize={16}>{data.title}</Text>
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
      </VStack>
    </TouchableOpacity>
  )
}
