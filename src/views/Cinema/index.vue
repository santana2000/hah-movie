<template>
    <div>
        <Header title="看电影"/>
        <div>cinema</div>
        <TabBar />
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
<style>
    
</style>

