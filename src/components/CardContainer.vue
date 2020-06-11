<template>
    <div class="container-fluid">
      <div class="w-100 pt-4 pb-4" style="background:#fdfdfd">
        <div class="container">
          <h3 class="mb-4">{{title}}</h3>
          <div class="row">
            <MovieCard v-for="m in items" :key="m.id" :id="m.id" :image=m.poster_path :name=m.title||m.name :vote=m.vote_count :date=m.release_date :rate=m.vote_average :views=m.popularity />
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import MovieCard from './MovieCard';
export default {

    name:'CardContainer',
    components:{
        MovieCard
    },
    props:{
        title:String,
        items:Array
    }

}
</script>