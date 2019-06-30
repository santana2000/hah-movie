<template>
    <!-- <div class="top"> -->
      <header>
        <slot></slot>
        <h3>{{title}}</h3>
      </header> 
    <!-- </div> -->
</template>

<script>
export default {
  name: 'Header',
  props:{
      title:{
        type: String,
        default:'Hah '
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .top{
    display: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 2.5rem;
  } */
  header{
    color: white;
    background-color:rgb(229,72,71);
    /* flex容器里的子元素是可以fixed的 */
    position: relative;
    /* top: 0;
    left: 0; */
    width: 100%;
    height: 2.5rem;  
    /* vertical-align: center; */
    z-index: 9999;
  }
 
  h3{
    font-weight: 300;
    line-height: 2.5rem;
    text-align: center;
    /* display: inline-block; */
    /* margin-left: -6rem; */
  }

</style>
