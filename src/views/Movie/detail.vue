<template> 
    <div class="detail">
        <Header title="电影详情" >
           <i class="iconfont iconarrowleft" @click='backTo'></i>
        </Header>
        <div class="page">
            <div class="intro">
                <img class="post" :src="detailmovie.img | getSrc('128.188')" alt="post">
                <div class="wrapper">
                    <ul>
                        <li class="name">{{ detailmovie.nm }}</li>
                        <li class="en">{{detailmovie.enm}}</li>
                        <li class="num"><span>{{detailmovie.sc}}</span></li>
                        <li class="type">{{detailmovie.cat}}</li>
                        <li class="long">{{detailmovie.src}}</li>
                        <li class="date">{{detailmovie.pubDesc}}</li>
                    </ul>
                </div>
             
            </div>
            <div class="more">

            </div>
        </div>
        <!-- <TabBar/> -->
    </div>
</template>

<script>
    import Header from '@/components/Header';
   
    export default {
        name: 'Detail',
        data(){
            return{
                detailmovie:{}
            }
        },
        components:{
            Header,
          
        },
        mounted(){
            console.log(this.$route.params.id)
            this.axios.get('/api/detailmovie?movieId='+ this.$route.params.id).then((res) => {
                this.detailmovie = res.data.data.detailMovie;  //api里的变量名看仔细一点
                console.log(this.detailmovie.img)
            }) 
        },
        methods:{
            backTo(){
                this.$router.push('/movie/now')
            }
        }
       
    }
</script>

<style scoped>
.top{
    margin:  0 0 0 0;

}
 .detail{
     position: absolute;
     top: 0;
     left: 0;
     min-height: 100%;
     width: 100%;
     background-color: white;
     z-index:9999;
 }
  .iconarrowleft{ 
    float:left;
    margin-left: 0.5rem;
    margin-right: -4.5rem;
    font-size: 1.1rem;
  }
  .intro{
      margin: 0.5rem;
      padding: 0.5rem;
      height: 10rem;
      position: relative;
      /* background-image: url() */
       

  }
  .post{
      /* display: inline-block; */
      height: 7rem;
      margin-left: 1rem;

  }
  .wrapper{
      /* display: inline-block; */
      height: 100%;
      font-size: 0.7rem;
      position: absolute;
      top:0.5rem ;
      right: 1.5rem;
    
  }
  .name{
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
  }
  span{
      font-size: 0.8rem;
      color: rgb(210, 138, 30);
      font-weight: 500
  }
    
</style>

