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
    <h3>corpo della pagina</h3>
    <h4 v-if="totPageProjects>0">Pagina {{ indexPageProjects }} di {{ totPageProjects }}</h4>
    <h3 v-if="loading">Caricamento in corso</h3>
    <h3 v-if="loadingError">{{ loadingError }}</h3>
    <hr>
    <div v-for="item in projects">
        <h4>title: {{ item.title }}</h4>
        <h3>type: {{ item.type ? item.type.name : "Nessun Tipe usato" }}</h3>
        <p> content:{{ item.content }}</p>
       <p>tecnologies: 
        <span v-for="item in item.tecnologies">{{ item.name }}</span>
        <span v-if="item.tecnologies.length == 0">A\N</span>
        </p>
    
        <br>
        <hr>

    </div>

    <a class="btn btn-primary" @click="getProjectPrevPage">Pagina Prev</a>
    <a class="btn btn-primary mx-2" @click="getProjectsPage(numPage)" v-for="numPage in totPageProjects ">{{ numPage }}</a>
    <a class="btn btn-primary" @click="getProjectNextPage">Pagina next</a>
</main>
</template>

<style lang="scss" scoped>
    main{
        
        margin: 3rem;
        h3{
            margin-bottom: 2rem;
        }
        h4{
            margin: 2rem 0;
        }
    }
</style>
