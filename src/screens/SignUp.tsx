import React, { Component } from 'react'

import { useNavigation } from '@react-navigation/native'

import {
  VStack,
  Center,
  Text,
  View,
  ScrollView,
  Icon,
  IconButton,
  Box,
  Stack,
} from 'native-base'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { SeparatorItem } from '@components/SeparatorItem'
import { StackNavigatorRoutesProps } from '@routes/stack.routes'

export function SignUp() {
  const navigation = useNavigation<StackNavigatorRoutesProps>()

  const [show, setShow] = React.useState(false) //mostra senha
  const handleClick = () => setShow(!show)

  //voltar a tela anterior
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        space={24}
        direction="row"
        marginTop="4"
        marginBottom="4"
        marginLeft="2"
      >
        {['sm'].map((size) => (
          <IconButton
            key={size}
            borderRadius="full"
            size={size}
            variant="outline"
            _icon={{
              as: Feather,
              name: 'chevron-left',
            }}
            onPress={handleGoBack}
          />
        ))}

        <Center color="gray.100" fontSize="2xl" mb={2} paddingTop="0.5">
          <Text fontSize="14" fontWeight={'bold'}>
            {' '}
            CADASTRO
          </Text>
        </Center>
      </VStack>

      <View marginBottom="2">
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Text ml={4} fontSize="16" color="gray.500">
            Dados pessoais
          </Text>

          <Center marginRight="2" marginLeft="2">
            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Nome completo" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                keyboardType="email-address"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="email" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="E-mail" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                keyboardType="phone-pad"
                autoCapitalize="none"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="phone" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="(62) 99999-9999" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Stack
                    maxWidth={32}
                    direction={{
                      md: 'row',
                    }}
                    space="4"
                  >
                    <Button
                      borderRadius="none"
                      size={'sm'}
                      backgroundColor="gray.50"
                      title=""
                      ml={1}
                      onPress={handleClick}
                      variant="solid"
                      rightIcon={
                        <Icon
                          as={MaterialIcons}
                          name="visibility"
                          size="lg"
                          m={2}
                          _light={{
                            color: 'black',
                          }}
                          _dark={{
                            color: 'gray.300',
                          }}
                        />
                      }
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </Stack>
                }
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Senha" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>
          </Center>
        </VStack>
      </View>

      <View marginBottom="2">
        <SeparatorItem />
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Text fontSize="16" color="gray.500" marginLeft="4">
            Endereço
          </Text>

          <Center marginBottom="2" marginRight="1" marginLeft="1">
            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="home" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Cidade" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                keyboardType="phone-pad"
                autoCapitalize="none"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="post-add" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="CEP" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="content-paste" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Bairro" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="info-outline" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Rua, quadra, lote" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="perm-device-info" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Complemento" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>
          </Center>
        </VStack>
      </View>

      <View marginLeft="4" marginRight="4" marginTop="0.5">
<<<<<<< HEAD
        <Button
          title="Próximo"
          onPress={() => navigation.navigate('localization')}
        />
=======
        <Button title="Cadastrar" onPress={() => navigation.navigate('home')} />
>>>>>>> lista de supermercados
      </View>
    </ScrollView>
  )
}
