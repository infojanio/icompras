import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Initial } from '@screens/Initial'
import { Localization } from '@screens/Localization'
import { AppRoutes } from './app.routes'
<<<<<<< HEAD

type StackRoutes = {
  initial: undefined
  localization: undefined
  home: undefined
=======
import { SignUp } from '@screens/SignUp'
import { SuperMarket } from '@screens/SuperMarket'

type StackRoutes = {
  initial: undefined
  signup: undefined
  supermarket: undefined
  localization: undefined
  home: undefined

>>>>>>> a1ad2a14a7fe927b4caf37dbf243c18e310cc7db
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName='initial' screenOptions={{ headerShown: false }}>
      
<<<<<<< HEAD
      <Screen name="initial" component={Initial} />  
=======
      <Screen name="initial" component={Initial} />
      <Screen name="signup" component={SignUp} />  
      <Screen name="supermarket" component={SuperMarket} />  
>>>>>>> a1ad2a14a7fe927b4caf37dbf243c18e310cc7db
      <Screen name="localization" component={Localization} />  
      <Screen name="home" component={AppRoutes} />

      </Navigator>
  )
}