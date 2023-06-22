import { useEffect, useState } from 'react'
import { FlatList, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { MaterialIcons } from '@expo/vector-icons'

import { CategoryCard } from '@components/Category/CategoryCard'
import { CATEGORY } from '../../data/categoryData'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Category() {
  const [categories, setCategories] = useState(['Peixes', 'Carnes'])

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  function handleOpenCategoryDetails() {
    navigation.navigate('categoryDetails')
  }

  //listar as categorias
  async function fetchCategories() {
    try {
      const response = await api.get('/categories')
      setCategories(response.data.name)
      console.log(response.data.name)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades atendidas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <VStack>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <CategoryCard name={item} onPress={handleOpenCategoryDetails} />
          )
        }}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 16 }}
        mt={4}
        mb={24}
      />
    </VStack>
  )
}

/*
import { useNavigation } from '@react-navigation/native'
import { FlatList, VStack } from 'native-base'
import { HeaderList } from '@components/HeaderList'

import {
  CategoryCard,
  CategoryCardProps,
} from '@components/Category/CategoryCard'
import { CATEGORY } from '../../data/categoryData'
import { Alert } from 'react-native'

export function Category() {
  const { navigate } = useNavigation()

  return (
    <VStack>
      <FlatList
        data={CATEGORY}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            data={item}
            onPress={() =>
              navigate('productSubCategory', { categoryId: item.id })
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 16 }}
        mt={4}
        mb={24}
      />
    </VStack>
  )
}

/*
import { FlatList } from 'native-base'

import { CATEGORY } from '../../data/categoryData'
import { GroupCategory } from '@components/Category/GroupCategory'

export function Category() {
  return (
    <FlatList
      data={CATEGORY}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GroupCategory id={item.id} image={item.image} title={item.name} />
      )}
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 16 }}
      mt={4}
      mb={24}
    />
  )
}



*/
