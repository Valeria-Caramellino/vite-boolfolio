<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store';

import axios from "axios";
export default{
  data(){
    return{

      store

    }
   
  }, 
  components: {
    AppHeader,  
    
    AppFooter

  },
  methods:{
    getNumProjects(){

      //solo se tot è = 0 altrimenti il valore è gia stato impostato
      if(this.store.totProjects == 0){
        
        this.store.loading = true;

        axios.get(this.store.apiUrl + this.store.projectApi + "count").then((r)=>{

          this.store.totProjects = r.data.results;
          //console.log(this.store.totProjects);
        }).catch( err => {
          this.store.loading = false;
        
        });
      }
    }

  },
  mounted(){
    this.getNumProjects();
  }

}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
 
</template>

<style lang="sass" scoped>

</style>
