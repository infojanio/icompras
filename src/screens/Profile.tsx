import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonBack } from '@components/ButtonBack'
import { UserPhoto } from '@components/HomeHeader/UserPhoto'
import { HomeScreen } from '@components/HomeScreen'
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from 'native-base'
import { Localization } from './Localization'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 32

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack>
      <HomeScreen title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={2} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{
                uri:
                  'https://avatars.githubusercontent.com/u/59238443?s=400&u=791297bd91ddab3559bfe062a70e87c1919935bf&v=4',
              }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.600"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={4}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" />
          <Input placeholder="info.janio@gmail.com" isDisabled={true} />
        </Center>

        <VStack px={10} mt={4} mb={9}>
          <Heading color="gray.500" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <Input placeholder="Senha atual" secureTextEntry />
          <Input placeholder="Nova senha" secureTextEntry />
          <Input placeholder="Confirme a nova senha" secureTextEntry />

          <Button title="Atualizar" mt={2} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
