import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Image, Text, Box, HStack, Icon, VStack, Center } from 'native-base'

import { CityDTO } from '@dtos/CityDTO'

export type Props = TouchableOpacityProps & {
  data: CityDTO
}

export function CityCard({ data, ...rest }: Props) {
  return (
    <VStack flex={1} mb={2}>
      <TouchableOpacity {...rest}>
        <Box
          padding={2}
          backgroundColor="white"
          alignItems="center"
          marginLeft={2}
          marginRight={2}
          pb={2}
          borderRadius={'xl'}
          minH={'16'}
        >
          <HStack flex={1}>
            <Center>
              <Text
                textAlign={'center'}
                justifyContent={'center'}
                fontSize={16}
                numberOfLines={2}
              >
                {data.name}
              </Text>
            </Center>

            {/*   
            <Center>
              <Icon
                as={<MaterialIcons name="navigate-next" />}
                size={6}
                ml={2}
                mr={2}
                _light={{
                  color: 'gray.500',
                }}
                _dark={{
                  color: 'gray.200',
                }}
              />
            </Center>
            */}
          </HStack>
        </Box>
      </TouchableOpacity>
    </VStack>
  )
}
