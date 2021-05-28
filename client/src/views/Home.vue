<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary" @click="test">button</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import getUser from '../sevices/userService'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {}
  },

  methods: {
    test () {
      getUser()
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
