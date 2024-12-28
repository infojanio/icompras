import { useEffect, useState } from 'react'
import { FlatList, HStack, VStack, useToast } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { PromotionCard } from '@components/Promotion/PromotionCard'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { PromotionDTO } from '@dtos/PromotionDTO'
import { Loading } from '@components/Loading'
import { CompanyDTO } from '@dtos/CompanyDTO'

type RouteParamsProps = {
  promotionId: string
}

type Props = {
  promotion: string
  data: PromotionDTO[]
}

export function Promotion() {
  const [promotions, setPromotions] = useState<PromotionDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const toast = useToast()

  /*
  function handleOpenSubCategories(categoryId: string) {
    navigation.navigate('productBySubCategory', { categoryId })
  }
    */

  //listar as categorias
  async function fetchPromotions() {
    try {
      setIsLoading(true)
      //const response = await api.get(`/companies/company/?company_id=${companyId}`,
      const response = await api.get(`/promotions`)

      //const response = await api.get('/categories/category/?category_id=${categoryId}')

      setPromotions(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as promoções cadastradas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPromotions()
  }, [])

  return (
    <HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack flex={1}>
          <FlatList
            data={promotions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PromotionCard
                data={item}
                //onPress={() => handleOpenSubCategories(item.id)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 2 }}
            mt={2}
            mb={2}
          />
        </VStack>
      )}
    </HStack>
  )
}
