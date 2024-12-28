import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Image, Text, Box, HStack, Icon, VStack, Center } from 'native-base'

import { PromotionDTO } from '@dtos/PromotionDTO'

export type Props = TouchableOpacityProps & {
  data: PromotionDTO
}

export function PromotionCard({ data, ...rest }: Props) {
  return (
    <VStack flex={1} backgroundColor={'gray.100'}>
      <TouchableOpacity {...rest}>
        <Box
          size={20}
          marginBottom={1}
          backgroundColor="gray.100"
          alignItems="center"
          marginLeft={1}
          marginRight={1}
          borderWidth={0.8}
          borderColor={'gray.200'}
          pb={1}
          pt={1}
          borderRadius={'md'}
          minH={'16'}
        >
          <Image
            marginTop={1}
            w={16}
            h={12}
            source={{
              uri: data.images, //busca a URL da imagem
              //uri: `${api.defaults.baseURL}/images/thumb/${data.image}`, //busca o arquivo salvo no banco
            }}
            alt="Imagem"
            rounded="md"
            resizeMode="cover"
          />

          <HStack flex={1}>
            <Center>
              <Text
                textAlign={'center'}
                justifyContent={'center'}
                fontSize={12}
                fontWeight={'semibold'}
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
