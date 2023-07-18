<script>
import axios from "axios";
export default{
    name:"AppMain",
    data(){
        return{
            apiUrl:"http://127.0.0.1:8000/api/",
            projectApi:"projects",
            loading:false,
            loadingError: false,
            projects:[],
            indexPageProjects: 0,
            totPageProjects : 0,
        }
    },
    methods:{
        getProject(){
            this.loading = true;

            axios.get(this.apiUrl + this.projectApi).then((r) => {
            
                this.projects = r.data.results.data;/**metto i dati nell'array */
                this.indexPageProjects = r.data.results.current_page;//popolo dati
                this.totPageProjects = r.data.results.last_page;//popolo dati
                //console.log(r.data.results.last_page);
                //console.log(this.projects);
                this.loading = false
            }).catch(err=> {
                this.loading = false;
                this.loadingError = "Errore nel caricamento " + err.message;
                //console.error(err);
            })
        },
        getProjectsPage(PagNum){

            if( PagNum && PagNum > 0 && PagNum <= this.totPageProjects ){
                
                let config = {
                    params: {
                        page:PagNum,
                    }
                };

                this.loading=true;
                axios.get(this.apiUrl + this.projectApi, config).then((r) => {
                    
                    this.projects = r.data.results.data;/**metto i dati nell'array */
                    this.indexPageProjects = r.data.results.current_page;//popolo
                    this.totPageProjects = r.data.results.last_page;//popolo dati
                    //console.log(r.data.results.data);
                    //console.log(this.projects);
                    this.loading = false
                }).catch(err=> {
                    this.loading = false;
                    this.loadingError = "Errore nel caricamento " + err.message;
                    console.error(err);
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
               <h1>Elenco Projects</h1>
                <h4 v-if="totPageProjects>0">Pagina {{ indexPageProjects }} di {{ totPageProjects }}</h4>
                <h3 v-if="loading">Caricamento in corso</h3>
                <h3 v-if="loadingError" class="text-danger">{{ loadingError }}</h3>
            </div>
        </div>
        <hr>
        <div class="row justify-content-between my-3">

            <div class="border col-5 my-2 text-center rounded bg-secondary" v-for="item in projects">
                <h4>Title: {{ item.title }}</h4>
                <h3>Type: {{ item.type ? item.type.name : "Nessun Tipe usato" }}</h3>
                <p>Content:{{ item.content }}</p>
                <template v-if="item.tecnologies.length > 0">
                <p>Tecnologies: 
                    <span v-for="item in item.tecnologies">{{ item.name }}&ensp;</span>
                </p>
                </template>
                
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
    
</style>
