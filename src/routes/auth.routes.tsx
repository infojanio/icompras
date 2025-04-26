import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Localization } from '@screens/Localization'
import { AppRoutes } from './app.routes'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

import { Home } from '@screens/Home'
import { ProductList } from '@screens/Product/ProductList'
import { ProductDetails } from '@screens/Product/ProductDetails'

import { ProductBySubCategory } from '@screens/Product/ProductBySubCategory'

import { Department } from '@components/Department'
import { CompanyByDepartment } from '@components/CompanyByDepartment'

type AuthRoutes = {
  home: { userId: string }
  signin: undefined
  signup: undefined
  localization: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />

      <Screen name="localization" component={Localization} />
      <Screen name="home" component={Home} />
      <Screen name="localization" component={Localization} />
      <Screen name="companiesByDepartment" component={CompanyByDepartment} />
    </Navigator>
  )
}

/*
      <Screen
        name="department"
        component={Department}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
        />

      <Screen
        name="tenantsByCity"
        component={TenantsByCity}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="productList"
        component={ProductList}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="productDetails"
        component={ProductDetails}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="categoryDetails"
        component={CategoryDetails}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="companiesByTenant"
        component={CompaniesByTenant}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="productBySubCategory"
        component={ProductBySubCategory}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

*/
