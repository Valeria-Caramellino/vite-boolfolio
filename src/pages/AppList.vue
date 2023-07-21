<script>
import axios from 'axios';
import { store } from '../store';
export default{
    name: "AppList",
    data(){
        return{
            store,
            listProjects: [],
            listApi: "list"
        }
    },
    methods:{
        getProject(){
            this.store.loading = true;

            axios.get(this.store.apiUrl + this.store.projectApi + this.listApi).then((r) => {
            
                this.listProjects = r.data.results;
                console.log(this.listProjects);
                this.store.loading = false
            }).catch(err=> {
                this.store.loading = false;
                this.store.loadingError = "Errore nel caricamento " + err.message;

                this.$router.push({
                    name:'error', params: {code:404}
                });
               
            })
        },
    },
    mounted(){
        this.getProject();
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
               <h2>Elenco Projects</h2>
                <h3 v-if="store.loading">Caricamento in corso</h3>
                <h3 v-if="store.loadingError" class="text-danger">{{ store.loadingError }}</h3>
            </div>
        </div>
        <div class="row justify-content-around flex-wrap">
            <div class="col-4 mx-1 my-2 card d-flex align-items-center justify-content-center bg-secondary text-light" v-for="item in listProjects">
                    <h4>Titolo: <span>{{ item.title }} </span> </h4>
                    <router-link :to="{name:'single', params: {id:item.id}}">Info</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card{
    height: 5rem;
}
span{
    font-size: 1.25rem;
}
a{
    color: white;
}
</style>