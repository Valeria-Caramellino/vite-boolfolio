<script>
import axios from "axios";
import {store} from '../store';

import { RouterLink } from "vue-router";
export default{
    nome: "AppSingleProject",
    data() {
        return {
            store,
            projects: null,
        };
    },
    methods: {
        getProject(id) {
            this.store.loading = true;
            axios.get(this.store.apiUrl + this.store.projectApi + id).then((r) => {
                this.projects = r.data.results;
                this.store.loading = false;
            }).catch(err => {
                this.store.loading = false;
                this.store.loadingError = "Errore nel caricamento " + err.message;
                this.$router.push({
                    name: "error",
                    params: { code: 404 }
                });
            });
        },
    },
    mounted() {
        this.getProject(this.$route.params.id);
    },
    components: { RouterLink },

    beforeRouteUpdate(to,from) {
        if(from.name == to.name){
            this.getProject( to.params.id );
        }
    }
}

</script>


<template>
    <main>

        <div class="container">
            <div class="row justify-content-around">

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

                        <img :src="this.store.imgApi + projects.image" :alt="projects.title"> 
                                
                    </div>
                    <section class="col-3 d-flex justify-content-center align-items-center">
                       
                       <template v-if="projects.id > 1">
                            <router-link :to="{name:'single', params: {id: projects.id-1}}" class="btn btn-secondary mx-2">Progetto Precedente</router-link>

                       </template>

                       <template v-if="projects.id < store.totProjects">
                       
                            <router-link :to="{name:'single' , params: {id: projects.id+1}}" class="btn btn-secondary mx-2">Progetto Successivo</router-link>
                  
                        </template>
                    </section>
                </template>

            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>

img{
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1rem;
}
</style>