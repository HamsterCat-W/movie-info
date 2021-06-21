import request from './index'

const getUser = () => {
  return request.get('/users')
}

const name = 'whh'

export default { getUser, name }
