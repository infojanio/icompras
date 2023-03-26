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

import { useForm, Controller } from 'react-hook-form'

type FormDataProps = {
  name: string
  email: string
  phone: string
  password: string
  cidade: string
  cep: string
  bairro: string
  rua: string
  complemento: string
}

export function SignUp() {
  const navigation = useNavigation<StackNavigatorRoutesProps>()

  const [show, setShow] = React.useState(false) //mostra senha
  const handleClick = () => setShow(!show)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>()

  //voltar a tela anterior
  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp({
    name,
    email,
    phone,
    password,
    cidade,
    cep,
    bairro,
    rua,
    complemento,
  }: FormDataProps) {
    //navigation.navigate('localization')}
    console.log({
      name,
      email,
      phone,
      password,
      cidade,
      cep,
      bairro,
      rua,
      complemento,
    })
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
              <Controller
                control={control}
                rules={{
                  required: 'Informe o nome!',
                }}
                name="name"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Informe o e-mail!',

                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido',
                  },
                }}
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
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
                    placeholder="62999999999" // mx={4}
                    _light={{
                      placeholderTextColor: 'blueGray.400',
                    }}
                    _dark={{
                      placeholderTextColor: 'blueGray.50',
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                  />
                )}
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
              <Controller
                control={control}
                name="cidade"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="cep"
                render={({ field: { onChange, value } }) => (
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
                    placeholder="73840000" // mx={4}
                    _light={{
                      placeholderTextColor: 'blueGray.400',
                    }}
                    _dark={{
                      placeholderTextColor: 'blueGray.50',
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="bairro"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="rua"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="complemento"
                render={({ field: { onChange, value } }) => (
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
                    onChangeText={onChange}
                    value={value}
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    returnKeyType="send"
                  />
                )}
              />
            </Box>
          </Center>
        </VStack>
      </View>

      <View marginLeft="4" marginRight="4" marginTop="0.5">
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </View>
    </ScrollView>
  )
}
