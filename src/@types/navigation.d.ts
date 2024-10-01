export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      cart: undefined
      products: undefined
      productDetails: { productId: string }
      productBySubCategory: { categoryId: string }
      tenantsByCity: { cityId: string }
      companiesByTenant: { tenantId: string }
      home: { cityId: string }
      company: { tenantId: string }
      department: { cityId: string } // posso passar o nome também
    }
  }
}
