<template>
    <footer>   
        <ul class='tab'>
            <router-link to="/movie" tag="li">
                <i class="iconfont icondianying "></i>
                <!-- <div class='item'>电影</div> -->
                电影
            </router-link>
            
            <router-link to="/cinema" tag="li">
                <i class="iconfont iconshangquan "></i>
                影院 
            </router-link>

            <router-link to="/mine" tag="li">
                <i class="iconfont iconicon_zhanghao "></i>
                我的 
            </router-link>
        </ul> 
    </footer>
</template>

<script>
export default {
  name: 'TabBar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
footer{
  height: 2.5rem;
  color: rgb(76, 78, 80);
  background-color:white ;
  font-weight: 100;
  border-top: 1px solid rgba(212, 218, 219, 0.884) ;
  /* display: fixed;
  bottom: 0;
  left: 0; */
  z-index: 9999;
}
.tab{
  height: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;

}
li{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #515151;
  font-size: 0.6rem;

}
li.router-link-active{
  color: rgb(229,72,71);
  
}
/* .item.router-link-active{
  color: rgb(229,72,71);
} */
.iconfont{
  font-size: 1.1rem;
}
   
</style>
