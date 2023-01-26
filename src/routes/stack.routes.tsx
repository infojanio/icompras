import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Initial } from '@screens/Initial'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

import { BottomRoutes } from './bottom.routes'
import { Localization } from '@screens/Localization'

type StackRoutes = {
  initial: undefined
  hometab: undefined
  signin: undefined
  signup: undefined
  localization: undefined

}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>

const { Navigator, Screen } = createNativeStackNavigator()


export function StackRoutes() {
  return (
    <Navigator initialRouteName='initial' screenOptions={{ headerShown: false }}>
      
      <Screen name="initial" component={Initial} />  
  
      <Screen name="localization" component={Localization} />  

      </Navigator>
  )
}