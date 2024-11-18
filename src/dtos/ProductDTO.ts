import { ImageSourcePropType } from 'react-native'
import { CompanyDTO } from './CompanyDTO'
import { SubCategoryDTO } from './SubCategoryDTO'
import { TenantDTO } from './TenantDTO'

export type ProductDTO = {
  id: string
  name: string
  price: number
  quantity: number
  available: boolean
  subcategory_id: SubCategoryDTO
  company_id: CompanyDTO
  tenant_id: TenantDTO
  image: string
  //image: ImageSourcePropType
}
