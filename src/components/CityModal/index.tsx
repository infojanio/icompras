import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Icon,
} from 'native-base'

export function CityModal() {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <Center>
      <Button onPress={onOpen}>Selecione a cidade</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              Selecione a cidade
            </Text>
            <Box alignItems={'center'} p="1" mr={2} borderRadius={2}>
              <Icon
                as={<MaterialIcons name="keyboard-arrow-down" />}
                size={7}
                _light={{
                  color: 'gray.400',
                }}
                _dark={{
                  color: 'red.700',
                }}
              />
            </Box>
          </Box>
          <Actionsheet.Item>Alto Paraíso</Actionsheet.Item>
          <Actionsheet.Item>Campos Belos</Actionsheet.Item>
          <Actionsheet.Item>Cavalcante</Actionsheet.Item>
          <Actionsheet.Item>Combinado</Actionsheet.Item>
          <Actionsheet.Item>Monte Alegre</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CityModal />
      </Center>
    </NativeBaseProvider>
  )
}
