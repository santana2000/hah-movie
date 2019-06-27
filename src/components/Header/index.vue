<template>
    <div class="top">
      
      <header>
        <slot></slot>
        <h3>{{title}}</h3>
      </header> 
    </div>
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
  .top{
    display: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 2.5rem;
  }
  header{
    text-align: center;
    color: white;
    background-color:rgb(229,72,71);

    position: relative;
    height: 2.5rem;

    /* display: flex;
    flex-direction: column;
    justify-content: center; */
     
    line-height: 2.5rem;
    vertical-align: center;
    width: 100%;
    
  }
 
  h3{
    font-weight: 300;
    display: inline-block;
    /* margin-left: -6rem; */

  }
  /* #icon{
    position: absolute;
  } */
</style>
