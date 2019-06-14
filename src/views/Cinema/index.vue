<template>
    <div class="container">
        <Header title="去影院"/>
        <div>cinema</div>
        <TabBar/>
    </div>
    
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    export default {
        name: 'Cinema',
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

