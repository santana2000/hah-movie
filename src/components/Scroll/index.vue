
<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>

import BScroll from 'better-scroll';
 
export default {
    name:'Scroll',
    data(){
        return{

        }
    },
    mounted(){
        this.$nextTick(() => {
        var getdom = this.$refs.wrapper;
            // console.log(getdom)
            var scroll = new BScroll(getdom, {
                click:true,
                tap:true,
                probeType:1
            });
            this.scroll = scroll;               
        });
    },
    methods:{
        indexToCity:function(y){
            this.scroll.scrollTo(0,y); 
        }
    }
}
</script>

<style>
.wrapper{
    height: 100%;
}
</style>
 