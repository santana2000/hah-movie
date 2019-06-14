<template>
  <div>
    <div>
      北京
    </div>
    <div>
      上海
    </div>
  </div>

</template>

<script>
export default {
  name: 'City',
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
    font-weight: 400;
  }
  /* #icon{
    position: absolute;
  } */
</style>
