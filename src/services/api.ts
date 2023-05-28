import axios from 'axios'
import { AppError } from '../utils/AppError'

const api = axios.create({
  baseURL: 'http://192.168.1.15:3333',
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
api.interceptors.request.use(
  (config) => {
    console.log('DADOS ENVIADOS =>', config.data)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
*/
