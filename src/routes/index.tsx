import { useContext } from 'react'
//contexto de navegação
import { Box, useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { StackRoutes } from './stack.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { colors } = useTheme()
  const { user } = useAuth()

  console.log('Usuário logado =>', user)

  const theme = DefaultTheme
  theme.colors.background = colors.gray[100]

  return (
    <Box flex={1} bg="green.50">
      {' '}
      {/*garante não aparecer fundo branco na trasição da tela */}
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </Box>
  )
}
