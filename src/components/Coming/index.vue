<template>
    <!-- <div class="movielist" ref="come"> -->
        <Scroll>
            <ul >
                <li v-for="item in movieList" :key="item.id" >
                    <img class="post" :src="item.img | getSrc('128.180')"  alt="sss">

                    <div class="main">
                        <div class="name" v-if="item.nm!==undefined &&  item.nm.length < 6"> {{item.nm}} </div>
                        <div class="name" v-else @click="toPage(item.id)" > {{item.nm | shortStar('...')}} </div>

                        <img class="imax" v-if="item.version" src="@/assets/imax.png" alt="">

                        <div class="score" v-if="item.sc === 0"> 评分：暂无</div>
                        <div class="score" v-else> 评分： <span>{{item.sc}}</span> </div>

                        <div class="stars" v-if="item.star!==undefined && item.star.length!==0">主演：{{(item.star.length > 6) ? item.star.substring(0,6)+'...'  : item.star }}</div>
                        <div class="num">{{item.showInfo}}</div>
                    </div>
                
                    <button class="pre" v-if="item.sc === 0">预售</button>
                    <button v-else>购票</button>
                </li>         
            </ul>
        </Scroll>
    <!-- </div> -->
</template>

<script>
 

export default {
  name: 'Coming',
  data(){
    return{
        movieList:[],
    }
  },
  mounted(){
    var cityId = this.$store.state.city.id;
    this.axios.get('/api/movieComingList?cityId=' + cityId).then((res) => {
        this.movieList = res.data.data.comingList;
        console.log(this.movieList[2].star.substring(0,6));

    // 先加载数据之后才能使用better-scroll,所以需要nextTick
    //   this.$nextTick(() => {       
    //       var getdom = this.$refs.allmovie;
    //       new BScroll(getdom, {click:true});
    //   });
        
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.movielist{
    height: 100%;
    z-index: -1;
    overflow: auto;
   
}
ul{
    padding: 0.3rem;
}
li{
    border-bottom: 0.8px solid rgba(211, 210, 210, 0.952);
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 0.4rem;

}
.post{
    /* padding: 10px; */
    height: 5.5rem;
    margin-right: 0.5rem;
    margin-left: 0.3rem;
}
.main{
    flex: 1;
    position: relative;
}
.name{
    font-size: 0.9rem;
    font-weight: 700;
    font-family: '微软雅黑';
    margin: 0 0 0.6rem 0;

}
.score, .stars, .num{
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
}
span{
    color: chocolate;
    font-weight: 600;

}
.imax{
    position: absolute;
    right: -0.6rem;
    top:0.25rem;
    width: 2.7rem;
}
button{
    color: white;
    background-color: rgb(229,72,71);
    align-self: center;
    width: 2.6rem;
    height: 1.5rem;
    padding: 0 0.25rem;
    border-radius: 0.25rem;
    border: none;
    font-size: 0.7rem;

}
.pre{
    background-color: rgba(24, 169, 226, 0.986);
}  
</style>
