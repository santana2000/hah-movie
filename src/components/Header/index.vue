<template>
    <div class="top">
      <header id="header">
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
  #header{
    text-align: center;
    color: white;
    /* background-color:rgb(68, 146, 192); */
    background-color:rgb(229,72,71);

    position: relative;
    height: 2.5rem;
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
