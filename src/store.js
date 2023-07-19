import { reactive } from "vue";

export const store = reactive({
    apiUrl:"http://127.0.0.1:8000/api/",
    projectApi:"projects/",
    imgApi:"http://127.0.0.1:8000/storage/",
    loading:false,
    loadingError: false,
})