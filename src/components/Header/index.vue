<template>
    <header id="header">
        <h3>{{title}}</h3>
    </header> 
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
  #header{
    text-align: center;
    color: white;
    background-color:rgb(68, 146, 192);
    position: relative;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  h3{
    font-weight: 300;
  }
  /* #icon{
    position: absolute;
  } */
</style>
