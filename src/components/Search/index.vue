<template>
    <div class="searchList">
        <div class="search_wrapper">
            <div class="search_input">
                <i class="iconfont iconsearch"></i>
                <input type="text" v-model="mes">
            </div>
         
            <div class="cancel"> 取消</div>
            
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
var search;
export default {
  name: 'Now',
  data(){
    return{
      mes:'',
      searchList:[],
    }
  },
  // keyup事件
  watch:{
    //mes相当于函数，在watch中可以和v-model结合
    mes(val){
        var that = this

        //函数防抖
        if(search){
            clearTimeout(search);
        }
        search = setTimeout(function(){
            that.axios.get('/api/searchList?cityId=10&kw='+ val).then((res) => {
            var mymsg = res.data.msg;
            var movies = res.data.data.movies;

            //先决判断还是很重要，如果没有返回的数据list，就会报错找不到list
            if(mymsg && movies){
                that.searchList = res.data.data.movies.list;
            }})
            console.log(that.searchList)
            // console.log('x')
        },1000)
  
    }
  },    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_wrapper{
    display: flex;
    border-bottom: 1px rgba(192, 192, 192, 0.89) solid;
    background-color: rgba(245,245,245)
    
}
 
.search_input{
     border: 1px rgba(192, 192, 192, 0.897) solid;
     border-radius: 0.3rem;
     vertical-align: center;
     background-color: white;
     display: flex;
     margin : 0.3rem 0.5rem 0.3rem 1rem;
     justify-content: center;
     width: 14rem;
     /* flex:1; */
}
input :focus{
     border: none;
     outline: none;
}
.cancel{
     width: 3rem;
     align-self: center;
     font-size: 0.85rem;
     color: rgb(229,72,71);
     
}
.iconsearch{
     align-self: center;
     font-size: 1.2rem;
     color: rgb(117, 117, 117)
}
input{
     display: block;
     width: 80%;
     height: 30px;;
     margin: 0 0;
     border: none
}
ul{
    padding: 0.3rem;
    overflow: hidden;
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
