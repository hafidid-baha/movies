<template>
    <div>
        <Slider :items=rated title="Top Rating Movies" />
        <CardContainer :items=data title="The Most Populare Movies" ></CardContainer>
        <infinite-loading @infinite="fetchData"></infinite-loading>
    </div>
</template>
<script>

import Slider from '../components/Slider'
import CardContainer from '../components/CardContainer'
import InfiniteLoading from 'vue-infinite-loading';
import axios from "axios";


export default {
    name:'Home',
    components:{
        Slider,CardContainer,InfiniteLoading
    },
    data(){
    return{
      config : {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc4MGUyMmMwZTk3NTY1MzMwZGE5MmVjYmMwMDhjZCIsInN1YiI6IjVlOGM2YjI0M2EzNDBiMDAxNDAzYTI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p4Q5rpVxF-cHdgfa8n7Ag7J8G0OAYou22iVIy39TMx4'
          }
      },
      page:1,
      data:[],
      rated:[],
      url:"https://api.themoviedb.org/3/movie/popular",
      loaderFirst: false,
    }
  },
  mounted(){
    // this.fetchData();
    this.getLatest();
  },
  methods:{
    fetchData: function($state){
      let vm = this;
      let url = this.url+"?page="+this.page;
      // console.log(url);
      axios.get(url,this.config)
      .then((res)=>{
        if(res.data.results.length){
          vm.page++;
          vm.data.push(...res.data.results);
          $state.loaded();
        }else{
          $state.complete();
        }
      })
    },

    getLatest:function(){
      let vm = this;
      let u = "https://api.themoviedb.org/3/movie/top_rated";
      axios.get(u,this.config)
      .then((res)=>{
        if(res.data.results.length){
          vm.rated.push(...res.data.results);
        }
      })

    }
    // loads: function(){
    //   if(!this.loaderFirst){
    //     this.loaderFirst = true;
    //     return;
    //   }
    //   // this.fetchData();
    //   // alert(this.loaderFirst);
    //   console.log('hi')
    // }
  }
}
</script>