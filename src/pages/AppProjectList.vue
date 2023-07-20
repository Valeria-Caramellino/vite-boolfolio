<script>
import axios from "axios";
import {store} from '../store';

export default{
    name:"AppProjectList",
    data(){
        return{

            store,
            projects:[],
            indexPageProjects: 0,
            totPageProjects : 0,

        }
    },
    
    methods:{
        getProject(){
            this.store.loading = true;

            axios.get(this.store.apiUrl + this.store.projectApi).then((r) => {
            
                this.projects = r.data.results.data;
                this.indexPageProjects = r.data.results.current_page;
                this.totPageProjects = r.data.results.last_page;
                //console.log(r);
                this.store.loading = false
            }).catch(err=> {
                this.store.loading = false;
                this.store.loadingError = "Errore nel caricamento " + err.message;

                this.$router.push({
                    name:'error', params: {code:404}
                });
               
            })
        },
        getProjectsPage(PagNum){

            if( PagNum && PagNum > 0 && PagNum <= this.totPageProjects ){
                
                let config = {
                    params: {
                        page:PagNum,
                    }
                };

                this.store.loading=true;
                axios.get(this.store.apiUrl + this.store.projectApi, config).then((r) => {
                    
                    this.projects = r.data.results.data;
                    this.indexPageProjects = r.data.results.current_page;
                    this.totPageProjects = r.data.results.last_page;
                    
                    this.store.loading = false
                }).catch(err=> {
                    
                    this.store.loading = false;
                    this.store.loadingError = "Errore nel caricamento " + err.message;
                    this.$router.push({
                    name:'error', params: {code:404}
                });
                   
                })
            }else {
                console.error('non ci sono piu pagine');
            }
        },
        getProjectPrevPage(){
            this.getProjectsPage(this.indexPageProjects - 1);
        },
        getProjectNextPage(){
            this.getProjectsPage (this.indexPageProjects +1);
        }


    },
    mounted(){
        this.getProject();
    }
}
</script>

<template>
<main>
    <div class="container">
        <div class="row">
            <div class="col-12">
               <h2>Elenco Projects</h2>
                <h4 v-if="totPageProjects>0">Pagina {{ indexPageProjects }} di {{ totPageProjects }}</h4>
                <h3 v-if="store.loading">Caricamento in corso</h3>
                <h3 v-if="store.loadingError" class="text-danger">{{ store.loadingError }}</h3>
            </div>
        </div>
        <hr>
        <div class="row flex-wrap justify-content-around my-3">
            
            <div class="border col-5 my-3 text-center rounded bg-secondary" v-for="item in projects">
                <router-link :to="{ name:'single', params: {id:item.id}}">
                <h4>Title: {{ item.title }}</h4>
                <h3>Type: {{ item.type ? item.type.name : "Nessun Tipe usato" }}</h3>
                <p>Content: {{ item.content }}</p>
                <template v-if="item.tecnologies.length > 0">
                    <p>Tecnologies: 
                        <span v-for="item in item.tecnologies">{{ item.name }}&ensp;</span>
                    </p>
                </template>
                <h4>Maggiori info</h4>
                </router-link>
            </div>
        </div>

        <div class="row my-3">
            <div class="col-8 mx-auto d-flex justify-content-between">
                <a class="btn btn-secondary" @click="getProjectPrevPage">Pagina Prev</a>
                <a class="btn btn-secondary mx-2 col-1" @click="getProjectsPage(numPage)" v-for="numPage in totPageProjects ">{{ numPage }}</a>
                <a class="btn btn-secondary" @click="getProjectNextPage">Pagina next</a>
            </div>
             
        </div>
    </div>
    
    
   
    

    
</main>
</template>

<style lang="scss" scoped>
div.border{
    &:hover{
        transform: scale(1.1);      
    }

    a{
        text-decoration: none;
        color: black;
    }
}
    
</style>
