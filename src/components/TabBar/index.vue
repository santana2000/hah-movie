<template>
  <footer id="footer">
    <ul class='tab'>

      <router-link to="/movie" tag="li">
          <i class="iconfont icondianying "></i>
          <div class='item'>电影</div>
      </router-link>
      
      <router-link to="/cinema" tag="li">
          <i class="iconfont iconshangquan "></i>
          <div class='item'>影院</div>
      </router-link>

      <router-link to="/mine" tag="li">
          <i class="iconfont iconicon_zhanghao "></i>
          <div class='item'>我的</div>
      </router-link>

    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TabBar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    height: 60px;
    color: rgb(76, 78, 80);
    background-color:white ;
  
    font-weight: 100;
    border-top: 2px solid rgba(212, 218, 219, 0.884) 
  }
  .tab{
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;

  }
  li{
    flex: 1;
  }
  .item{
    line-height: 60px;
    text-align: center;
    color: #515151;
  }
  li.router-link-active{
    background-color: rgb(229,72,71);
  }
  ul{
    list-style: none;
  }
   
</style>
