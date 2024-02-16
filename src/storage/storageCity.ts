import AsyncStorage from '@react-native-async-storage/async-storage'

import { CityDTO } from '@dtos/CityDTO'
import { CITY_STORAGE } from '@storage/storageConfig'

//salva os dados no dispositivo
export async function storageCitySave(city: CityDTO) {
  await AsyncStorage.setItem(CITY_STORAGE, JSON.stringify(city))
}

//retorna as cidades
export async function storageCityGet() {
  const storage = await AsyncStorage.getItem(CITY_STORAGE)

  const city: CityDTO = storage ? JSON.parse(storage) : {}
  return city
}

//remove a cidade do storage
export async function storageCityRemove() {
  await AsyncStorage.removeItem(CITY_STORAGE)
}
