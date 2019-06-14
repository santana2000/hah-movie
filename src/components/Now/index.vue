<template>
    <div class="movelist">
        <ul>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>

        </ul>
    </div>
</template>

<script>
export default {
  name: 'Now',
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
    ul{
        list-style: none;
    }
    li{
        height: 30px;
        background-color: aquamarine;
        margin: 6px;
    }
</style>
