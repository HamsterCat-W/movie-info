import request from './index'

const getUser = async () => {
  const response = await request.get('/user0')
  return response.data
}

export default getUser
