<script>
import axios from "axios";

export default{
    nome:'AppSingleProject',
    data(){
        return{
            apiUrl:"http://127.0.0.1:8000/api/",
            projectApi:"projects/",
            loading:false,
            loadingError: false,
            projects:null,
            
        }
    },
   
    methods:{
        getProject(id){
            this.loading = true;

            axios.get(this.apiUrl + this.projectApi + id).then((r) => {
            
                this.projects = r.data.results;
               
                this.loading = false
            }).catch(err=> {
                this.loading = false;
                this.loadingError = "Errore nel caricamento " + err.message;
                this.$router.push({
                    name:'error', params: {code:404}
                });
                //console.error(err);
            })
        },
    },
    mounted(){
        this.getProject(this.$route.params.id);
    }

}

</script>


<template>

    <div class="container">

        <div class="row justify-content-center">

            <template v-if="projects">

                <div class="border col-5 my-3 text-center rounded bg-secondary">

                    <h4>Title: {{ projects.title }}</h4>
                    <h3>Type: {{ projects.type ? projects.type.name : "Nessun Tipe usato" }}</h3>
                    <p>Content:{{ projects.content }}</p>
                    <template v-if="projects.tecnologies.length > 0">
                        <p>Tecnologies: 
                            <span v-for="projects in projects.tecnologies">{{ projects.name }}&ensp;</span>
                        </p>
                    </template>
                
                </div>
                
            </template> 

        </div>

    </div>
       
</template>

<style lang="scss" scoped>

</style>