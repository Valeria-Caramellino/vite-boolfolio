<script>

export default{
    name:"AppHeader",
    data(){
        return{
            title:"Vite-Boolfolio",
        }
    },
    methods:{

    },
    mounted(){

    }
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
                    <a class="btn btn-secondary mx-2" href="/">Home</a>
                    <a class="btn btn-secondary mx-2" href="/projects">List Projects</a>
                </div>
            </div>
        </div>
    </header>

</template>
<style lang="scss" scoped>

</style>