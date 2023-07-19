<script>

import { RouterLink } from 'vue-router';

export default{
    name: "AppHeader",
    data() {
        return {
            title: "Vite-Boolfolio",
            navLinks:[
                {label: "Home", name:"home"},
                {label: "Projects", name:"projects"}
            ]
        };
    },
    methods: {},
    mounted() {
    },
    components: { RouterLink }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row bg-secondary">
                <div class="col-12">
                    <h1 class="text-center  py-3">
                        {{ title }}
                    </h1>
                </div>
            </div>
            <div class="row bg-black">
                <div class="col-12 d-flex justify-content-evenly py-3">
                    <template v-for="item in navLinks">
                        <router-link :to="{name: item.name}">{{ item.label }}</router-link>
                    </template>
                    
                    <!--
                    <a class="btn btn-secondary mx-2" href="/">Home</a>
                    <a class="btn btn-secondary mx-2" href="/projects">List Projects</a>-->
                </div>
            </div>
        </div>
    </header>

</template>
<style lang="scss" scoped>

</style>