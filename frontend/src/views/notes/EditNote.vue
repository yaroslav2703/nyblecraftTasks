<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{note.title}}</h3>
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
                                          v-model.trim="note.text">
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
            note: null,
        }),
        async mounted() {

        },
        async created() {
            const id = this.$route.params.id;
            const response = requests.getNote(id);
            if(response != null){
                this.note = response;
            }
        },
        methods: {
            async submitHandler() {
                 requests.editNote(this.note.id, this.note.text);
                await this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>