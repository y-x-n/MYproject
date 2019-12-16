<template>
  <div class="login">
    <div class="loginCss">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <label class="el-icon-user-solid" />
          <el-input placeholder="用户名/邮箱/手机号" v-model="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="pass">
          <label class="el-icon-s-goods" />
          <el-input placeholder="密码" type="password" v-model="ruleForm.pass" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary"  @click="submitForm()" >登 录</el-button>
        </el-form-item>
      </el-form>      
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      ruleForm:{
        
      },
      rules:{

      }
    }
  },
  methods:{
    submitForm(){

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url("./background.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .loginCss{
    position: absolute;
    width: 350px;
    height: 400px;
    padding-bottom: 80px;
    margin-left:28%; 
    overflow: hidden;
  }
  .demo-ruleForm {
    position: relative;
    overflow: hidden;
    width: 100%;
    .el-icon-user-solid {
      position: absolute;
      display: block;
      float: left;
      font-size: 38px;
      z-index: 2;
      margin: 2px 0 0 2px;
      height: 46px;
      line-height: 46px;
      background:#DCDFE6;
    }
    .el-icon-s-goods {
      position: absolute;
      display: block;
      float: left;
      font-size: 38px;
      z-index: 2;
      margin: 2px 0 0 2px;
      height: 46px;
      line-height: 46px;
      background:#DCDFE6;
    }
  }
}
.el-input{
  .el-input__inner{
    padding-left: 45px;
    height: 50px;
    font-size: 20px
  }  
}
.el-button{
  width: 380px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  span{
    margin-right:28px
  }
}


</style>