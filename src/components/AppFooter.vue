<script>

export default{
    name:"AppFooter",
    data(){
        return{
            title:"Sezione Footer"
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h4 class=" py-3">{{ title }}</h4>
                </div>
            </div>
        </div>
    </footer>

</template>
<style lang="scss" scoped>
@use '../style/Variables.scss' as*;

.row{
    background-color: $primary;
}

</style>