<script>
export default{
    name:'AppError',
    data(){
        return{
            errorMessage:{
                401 : 'errore 401',
                404: ' errore 404',
            }
        }
    }
}
</script>


<template>
<main>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1> Error {{ $route.params.code }}</h1>

                <p v-if="errorMessage[$route.params.code]">
                    {{ errorMessage[$route.params.code] }}
                </p>
                <p v-else>
                    Problema Generico
                </p>
            </div>
        </div>
    </div>
</main>
</template>


<style lang="scss" scoped>
</style>