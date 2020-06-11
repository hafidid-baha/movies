<template>
  <div id="app">
    <Nav />
    <router-view class="mt-4"></router-view>
    <!-- <Nav />
    <Slider :items=rated title="Top Rating Movies" />
    <CardContainer :items=data title="The Most Populare Movies" ></CardContainer>
    <infinite-loading @infinite="fetchData"></infinite-loading> -->
  </div>
</template>

<script>
// import Home from './components/Home';
import Nav from './components/nav'

export default {
  components:{
    Nav
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&family=Changa:wght@300&family=Montserrat&display=swap');

*{
  font-family: 'Changa', sans-serif;
}

</style>
