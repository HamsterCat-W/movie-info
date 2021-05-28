import request from './index'

const getUser = () => {
  return request.get('/users')
}

export default getUser
