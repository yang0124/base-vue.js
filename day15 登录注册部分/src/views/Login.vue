<template>
  <el-row align="middle" class="login-cont">
      <el-col :span="6" :offset="9">
          <el-card class="box-card" v-if="isShow">
            <div slot="header" class="clearfix">
                <span>登录</span>
                <el-button @click="isShow=false" style="float: right; padding: 3px 0" type="text">
                    去注册
                </el-button>
            </div>
            <el-input placeholder="请输入用户名" v-model="username">
                <template slot="prepend">
                    <i class="el-icon-user-solid"></i>
                </template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="pwd">
                <template slot="prepend">
                    <i class="el-icon-s-cooperation"></i>
                </template>
            </el-input>

            <el-button @click="handleLogin" type="primary" size="small" class="login-btn">
                登录
            </el-button>
          </el-card>

          <el-card class="box-card" v-if="!isShow">
            <div slot="header" class="clearfix">
                <span>用户注册</span>
                <el-button @click="isShow=true" style="float: right; padding: 3px 0" type="text">
                    去登录
                </el-button>
            </div>
            <el-input placeholder="请输入用户名" v-model="username">
                <template slot="prepend">
                    <i class="el-icon-user-solid"></i>
                </template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="pwd">
                <template slot="prepend">
                    <i class="el-icon-s-cooperation"></i>
                </template>
            </el-input>

            <el-button @click="handleReg" type="primary" size="small" class="login-btn">
                注册
            </el-button>
          </el-card>

      </el-col>
  </el-row>
</template>

<script>
export default {
    data() {
        return {
            isShow:true,
            username:'',
            pwd:''
        }
    },
    methods: {
        handleLogin(){
            let {username,pwd} = this.$data;
            this.$store.dispatch('loginAct',{
                username,
                pwd
            })
        },
        handleReg(){
            let {username,pwd} = this.$data;
            if(username==''||pwd==''){
                this.$message({
                    message:'请输入用户信息',
                    type:'warning',
                    center:true
                });
                return false
            }
            this.$axios.post('/users/reg',{
                username,
                pwd
            }).then((res)=>{
                console.log(res)
            })
        }
    },
}
</script>

<style>
.login-cont{
    margin-top: 200px
}
.el-input{
    margin-bottom: 10px
}
.login-btn{
    width: 100%
}
</style>