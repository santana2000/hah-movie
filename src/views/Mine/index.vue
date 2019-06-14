<template>
    <div class="container">
        <Header title="身份证"/>
        <Login />
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
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

