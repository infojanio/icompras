import axios from 'axios'
import { AppError } from '../utils/AppError'

const api = axios.create({
  //'http://10.0.0.20:3333', //monte alegre
  baseURL: 'http://192.168.1.70:3333',
  timeout: 6000, // quantidade de tempo em milissegundos
})

//intercepta as requisições p/ o banckend
api.interceptors.response.use(
  (response) => response,
  (error) => {
    //se tiver mensagem de erro ou dados
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(error)
    }
  },
)

export { api }

/*intercepta as requisições p/ o banckend e mostra os dados

const api = axios.create({
  baseURL: 'http://192.168.1.10:3333',
  timeout: 6000, // quantidade de tempo em milissegundos
}) as APIIstanceProps

//intercepta as requisições p/ o banckend
api.registerIntercepectTokenManager = signOut => {
const interceptTokenManager = api.interceptors.response.use(
  (response) => response,
  async (requestError) => {
    //se tiver mensagem de erro ou dados
    if (requestError.response.data?message === 'token.expired' || requestError.response && error.response.data?message === ) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(error)
    }
  },
) 

*/
