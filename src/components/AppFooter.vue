<script>

export default{
    name:"AppFooter",
    data(){
        return{
            title:"Io sono il Footer"
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
                    <h4 class="bg-secondary py-3">{{ title }}</h4>
                </div>
            </div>
        </div>
    </footer>

</template>