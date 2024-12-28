import React, { useState } from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'

import { api } from '@services/api'

import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
  useToast,
} from 'native-base'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import { AppError } from '@utils/AppError'
import { useAuth } from '@hooks/useAuth'

type FormDataProps = {
  //dados na tabela users
  name: string
  email: string
  phone: string
  password: string
  password_confirm: string
  //avatar: string
  //type: string
  //isAdmin: string

  /*dados na tabela addresses
  city: string
  cep: string
  district: string
  street: string
  complement: string
  */
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  phone: yup.string().required('Informe n. telefone'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve conter no mínimo 6 dígitos'),

  password_confirm: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'A senha digitada não confere!'), //verifica se a senha são iguais

  /*
   city: yup.string().required('Informe a cidade'),
  district: yup.string().required('Informe o bairro'),
  street: yup.string().required('Informe a rua'),
  */
})

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()
  const { signIn } = useAuth()

  const handleClick = () => setShow(!show)

  const [show, setShow] = React.useState(false) //mostra senha
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  const navigation = useNavigation<StackNavigatorRoutesProps>()

  //  const navigation = useNavigation()

  //voltar a tela anterior
  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSignUp({
    name,
    email,
    phone,
    password,
  }: /*
    type,
    city,
    cep,
    district,
    street,
    complement,
    */
  FormDataProps) {
    try {
      setIsLoading(true)

      await api.post('/users', {
        name,
        email,
        phone,
        password,
        // type,
      })

      await signIn(email, password) //loga no app após cadastro

      // direciona para a tela inicial
      navigation.navigate('initial')

      /*
      const responseAddress = await api.post('/address', {
        city,
        cep,
        district,
        street,
        complement,
      })
      console.log(responseAddress)
      */
    } catch (error) {
      setIsLoading(false)

      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível criar a conta. Tente novamente mais tarde!'
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <VStack
            space={24}
            direction="row"
            marginTop="2"
            marginBottom="2"
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
            <VStack
              marginRight="4"
              marginLeft="4"
              borderRadius="2xl"
              bg="gray.50"
            >
              <Text ml={4} fontSize="14" color="gray.500">
                Dados pessoais
              </Text>

              <Center marginRight="2" marginLeft="2">
                <Box w="100%">
                  <Controller
                    control={control}
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
                        errorMessage={errors.phone?.message}
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
                        errorMessage={errors.password?.message}
                      />
                    )}
                  />
                </Box>

                <Box w="100%">
                  <Controller
                    control={control}
                    name="password_confirm"
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
                        placeholder="Confirme a Senha" // mx={4}
                        _light={{
                          placeholderTextColor: 'blueGray.400',
                        }}
                        _dark={{
                          placeholderTextColor: 'blueGray.50',
                        }}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.password_confirm?.message}
                      />
                    )}
                  />
                </Box>
              </Center>
            </VStack>
          </View>

          <View marginLeft="4" marginRight="4" marginTop="0.5">
            <Button
              title="Próximo"
              onPress={handleSubmit(handleSignUp)}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

{
  /* 
      <View marginBottom="2">
        <SeparatorItem />
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Text fontSize="14" color="gray.500" marginLeft="4">
            Endereço
          </Text>

          <Center marginBottom="2" marginRight="1" marginLeft="1">
            <Box w="100%">
              <Controller
                control={control}
                name="city"
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
                    errorMessage={errors.city?.message}
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
                    errorMessage={errors.cep?.message}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="district"
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
                    errorMessage={errors.district?.message}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="street"
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
                    errorMessage={errors.street?.message}
                  />
                )}
              />
            </Box>

            <Box w="100%">
              <Controller
                control={control}
                name="complement"
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
*/
}
