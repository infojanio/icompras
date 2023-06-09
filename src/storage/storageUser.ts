import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserDTO } from '@dtos/UserDTO'
import { USER_STORAGE } from './storageConfig'

//salva os dados no dispositivo
export async function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

//retorna os dados do usuário
export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const user: UserDTO = storage ? JSON.parse(storage) : {}
  return user
}
