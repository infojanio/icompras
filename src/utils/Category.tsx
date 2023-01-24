import React from 'react'
import {
  Avatar,
  Center,
  FlatList,
  Heading,
  HStack,
  Text,
  Spacer,
  VStack,
  ScrollView,
  Box,
  Stack,
  View,
} from 'native-base'

type Props = {
  name: string
}

import { TouchableOpacity } from 'react-native'

import AcougueSvg from '@assets/acougues.svg'
import IceSvg from '@assets/doces.svg'
import MeatSvg from '@assets/2.svg'
import CookieSvg from '@assets/biscoito.svg'
import HygieneSvg from '@assets/higiene.svg'
import DrinkSvg from '@assets/drink.svg'
import BabySvg from '@assets/baby.svg'
import PetSvg from '@assets/dog.svg'

export function Category() {
  return (
    <Stack bg="gray.300" pb={2} pt={4}>
      <VStack
        bg="gray.100"
        borderColor="gray.300"
        borderWidth={1}
        borderRadius="3xl"
        paddingBottom={1}
        ml="2"
        mr="2"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="white.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Carnes {'\n'}& Peixes
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Frios {'\n'}& Laticínios
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <HygieneSvg height={50} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Higiene {'\n'}& Perfumaria
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <DrinkSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Bebidas
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Congelados
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Limpeza
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <IceSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Bebê
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Pães e Bolos
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Descartáveis{'\n'}& Tech
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Molhos & Conservas
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <IceSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Sorvetes
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <CookieSvg height={40} width={60} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Biscoitos & Salgadinhos
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Hortifrúti
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <PetSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Pet Shop
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <MeatSvg height={60} width={80} />
                <Text fontSize="md" pb="4" color="black" textAlign="center">
                  Outros
                </Text>
              </TouchableOpacity>
            </Box>
          </View>
        </ScrollView>
      </VStack>
    </Stack>
  )
}
