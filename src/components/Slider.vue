<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="mb-4">{{title}}</h3>
                <carousel :perPageCustom="[[768, 3], [1024, 6]]" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="4000"
                :scrollPerPage="false" :paginationEnabled="false">
                <slide v-for="m in items" :key="m.id">
                    <SliderMovieCard :image=m.poster_path :name=m.title :vote=m.vote_count :date=m.release_date :rate=m.vote_average :views=m.popularity />
                </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>
<script>
import SliderMovieCard from './SliderMovieCard';
export default {
    name:'Slider',
    components:{
        SliderMovieCard
    },
    props:{
        items:Array,
        title:String
    }
}
</script>