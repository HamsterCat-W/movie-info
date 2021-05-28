// 服务接口
import axios from 'axios'
const token =
  'Bearer' +
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QwQG1haWwuY29tIiwiaWF0IjoxNjIyMTk5Njc3LCJleHAiOjE2MjIyODYwNzd9.257nlEnKmKIySMZx1-CeXtDZAJXB_b8gfzOI6ByuPSo'
const baseUrl = 'http://localhost:3000'
// axios.defaults.baseURL = process.env.VUE_APP_MOCK_SERVER

const request = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    Authorization: token
  }
})

export default request
