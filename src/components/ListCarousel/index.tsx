import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PromotionsCarousel from '@components/PromotionsCarousel'
import { Product } from '@utils/inuteis/ProductList1'
import { Carousel } from '@components/Carousel'

const HomeScreen: React.FC = () => {
  const [promotions, setPromotions] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch('https://sua-api.com/promocoes') // Ajuste para sua API
        const data = await response.json()
        setPromotions(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPromotions()
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View>
      <Carousel promotions={promotions} />
    </View>
  )
}

export default HomeScreen
