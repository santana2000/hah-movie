<template> 
    <div class="detail">
        <Header title="电影详情" >
           <i class="iconfont iconarrowleft" @click='backTo'></i>
        </Header>
        <div class="page">
            <div class="intro">
                <img :src="detailmovie.img | getSrc('128.188')" alt="post">
                <ul >
                    <li class="name">{{ detailmovie.nm }}</li>
                    <li class="en">{{detailmovie.enm}}</li>
                    <li class="num">{{detailmovie.sc}}</li>
                    <li class="type">{{detailmovie.cat}}</li>
                    <li class="long">{{detailmovie.src}}</li>
                    <li class="date">{{detailmovie.pubDesc}}</li>
                </ul>
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
  
    
</style>

