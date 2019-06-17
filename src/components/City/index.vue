<template>
  
    <!-- <button @click="clickRoute">查看当前路由</button> -->
    <div class="city">

      <div class="hot_list">
        <h4  >热门城市</h4>
        <ul class="hotname">
          <li class="item1" v-for="item in hotList" :key='item.id'> {{item.nm}} </li>
        </ul>
      </div>

      <div class="city_list" ref="city_li">
        <div class="city_area" v-for="item in cityList" :key="item.index">
          <h4  >{{item.index}}</h4>
          <ul class="cityname">
            <li class="item2" v-for="itemx in item.list" :key='itemx.id'> {{itemx.nm}} </li>
          </ul>
        </div>
      </div>

      <div class="city_index">
        <div v-for="(item,index) in cityList" :key="item.index" @touchstart='indexToName(index)'>
          {{item.index}}
        </div>
      </div>
    

    </div>
  

</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
 
export default {
  name: 'City',
  data(){
    return {
      cityList:[],
      hotList:[],
    }
  },
  mounted(){
    this.axios.get('/api/cityList').then(
      (res) => {
        var cities = res.data.data.cities;
        console.log(cities );

        //数据分组的形式： [ 
        //                 {index: A , list: [{nm: Atlanta, id:111}, {nm: Alisa, id:115}] }, 
        //                 {index: B , list: [{nm: Boston,  id:121}] }
        //               ]
        var {cityList,hotList} = this.formatCity(cities);
        this.cityList = cityList;
        this.hotList = hotList;
      })
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
      indexToName:function(index){
        var h4 = this.$refs.city_li.getElementsByTagName('h4');
        console.log(h4 );
        console.log(h4[index].parentNode.offsetTop);
        
        //******* scrollTop获取的值是滚动条产生的那个节点  *********************
        this.$refs.city_li.parentNode.parentNode.scrollTop = h4[index].parentNode.offsetTop;
        console.log(this.$refs.city_li.parentNode.parentNode.scrollTop);
      },
      clickRoute: function(){
          console.log(this.$route.path)
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .city{
   padding: 3px;
 }
 .hot_list{
   background-color: rgba(235, 235, 235, 0.486);
   /* border-bottom: 1px silver solid; */
   margin-bottom: 10px;
   margin-right: 25px;


 }
 .hot{
   margin-left: 20px;
   margin-bottom: 3px;
 }
 .hotname{
   list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   margin-left: 40px;
   margin-bottom: 3px;
   /* justify-content: space-around */
 }
 .item1{
   margin-bottom: 5px;
   width: 30%;
 }

 .item2{
   margin-left: 20px;
   margin-bottom: 5px;
 }
 .city_area{
   border-bottom: 1px silver solid;
   margin-right: 25px;
   margin-bottom: 5px;
   background-color: rgba(235, 235, 235, 0.486);
 }
 .city_index{
   position: fixed;
   width: 15px;
   height: 71%;
   top:130px;
   right: 5px;
   display: flex;
   flex-direction: column;
   background-color: rgba(185, 163, 163, 0.486);
   font-size: 14px;

 }
  /* #icon{
    position: absolute;
  } */
</style>
