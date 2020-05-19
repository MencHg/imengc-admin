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
      </v-card-text>
      <div class="container-btn">
        <v-btn color="primary" @click="submitClick">登录</v-btn>
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
    tips: {
      email: "",
      password: ""
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
      console.log(this.matchEmail(),this.matchPwd());
    },
    upload(){
      this.axios.post('/blog/user/login',{email:this.email,password:this.password})
        .then(result=>{
          if(result.data.token){
            //document.cookie = "token="+result.data.token +";expires="+new Date(new Date().getFullYear,new Date().getMonth,new Date().getDate + 7).toDateString()
            localStorage.setItem('token',result.data.token)
            this.$store.commit("setToken", result.data.token);
            this.$router.push('/')
          }else{
            this.tips.email = result.data.message
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