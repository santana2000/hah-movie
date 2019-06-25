<template> 
    <div id="container">
        <Header title="看电影"/>
        <div id="content">
            <div class="wrap">
                <ul class="menu">

                    <router-link to="/movie/city"  tag="li" class="city item">
                        {{ $store.state.city.nm}}  
                    <i class="iconfont iconcaret-down"></i>
                    </router-link>

                    <router-link to="/movie/now" tag="li" class="nowplay item">
                        正在热映
                    </router-link>

                    <router-link to="/movie/coming" tag="li" class="coming item">
                        即将上映
                    </router-link>

                    <router-link to="/movie/search" tag="li" class="search item">
                        <i class="iconfont iconsearch"></i>
                    </router-link>
                    
                </ul>
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
        background-color: rgb(255, 255, 255);
        border-bottom: 1px silver solid;
        line-height: 2.5rem;
        opacity: 1;
        z-index: 5;
        
    }
    .wrap{
        width: 100%;
        position: fixed;
        left: 0;
        top: 2.5rem;   
    }
    .item{
        font-size: 0.9rem;
        color: rgb(92, 92, 92);
        
    }
    
    .router-link-active{
        color:rgb(229,72,71);
        border-bottom: 2.5px solid rgb(229,72,71);
      
    }
    .iconcaret-down{
        font-size: 0.2rem;
        color: #7e7e7e;
        margin-left: -0.15rem;
    }
    .iconsearch{
        font-size: 1rem;

    }
</style>

