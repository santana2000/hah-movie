<template>
    <header>
        <h2>{{title}}</h2>
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
   
  *{
    padding: 0;
    background-color:green;
  }
</style>
