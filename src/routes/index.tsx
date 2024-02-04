import { useContext } from 'react'
//contexto de navegação
import { Box, useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { BottomRoutes } from './bottom.routes'
import { Loading } from '@components/Loading'
import { StackRoutes } from './stack.routes'

export function Routes() {
  const { colors } = useTheme()
  const { user, isLoadingUserStorageData } = useAuth()

  // console.log('Usuário logado =>', user)

  const theme = DefaultTheme
  theme.colors.background = colors.gray[100]

  //verifica se os dados do user estão sendo carregados
  if (isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1} bg="green.50">
      {' '}
      {/*garante não aparecer fundo branco na trasição da tela */}
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <StackRoutes />}
      </NavigationContainer>
    </Box>
  )
}
