<template>
  <div class="login-box">
    <el-form
      ref="userInfo"
      :model="userInfo"
      label-width="auto"
      status-icon
      :rules="rules"
      class="login-form"
    >
      <h2 class="login-title">报账系统</h2>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="userInfo.email"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userInfo.password"
          placeholder="请输入密码"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-button type="primary" @click="login">登录</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="register">注册</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const checkEmail = (rule, value, callback) => {
      // 验证邮箱
      const regEmail = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
      if (this.userInfo.email !== '' && !regEmail.test(this.userInfo.email)) {
        callback(new Error('请输入有效的邮箱'))
      }
    }
    return {
      userInfo: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    login () {
      console.log('login')
    },
    register () {
      console.log('register')
    }
  }
}
</script>

<style>
button.el-button.el-button--primary {
  background-color: #002780c2;
}

.login-box {
  width: 100%;
  height: 100%;
  position: fixed;
  /* background: #ffff; */
  /* background-size: 100% 100%; */
  background: radial-gradient(300% 100% at bottom center, #75517d, #1b2947);
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%
  );
}

.login-form {
  width: 350px;
  margin: 220px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

.login-title {
  color: #303133;
  text-align: center;
}
</style>
