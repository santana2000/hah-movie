<template>
  <div class='tab'>

    <router-link to="/movie">
        <div class='item'>电影</div>

    </router-link>
    
    <router-link to="/cinema">
        <div class='item'>影院</div>
    </router-link>

    <router-link to="/mine">
        <div class='item'>我的</div>
    </router-link>

   
  </div>
</template>

<script>
export default {
  name: 'TabBar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;
    background-color:green;
  }
  .tab{
    display:flex;
    flex-direction: row;
    justify-content: space-around;

  }
</style>
