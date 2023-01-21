import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Localization } from '../screens/Localization'

const { Navigator, Screen } = createNativeStackNavigator()




export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="localization" component={Localization} />    
      </Navigator>
  )
}