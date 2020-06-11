<template>
    
    <div class="col-lg-3 mt-1 mb-1 position-relative">
        <div class="card border-0 mt-1 mb-1 shadow overflow-hidden" @mouseleave="mouseLeave" @mouseover="mouseover">
            <transition name="fade" v-on:after-enter="afterEnter">
                <div v-show="showInfo" class="info pb-0 mb-0 text-white pt-4  position-absolute w-100 h-50 justfy-content-center">
                <div class="row h-100 pb-0">
                        <div class="col-12 text-center">
                            <h6>{{name}}</h6>
                        </div>
                        <div class="col-12 text-center">
                            <span class="d-block">{{date}}</span>
                        </div>
                        <transition name="scale">
                            <div v-show="showPlay" class="col-12 text-center p-0 m-0">
                                <!-- <a href=""> -->
                                <router-link :to="'/details/'+id">
                                    <svg class="" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 271.953 271.953" width="40" height="40" style="enable-background:new 0 0 271.953 271.953;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path style="fill:#FF7D00;" d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977
                                                    S60.879,271.953,135.977,271.953z M250.197,135.977c0,62.979-51.241,114.22-114.22,114.22s-114.22-51.241-114.22-114.22
                                                    s51.241-114.22,114.22-114.22S250.197,72.998,250.197,135.977z"/>
                                                <path style="fill:#FF7D00;" d="M112.295,205.031c2.692,1.115,5.434,1.659,8.235,1.659c5.662,0,11.183-2.208,15.344-6.375
                                                    l48.93-48.952c8.496-8.496,8.485-22.273-0.011-30.769l-48.957-48.952c-4.161-4.161-9.73-6.375-15.393-6.375
                                                    c-2.801,0-5.461,0.544-8.153,1.659c-8.126,3.367-13.255,11.297-13.255,20.097v97.903
                                                    C99.034,193.729,104.164,201.664,112.295,205.031z M120.791,88.613v-1.588l48.952,48.952l-48.952,48.952V88.613z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </router-link>
                                <!-- </a> -->
                            </div>
                        </transition>
                        <div class="col-12 text-center align-items-center justify-content-center d-flex">
                            <span class="d-inline-block mr-1 ml-1">{{rate}}</span>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.481 19.481" 
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" enable-background="new 0 0 19.481 19.481">
                                <g>
                                    <path style="fill:#FF7D00" d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169
                                    1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"/>
                                </g>
                            </svg>
                            <span class="d-inline-block ml-1 mr-1">|</span>
                            <span class="d-inline-block mr-1 ml-1">{{vote}}</span>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="15" height="15" viewBox="0 0 28.055 28.055" style="enable-background:new 0 0 28.055 28.055;"
                                    xml:space="preserve">
                                <g>
                                    <path style="fill:#FF7D00" d="M14.249,1.027c-0.036,0-0.07,0.009-0.104,0.009c-0.106-0.003-0.211-0.01-0.318-0.009H14.249z M14.085,17.301
                                        c-0.019,0-0.036-0.003-0.055-0.003c-0.014,0-0.027,0.003-0.041,0.003H14.085z M8.137,11.313c0.015-0.003,0.026-0.019,0.042-0.023
                                        c0.941,3.405,3.377,5.953,5.852,6.007c2.254-0.104,5.022-2.606,5.944-5.994c0.424,0.026,0.848-0.474,0.967-1.17
                                        c0.123-0.726-0.135-1.374-0.572-1.449c-0.028-0.005-0.057,0.013-0.084,0.014c-0.127-5.603-2.789-7.579-6.141-7.664
                                        C10.688,1.051,7.593,3.453,7.789,8.7c-0.033,0-0.064-0.021-0.096-0.015C7.254,8.76,6.998,9.408,7.121,10.134
                                        C7.241,10.858,7.697,11.386,8.137,11.313z M18.688,18.27l-3.141,6.146l-0.496-3.997l0.775-0.636h-1.878h-1.717l0.776,0.636
                                        l-0.497,3.997L9.373,18.27C3.917,19.005,0,21.343,0,27.027h28.055C28.057,21.342,24.141,19.006,18.688,18.27z"/>
                                </g>
                            </svg>
                        </div>                        
                        <div class="col-12 align-self-end d-flex">
                            <div class="rating" id="rating" ></div>
                        </div>
                        
                </div>
                </div>
            </transition>
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
            <img v-lazy="'http://image.tmdb.org/t/p/w780//'+image" class="card-img-top img-fluid">
        </div>
    </div>
    
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    name:'MovieCard',
    props:{
        name:String,
        date:String,
        rate:Number,
        views:Number,
        vote:Number,
        image:String,
        id:Number
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