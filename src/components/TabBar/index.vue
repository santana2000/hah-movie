<template>
  <footer id="footer">
    <ul class='tab'>

      <router-link to="/movie" tag="li">
          <div class='item'>电影</div>
      </router-link>
      
      <router-link to="/cinema" tag="li">
          <div class='item'>影院</div>
      </router-link>

      <router-link to="/mine" tag="li">
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
    color: white;
    background-color:rgb(68, 146, 192);
    font-weight: 100;
    border-top: 2px solid rgba(212, 218, 219, 0.884) 
  }
  .tab{
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;

  }
  .item{
    line-height: 60px;
    text-align: center;
  }
  ul{
    list-style: none;
  }
</style>
