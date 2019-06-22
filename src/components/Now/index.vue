<template>
    <div class="movelist">
        <ul>
            <li v-for="item in movieList" :key="item.id" >
                <img class="post" :src="item.img | getSrc('128.180')" alt="sss">

                <div class="main">
                    <div class="name"> {{item.nm | shortStar('...')}} </div>
                    <img class="imax" v-if="item.version" src="@/assets/imax.png" alt="">
                    <div class="score" v-if="item.sc === 0"> 评分：暂无</div>
                    <div class="score" v-else> 评分： <span>{{item.sc}}</span> </div>
                    <div class="stars">主演：{{item.star | shortStar('...')}}</div>
                    <div class="num">{{item.showInfo}}</div>

                </div>
              
                <button class="pre" v-if="item.sc === 0">预售</button>
                <button v-else>购票</button>
            </li>
             

        </ul>
    </div>
</template>

<script>
export default {
  name: 'Now',
  data(){
      return{
          movieList:[],
      }
  },
  mounted(){
      this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
          this.movieList = res.data.data.movieList;
          console.log(this.moveList)
      })
  }

     
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    padding: 5px;
}
li{
    border-bottom: 2px solid silver;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px;

}
.post{
    /* padding: 10px; */
    height: 120px;
    margin-right: 10px;
}
.main{
    flex: 1;
    position: relative;
}
.name{
    font-size: 18px;
    font-weight: 600;
    font-family: '微软雅黑';
    margin: 0 0 15px 0;

}
.score, .stars, .num{
    font-size: 15px;
    margin-bottom: 5px;
}
span{
    color: chocolate;
    font-weight: 600;

}
.imax{
    position: absolute;
    right: -20px;
    top:5px;
    width: 60px;
}
button{
    color: white;
    background-color: rgba(98, 167, 212, 0.89);
    align-self: center;
    width: 60px;
    height: 35px;
    padding: 0 5px;
    border-radius: 5px;
    border: none;
    font-size: 16px;

}
.pre{
    background-color: rgba(165, 42, 42, 0.795);
}
</style>
