<template> 
    <div class="container">
        <Header title="看电影"/>
        <div class="content">
            <div class="menu">
                <router-link to="/movie/city"  tag="div" class="city">
                    徐州
                   
                </router-link>
                <router-link to="/movie/now" tag="div" class="nowplay">
                    正在热映
                </router-link>
                <router-link to="/movie/coming" tag="div" class="coming">
                    即将上映
                </router-link>
                <router-link to="/movie/search" tag="div" class="search">
                    搜索
                </router-link>
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>

             
            
        </div>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';

    export default {
        name: 'Movie',
        components:{
            Header,
            TabBar
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
    .router-link-active{
        color:rgb(64, 158, 255);
        border-bottom: 2.5px solid rgb(64, 158, 255);
      
    }
</style>

