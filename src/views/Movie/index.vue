<template> 
    <div>
        <Header title="去影院" />
        <div>cinema</div>
        <TabBar />
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

<style>
    
</style>

