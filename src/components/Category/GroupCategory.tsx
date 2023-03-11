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

type Props = TouchableOpacityProps & {
  id: string
  title: string
  image: ImageProps['source']
  data: Category
}

export function GroupCategory({ id, title, image }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleProductSubCategory() {
    navigation.navigate('productSubCategory')
  }

  return (
    <VStack mb={2}>
      <TouchableOpacity onPress={handleProductSubCategory}>
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
            source={image}
          />
          <Box flex={1} marginLeft={2}>
            <Text fontSize={16}>{title}</Text>
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
