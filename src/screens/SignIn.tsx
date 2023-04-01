import React from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  View,
  ScrollView,
  IconButton,
  Box,
  Icon,
  Divider,
  Flex,
  Stack,
} from 'native-base'

import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { StackNavigatorRoutesProps } from '@routes/stack.routes'
import LogoSvg from '@assets/logomarca.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type FormDataProps = {
  phone: string
  password: string
}

const signInSchema = yup.object({
  phone: yup.string().required('Informe n. telefone'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, ' Estão faltando caracteres!'),
})

export function SignIn() {
  const [show, setShow] = React.useState(false) //mostra senha
  const handleClick = () => setShow(!show)

  const navigation = useNavigation<StackNavigatorRoutesProps>()

  //criando controle para o formulário
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  //Criar nova conta
  function handleNewAccount() {
    navigation.navigate('signup')
  }

  //voltar a tela anterior
  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignIn({ phone, password }: FormDataProps) {
    //navigation.navigate('localization')}
    console.log({
      phone,
      password,
    })
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        space={2}
        alignItems="center"
        direction="row"
        marginTop="2"
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
      </VStack>

      <View
        justifyContent="center"
        color="green.700"
        fontSize="2xl"
        mb={4}
        paddingTop="0.5"
        paddingLeft="10"
      >
        <Text
          fontFamily="heading"
          fontWeight="bold"
          fontSize="3xl"
          color="green.700"
        >
          Olá!
        </Text>

        <Text>Acesse sua conta ou cadastre-se</Text>
      </View>

      <View bg="green.500" pt="4" pb="20">
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Center marginTop="2" marginBottom="2" marginRight="2" marginLeft="2">
            <Box w="100%">
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <Input
                    keyboardType="phone-pad"
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="phone" />}
                        size="sm"
                        m={2}
                        _light={{
                          color: 'black',
                        }}
                        _dark={{
                          color: 'gray.400',
                        }}
                      />
                    }
                    placeholder="(62) 0 0000-0000" // mx={4}
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
            <View alignSelf={'flex-start'} mt="0" marginBottom="2"></View>

            <Button
              title="Entrar"
              fontWeight={'extrabold'}
              onPress={handleSubmit(handleSignIn)}
            />

            <Center mt={2}>
              <Text mb="2" color="green.700" fontSize="sm">
                Esqueci a minha senha
              </Text>

              <Box w="324">
                <Divider my={8} bgColor="gray.50" borderBottomWidth="0.8" />
              </Box>

              <Text
                color="green.700"
                fontSize="md"
                fontWeight="bold"
                mt={4}
                mb={2}
                fontFamily="body"
              >
                Ainda não tenho cadastro
              </Text>
            </Center>

            <Button
              title="Criar Conta"
              color={'white'}
              variant="outline"
              bg="gray.100"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>

        <Center my="2" flexDirection="row" alignItems="center" marginLeft={2}>
          <LogoSvg />
          <Text
            color="gray.100"
            fontWeight="extrabold"
            fontSize="lg"
            fontStyle="italic"
          >
            Compre Fácil
          </Text>
        </Center>
      </View>
    </ScrollView>
  )
}
