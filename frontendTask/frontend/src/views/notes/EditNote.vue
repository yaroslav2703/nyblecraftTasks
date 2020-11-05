<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{title}}</h3>
                    </div>
                    <div class="row">
                    <form class="col s12" @submit.prevent="submitHandler">
                        <div class="col s12 m12 l12">
                            <button class="btn waves-effect waves-light blue darken-2 white-text" type="submit">
                                Сохранить
                                <i class="material-icons right">save</i>
                            </button>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textarea2"
                                          class="materialize-textarea lime lighten-4" data-length="10"
                                          style="height: 200px"
                                          v-model.trim="text">
                                </textarea>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import requests from "../../utils/requests";


    export default {
        name: "EditNote",
        data : () => ({
            id: null,
            title: '',
            text: ''
        }),
        async mounted() {

        },
        async created() {
            const formData = {
                id: this.$route.params.id
            };
            try{
                const response = await requests.request('/api/notes/getById', 'POST', formData);
                if (response.message === 'successfully'){
                    this.id = response.note.id;
                    this.title = response.note.title;
                    this.text = response.note.text;
                }
            } catch (e) {
                console.log(e.message)
            }
        },
        methods: {
            async submitHandler() {
                const formData = {
                    id: this.id,
                    text: this.text
                };
                try{
                    const response = await requests.request('/api/notes/editById', 'POST', formData);
                    if (response.message === 'successfully'){
                        await this.$router.push("/");
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>