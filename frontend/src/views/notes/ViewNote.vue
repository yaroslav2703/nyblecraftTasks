<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{note.title}}</h3>
                    </div>
                    <div class="row">
                        <div class="col s12 m12 l12">
                            <router-link :to="{ name: 'note-edit', params: { id: note.id }}" class="white-text">
                                <button class="btn waves-effect waves-light blue darken-2" type="button">
                                    Изменить
                                    <i class="material-icons right">edit</i>
                                </button>
                            </router-link>
                            <button class="btn waves-effect waves-light blue darken-2" type="button" @click="deleteHandler(note.id)">
                                Удалить
                                <i class="material-icons right">clear</i>
                            </button>
                        </div>
                    </div>
                    <div class="card-panel lime lighten-4">
                        <span class="black-text">
                           {{note.text}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import requests from "../../utils/requests";

    export default {
        name: "ViewNote",
        data : () => ({
            id: null,
            note: null
        }),
        async mounted() {
            this.id =  this.$route.params.id;
            this.note = requests.getNote(this.id)
        },
        methods: {
            async deleteHandler(id) {
                requests.deleteNote(id);
                await this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>