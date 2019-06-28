<template>
    <!-- <button @click="clickRoute">查看当前路由</button> -->
    <div class="city" ref="city">
        <Scroll ref="wrapper">
            <!-- 所有城市 -->
            <div class="all_city" ref="all_city">
                <div>
                    <div class="hot_list">
                        <h4  >热门城市</h4>
                        <ul class="hotname">
                          <li class="item1" 
                              v-for="item in hotList" 
                              :key='item.id'
                              @click='changeCity(item.nm,item.id)'> {{item.nm}} </li>
                        </ul>
                    </div>
                
                    <div class="city_list" ref="city_li">
                        <div class="city_area" ref="city_area" v-for="item in cityList" :key="item.index">
                          <h4  >{{item.index}}</h4>
                          <ul class="cityname">
                            <li class="item2" 
                                v-for="itemx in item.list" 
                                :key='itemx.id'
                                @click='changeCity(itemx.nm,itemx.id)'> {{itemx.nm}} </li>
                          </ul>
                        </div>
                    </div>               
                </div>                
            </div>
        </Scroll>

        <!-- 右边字母索引 -->
        <div class="city_index">
            <div v-for="(item,index) in cityList" :key="item.index" @touchstart='indexToName(index)'>
              {{item.index}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'City',
  data(){
    return {
      cityList:[],
      hotList:[],
    }
  },
  mounted(){
    var hotList = JSON.parse(window.localStorage.getItem('hotList')) ;
    var cityList = JSON.parse(window.localStorage.getItem('cityList'));

    if(hotList && cityList){
      this.cityList = cityList;
      this.hotList = hotList;
    }else{
      this.axios.get('/api/cityList').then(
        (res) => {
          var cities = res.data.data.cities;

          //数据分组的形式： [ ******************** 注意list也是一个数组形式 ******************
          //                 {index: A , list: [{nm: Atlanta, id:111}, {nm: Alisa, id:115}] }, 
          //                 {index: B , list: [{nm: Boston,  id:121}] }
          //               ]

          var {cityList,hotList} = this.formatCity(cities);
          this.cityList = cityList;
          this.hotList = hotList;
          window.localStorage.setItem('hotList',JSON.stringify(hotList) )
          window.localStorage.setItem('cityList',JSON.stringify(cityList) )
        })
    } 
  },
  methods: {
    formatCity:function(cities){
      var cityList = [];
      var hotList = [];

      for(var i=0; i<cities.length; i++){
        if(cities[i].isHot === 1){
          hotList.push(cities[i]);
        }
      }

      for(var i=0; i<cities.length;i++){
        var firstLetter = cities[i].py.substring(0,1).toUpperCase();

        if(compare(firstLetter)){ //首字母在列表内没出现
          cityList.push({ index: firstLetter, list: [{ nm: cities[i].nm, id: cities[i].id }] });
        }
        else{
          for(var j=0;j<cityList.length;j++){
            if(cityList[j].index === firstLetter){
                cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id })
            }
          }
        }
      }

      function compare(firstLetter){
        for(var i=0;i<cityList.length;i++){
          if(cityList[i].index === firstLetter){
            return false;
          }
        }
        //注意：比较一轮 ，返回一次
        return true;  //首字母在列表内没出现

      }

      cityList.sort( function (n1,n2) {
        if(n1.index > n2.index){
          return 1
        }
        else if(n1.index < n2.index){
          return -1
        }
        else{
          return 0
        }
      });

      return { cityList, hotList}
    },
    //点击索引跳转至对应位置
    indexToName:function(index){
      var h4 = this.$refs.city_li.getElementsByTagName('h4');
      // console.log(h4[index].parentNode.offsetTop);
      // console.log(this.$refs.all_city.scrollTop);
      // *******  scrollTop获取的值是滚动条产生的那个节点  *********************

      // 1.原生实现
      // this.$refs.all_city.scrollTop = h4[index].parentNode.offsetTop;

      // 2.better-scroll实现
      this.$refs.wrapper.indexToCity(-h4[index].parentNode.offsetTop);
      //注意 如果标签是是组件，refs获取到的就是这个组件
     
    },
    //点击更改当前城市
    changeCity:function(nm,id){
      this.$store.commit('CHANGE_CITY',{nm:nm,id:id});   //这里路径怎么写？？？
      this.$router.push('/movie/now');

      window.localStorage.setItem('citynm',nm);
      window.localStorage.setItem('cityid',id);
    },
    //测试route用
    clickRoute: function(){
        console.log(this.$route.path)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .city{
    /* padding: 3px; */
    background-color: rgba(235, 235, 235, 0.486);
    z-index: 9999;
    height: 100%;

  }
  h4{
    padding: 1px 0 1px 2rem;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-right: 1.5rem;
    font-weight: 500;
    width: 110%;
    background-color: white;
  }
  .hot_list{
    /* border-bottom: 1px silver solid; */
    margin-bottom: 0.4rem;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
  .hot{
    margin-left: 20px;
    margin-bottom: 3px;
  }
  .hotname{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin:0.8rem  0  0.2rem 2.5rem;

  }
  .item1{
    margin-bottom: 0.5rem;
    width: 24%;
    padding: 2px 0;
    border: 0.5px solid silver;
    background-color: white;
    text-align: center;
    margin-right: 0.8rem;
  }

  .item2{
    margin-left: 20px;
    margin-bottom: 5px;
  }
  .cityname{
    padding-top: 0.5rem;
    font-size: 0.9rem;
    margin-left: 1rem;
  }
  .city_area{
    /* border-bottom: 1px silver solid; */
    margin-right: 25px;
    margin-bottom: 5px;
    
  }
  .city_index{
    text-align: center;
    position: fixed;
    width: 1rem;
    height: 100%;
    top:7.5rem;
    right: 0.4rem;
    display: flex;
    flex-direction: column;
    /* background-color: white; */
    font-size: 0.7rem;
  }

</style>
