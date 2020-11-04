<template>
    <div style="padding-bottom: 20px">
        <div class="row">
            <div class="col s2 m2 l2">
                <router-link :to="{ name: 'note-edit', params: { id: id }}" class="white-text">
                    <button class="btn waves-effect waves-light blue darken-2" type="button">
                        Изменить
                        <i class="material-icons right">edit</i>
                    </button>
                </router-link>
            </div>
            <div class="col s2 m2 l2">
                <button class="btn waves-effect waves-light blue darken-2" type="button" @click="deleteHandler(id)">
                    Удалить
                    <i class="material-icons right">clear</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import requests from "../../utils/requests";

    export default {
        name: "ToolbarView",
        props: ['id'],
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