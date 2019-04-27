<template>
<div>
     <home-header></home-header>
     <home-product></home-product>
</div>
   
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeProduct from './components/Product'
export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeProduct
    }

}
</script>

<style>

</style>
