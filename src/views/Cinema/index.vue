<template>
    <div id="movie_page">
        <Header title="查影院"/>
        <div id="content">
            <div class="wrap">
                <div class="menu">
                <div  tag="div" class="city item">
                    全城
                </div>
                <div  tag="div" class="nowplay item">
                    品牌
                </div>
                <div  tag="div" class="coming item">
                    特色
                </div>
               
            </div>
            </div>
            <Clist />  
        </div>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    import Clist from '@/components/Clist';
    export default {
        name: 'Cinema',
        components:{
            Header,
            TabBar,
            Clist
        }
    }
</script>
<style scoped>
.menu{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 2.5rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px silver solid;
    line-height: 2.5rem;
    /* opacity: 1; */
    z-index: 9999;
    
}

.item{
    font-size: 0.9rem;
    color: rgb(92, 92, 92);
    
}
.div-active{
    color:rgb(64, 158, 255);
    border-bottom: 2.5px solid rgb(64, 158, 255);
    
}
</style>

