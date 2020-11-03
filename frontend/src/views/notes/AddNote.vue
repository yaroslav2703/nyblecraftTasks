<template>
    <div>
        <div class="page-title">
            <h3>Новая заметка</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s8 m8 l8 offset-s2 offset-m2 offset-l2">
                        <div class="input-field ">
                            <input
                                    id="title"
                                    type="text"
                                    class="validate"
                                    v-model.trim="title"
                            >
                            <label for="title">Название</label>
                        </div>
                        <div class="input-field col s12">
                                <textarea id="textarea2"
                                          class="materialize-textarea lime lighten-4" data-length="10"
                                          style="height: 200px"
                                          v-model.trim="text">
                                </textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s3 m3 l3 offset-m4 offset-s4 offset-l4">
                        <button class="btn waves-effect waves-light blue darken-2 white-text" type="submit">
                            Добавить
                            <i class="material-icons right">save</i>
                        </button>
                    </div>
                    <div class="col s3 m3 l3">
                        <button class="btn waves-effect waves-light blue darken-2 white-text" type="reset">
                            Сбросить
                            <i class="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import requests from "../../utils/requests";

    export default {
        name: "AddNote",
        data : () => ({
            title: '',
            text: ''
        }),
        methods: {
            async submitHandler() {
                const obj = {
                    id: null,
                    title: this.title,
                    text: this.text,
                    tags: []

                };
                requests.addNote(obj)
                await this.$router.push('/')
            }
        }
    }

</script>

<style scoped>

</style>