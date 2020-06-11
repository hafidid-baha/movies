<template>
    
    <div class="col-lg-12 mt-1 mb-1 position-relative">
        <div class="card border-0 mt-1 mb-1 shadow overflow-hidden" @mouseleave="mouseLeave" @mouseover="mouseover">
            
            <div class="info pb-0 mb-0 text-white pt-4  position-absolute w-100 h-50 justfy-content-center">
            <div class="row h-100 pb-0">
                    <div class="col-12 text-center">
                        <a href="" class="text-white">
                            <h6>{{name}}</h6>
                        </a>
                    </div>
            </div>
            </div>
        
            <transition name="s">
                <span v-if="showPlay" class="d-flex align-items-center rounded pr-2 pl-2 position-absolute views text-white">
                    <svg class="mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 469.333 469.333" width="20" height="20" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve">
                        <g>
                            <g>
                                <g>
                                    <path style="fill:#FFFFFF" d="M234.667,170.667c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S269.973,170.667,234.667,170.667z"/>
                                    <path style="fill:#FFFFFF" d="M234.667,74.667C128,74.667,36.907,141.013,0,234.667c36.907,93.653,128,160,234.667,160
                                        c106.773,0,197.76-66.347,234.667-160C432.427,141.013,341.44,74.667,234.667,74.667z M234.667,341.333
                                        c-58.88,0-106.667-47.787-106.667-106.667S175.787,128,234.667,128s106.667,47.787,106.667,106.667
                                        S293.547,341.333,234.667,341.333z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    {{views}}
                </span>
            </transition>

            <!-- <img src="https://images.unsplash.com/photo-1586226900887-4fb28c224b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" class="card-img-top img-fluid" alt="..."> -->
            <img v-lazy="'http://image.tmdb.org/t/p/w300//'+image"  class="card-img-top img-fluid">
            <!-- w780 -->
        </div>
    </div>
    
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    name:'SliderMovieCard',
    props:{
        name:String,
        date:String,
        rate:Number,
        views:Number,
        vote:Number,
        image:String
    },
    data(){
        return{
            showInfo:false,
            showPlay:false,
        }
    }
    ,
    mounted(){
        
    },
    methods:{
        animateProgress:function(){
            const progress = document.querySelector('#rating');
            if(progress){
                progress.setAttribute('width', '75%');
            }
        },
        mouseover : function(){
            this.showInfo = true;
            // let vm = this;
            // setTimeout(function(){
            //     vm.animateProgress();
            // }, 500);
            
            // alert(this.showInfo);
        },
        afterEnter: function(){
            // alert('animation is done');
            this.showPlay= true;
        },
        mouseLeave: function(){
            this.showInfo= false;
            this.showPlay= false;
            // take the progress value to 0
            // this.animateProgress();
        }
        
    }
}
</script>
<style scoped>

    .shadow{
        /* box-shadow: 0 .2rem 1rem rgba(255, 125, 0,.5) !important; */
    }

    h6{
        font-family: 'Montserrat', sans-serif !important;
        text-shadow:2px 2px 5px #FF7D00
    }

    .views{
        top:10px;
        left:10px;
        background-color: #FF7D00;
    }

    .info{
        bottom:0px;
        left:0px;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 1),rgba(0, 0, 0, .7), rgb(0, 0, 0, 0.1));
        /* opacity:0.5; */
        /* transform: translateY(100%); */
        transition: all ease-in-out .1s;
        font-size: 0.2em;
    }
    .info h6{
        font-family: 'Cairo', sans-serif;
    }
    .rating{
        background-color: #FFFFFF;
        height: 4px;
        width: 100%;
        transition: all ease-in-out 0.5s;
    }
    /* progress::-moz-progress-value {
        background: #FF7D00;
        transition: all ease-in-out 0.5s;
    }

    progress::-moz-progress-bar {
        background: lightcolor;
    }

    progress::-webkit-progress-value {
        background: #FF7D00;
        transition: all ease-in-out 0.5s;
    }

    progress::-webkit-progress-bar {
        background-color: rgba(0, 0, 0, 0.9);
    } */

    /* transation styles */
    .fade-enter-active {
        opacity: 1;
        transform: translateY(100%);
    }
    .fade-leave-active{
        transform: translateY(50%);
        opacity: 0;
    }

    .scale-enter-active {
        animation: bounce-in .5s;
    }
    .scale-leave-active {
        animation: bounce-in .5s reverse;
    }

    .s-enter-active {
        animation: scale .2s;
    }
    .s-leave-active {
        animation: scale .2s reverse;
    }

    

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes scale {
        0% {
            transform-origin: 0% 50%;
            transform: scale(0) translateX(-100%);
            opacity: 0;
        }
        
        100% {
            transform: scale(1) translateX(0%);
            opacity: 1;
        }
    }

    


</style>