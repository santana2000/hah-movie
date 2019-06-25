<template>
    <div class="movelist" ref="come">
        <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
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
            <li>11111</li>
            <li>11111</li>

        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'Coming',
  mounted(){
      new BScroll(this.$refs.come,{})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .movelist{
       height: 100%;
   }
    li{
        height: 30px;
        background-color: aquamarine;
        margin: 6px;
    }
</style>
