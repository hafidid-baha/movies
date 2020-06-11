<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 p-0" style="background-color:rgb(255, 252, 252)">
                <div class="card">
                    <img v-show="Details.poster_path != undefined" class="card-img-top" v-lazy="'http://image.tmdb.org/t/p/w780//'+Details.poster_path" alt="Card image cap">
                </div>
            </div>
            <div class="col-md-8" style="background-color:rgb(255, 252, 252)">
                <h1>{{Details.original_title}}</h1>
                <p>{{Details.overview}}</p>
                <p><q>{{Details.tagline}}</q></p>
                <div>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td class="border-0"><span>Status</span> : {{Details.status}}</td>
                                <td class="border-0"><span>Release Date</span> : {{Details.release_date}}</td>
                                <td class="border-0"><span>Rate</span> : {{Details.vote_average}}</td>
                                <td class="border-0"><span>Votes Count</span> : {{Details.vote_count}}</td>
                                
                            </tr>
                        </tbody>
                    </table >
                </div>

                <div class="mt-4">
                    <span v-for="genre in Details.genres" :key="genre.id" class="mr-2 genre text-white rounded">{{genre.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Details",
    data(){
        return{
            url:'https://api.themoviedb.org/3/movie/'+this.$route.params.id,
            Details:[],
            config : {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc4MGUyMmMwZTk3NTY1MzMwZGE5MmVjYmMwMDhjZCIsInN1YiI6IjVlOGM2YjI0M2EzNDBiMDAxNDAzYTI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p4Q5rpVxF-cHdgfa8n7Ag7J8G0OAYou22iVIy39TMx4'
                }
            }
        }
    },
    methods: {
        getDetails:function(){
            let vm = this;
            axios.get(this.url,this.config)
            .then((res)=>{
                vm.Details = res.data;
            })
        }
    },
    created(){
        this.getDetails();
    }
}
</script>
<style scoped>
.genre{
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #FF7D00;
    border:none;
    
}
</style>