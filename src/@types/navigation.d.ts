export declare global {
  namespace ReactNavigation {
    interface RootParamList {
<<<<<<< HEAD
      cart: undefined
      products: undefined
      productDetails: { productId: string }
      productBySubCategory: { categoryId: string }
      tenantsByCity: { cityId: string }
      companiesByTenant: { tenantId: string }
      home: { cityId: string }
      company: { tenantId: string }
      department: { cityId: string } // posso passar o nome também
=======
      home: { userId: string }
      productBySubCategory: { userId: string; categoryId: string; productId }
>>>>>>> loja
    }
  }
}
