<template>
    <div class="container">
        <Header title="去影院"/>
        <div class="content">
            <div class="menu">
                <div  tag="div" class="city">
                    全城
                </div>
                <div  tag="div" class="nowplay">
                    品牌
                </div>
                <div  tag="div" class="coming">
                    特色
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
        height: 50px;
        /* background-color: rgb(109, 161, 190) */
        border-bottom: 1px silver solid;
        line-height: 50px;
    }
    .div-active{
        color:rgb(64, 158, 255);
        border-bottom: 2.5px solid rgb(64, 158, 255);
      
    }
</style>

