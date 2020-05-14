<template>
  <section class="app-login page-fixed">
    <div class="user-container">
      <v-card-title>
        <div class="container-logo">
          <img src="@/assets/login_1.png" alt />
        </div>
      </v-card-title>
      <v-card-text>
        <BasicInputGroup
          :tips="tips.email"
          v-model="email"
          placeholder="邮箱"
          beforeIcon="icon-user4"
        />
        <BasicInputGroup
          :tips="tips.password"
          v-model="password"
          placeholder="密码"
          beforeIcon="icon-Password"
          type="password"
        />
        <BasicInputGroup
          :tips="tips.verifyCode"
          v-model="verifyCode"
          placeholder="授权码"
          beforeIcon="icon-user4"
        />
      </v-card-text>
      <div class="container-btn">
        <v-btn color="primary" @click="submitClick">注册</v-btn>
      </div>
    </div>
  </section>
</template>
<script>
import BasicInputGroup from "../basic/BasicInputGroup";
export default {
  name: "app-login",
  components: {
    BasicInputGroup
  },
  data: () => ({
    email: "",
    password: "",
    verifyCode:"",
    tips: {
      email: "",
      password: "",
      verifyCode:"",
    }
  }),
  watch: {
    email() {
      this.matchEmail()
    },
    password() {
      this.matchPwd()
    }
  },
  methods: {
    submitClick(){
      if(this.matchEmail() && this.matchPwd()){
        this.upload()
      }
    },
    upload(){
      this.axios.post('/blog/user/register',{email:this.email,password:this.password,verify:this.verifyCode})
        .then(result=>{
          if(result.data.data === "注册成功!~"){
            this.$router.push('/login')
          }else{
             console.log(result);
             this.tips.email = "该邮箱已被抢先注册!~"
          }
        })
        .catch(err=>{
          console.log(err);
          this.tips.email = "网络出错!~"
        })
    },
    matchEmail(){
      let regEmail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
      if(!regEmail.test(this.email)){
        this.tips.email = "邮箱格式不正确"
        return this.email
      }
      if(this.email === ""){
        this.tips.email = "邮箱不能为空"
        return this.email
      }else{
        this.tips.email = ""
        return this.email
      }
    },
    matchPwd(){
      if(this.password === ""){
        this.tips.password = "密码不能为空"
      }else if(this.password.length < 8){
        this.tips.password = "密码长度不符合规范"
      }else{
        this.tips.password = ""
      }
      return this.password
    }
  }
};
</script>
<style lang="less" scoped>
  .container-logo {
    margin: 0 auto;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    img {
      margin-right: 15px;
      height: 100%;
    }
  }
  .container-btn {
    margin: 0 auto 45px;
    width: 90%;
    text-align: center;
    button {
      width: 90%;
    }
  }
</style>