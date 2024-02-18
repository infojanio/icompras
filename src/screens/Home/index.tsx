import { VStack, Text, HStack, FlatList, Box } from 'native-base'
import { ScrollView } from 'react-native-virtualized-view'

import { Filter } from '@components/Filter'

import { SeparatorItem } from '@components/SeparatorItem'
import { Promotion } from '@components/Promotion'
import { HomeHeader } from '@components/HomeHeader'
import { Category } from '@components/Category'
import { useAuth } from '@hooks/useAuth'
import { useCity } from '@hooks/useCity'
import { Department } from '@components/Department'
import { TenantDTO } from '@dtos/TenantDTO'
import { useRoute } from '@react-navigation/native'
import { CompaniesByTenant } from '@screens/Company/CompaniesByTenant'
import { Company } from '@components/Company'

export function Home() {
  const { user } = useAuth()
  //const { city } = useCity()

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack bg={'gray.100'} marginTop={2} direction={'row'}>
        {
          user.id ? (
            <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
              {'Bem Vindo,'} {user.name}
            </Text>
          ) : (
            <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
              {'Olá, visitante!'}
            </Text>
          ) /*se não tiver logado mostra a mensagem*/
        }
        <Box>
          <Text left={24} fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            {/*cityId */}
          </Text>
        </Box>
      </HStack>
      <Filter />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*
        <VStack flex={1} bg={'gray.50'} marginTop={2}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Promoções
          </Text>
          <Promotion />
        </VStack>
        */}

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'16'} paddingLeft={4} bg={'gray.100'}>
            Onde comprar
          </Text>
          <Department />
          <SeparatorItem />
          <Company />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
