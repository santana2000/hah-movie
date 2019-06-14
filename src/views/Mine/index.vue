<template>
    <div class="container">
        <Header title="身份证"/>
        <div>mine</div>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    export default {
        name: 'Mine',
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

