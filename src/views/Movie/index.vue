<template> 
    <div class="container">
        <Header title="看电影"/>
        <div class="content">
            <div class="menu">
                <router-link to="/movie/city"  tag="div" class="city item">
                    {{ $store.state.city.nm}}
                   
                </router-link>
                <router-link to="/movie/now" tag="div" class="nowplay item">
                    正在热映
                </router-link>
                <router-link to="/movie/coming" tag="div" class="coming item">
                    即将上映
                </router-link>
                <router-link to="/movie/search" tag="div" class="search item">
                    <i class="iconfont iconsearch"></i>
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
        height: 2.5rem;
        background-color: white;
        border-bottom: 1px silver solid;
        line-height: 2.5rem;
    }
    .item{
        font-size: 0.9rem;
        color: rgb(92, 92, 92);
        
    }
    
    .router-link-active{
        color:rgb(229,72,71);
        border-bottom: 2.5px solid rgb(229,72,71);
      
    }
</style>

