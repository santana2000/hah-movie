<template>
    <div class="searchList">
        <div class="search_input">
            <!-- <i></i> -->
            <input type="text" v-model="mes">
            
        </div>
        <div class="search_result">
            <ul>
            <li v-for="item in searchList" :key="item.id" >
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
       
    </div>
</template>

<script>
export default {
  name: 'Now',
  data(){
      return{
          mes:'',
          searchList:[],
      }
  },
  
  watch:{
      mes(val){
        this.axios.get('/api/searchList?cityId=10&kw='+ val).then((res) => {
        var mymsg = res.data.msg;
        var movies = res.data.data.movies;

        //先决判断还是很重要，如果没有返回的数据list，就会报错找不到list
        if(mymsg && movies){
                this.searchList = res.data.data.movies.list;

        }
                // console.log(a)
      })}
  },

     
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .searchList, .search_input{
    width: 100%;
} */
 
 input{
     display: block;
     width: 80%;
     height: 30px;;
     margin: 10px  auto;
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
