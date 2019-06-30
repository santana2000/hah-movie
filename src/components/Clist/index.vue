<template> 
    <div class="cinemalist">
       <div>万达</div>
       <div>万达</div>
       <div>万达</div>
       <div>万达</div>
   
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>
       <div>恒大</div>

    </div>
</template>

<script>

    export default {
        name: 'Clist',
        components:{
          
        }
    }
</script>

<style scoped>
 
   .cinemalist{
    /* 高度100%作为better-scroll的外层父容器 */
    height: 100%;  
    /* z-index:  -1; */
    /* flex: 1; */
    overflow: auto; /**********menu不随列表滑动的关键点**************/
}
</style>

