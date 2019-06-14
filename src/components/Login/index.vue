<template>
  <div class="login">
    <input type="text" placeholder="请输入账号">
    <input type="text" placeholder="请输入密码">
    <button>登录</button>
    <div class="two">
        <div class="left">立即注册</div>
        <div class="right">找回密码</div>
    </div>
    

  </div>

</template>

<script>
export default {
  name: 'Login',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
      padding: 10px 4px;
      width: 80%; 
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;

  }
  input{
      margin:5px auto;
      height: 30px; 
      width: 80%
  }
  button{
      /* width: 80%; */
      padding: 2px 20px;
      margin: 5px auto;
      height: 30px; 

  }
  .two{
      font-size: 15px;
      display: flex;
      /* flex-direction: row; */
      justify-content: space-between;
  }
  
</style>
