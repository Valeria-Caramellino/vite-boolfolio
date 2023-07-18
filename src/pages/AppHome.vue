<script>
export default {
    name:"AppHome",
    data(){
        return{

        }
    },
}
</script>
<template>

    <main>
       <div class="container">
            <div class="row ">
                <div class="col-12 my-4 text-center">
                    <h2>Benvenuto nella pagina iniziale</h2>  
                </div>
            </div>
        </div> 
    </main>

</template>
<style lang="scss" scoped>
@use '../style/Variables.scss' as*;

.row{
    background-color: $primary;
}
</style>