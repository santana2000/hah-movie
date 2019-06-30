<template>
    <div id="movie_page">
        <Header title="身份证"/>
        <div id="content">
            <Login />
        </div>
        <TabBar />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    import Login from '@/components/Login';
    export default {
        name: 'Mine',
        components:{
            Header,
            TabBar,
            Login
        }    
    }
</script>
<style scoped>
/* .page{
    height: 100%;
} */
</style>

