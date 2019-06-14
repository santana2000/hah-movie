<template> 
    <div class="container">
        <Header title="看电影"/>
        <div>movie</div>
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
   .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

