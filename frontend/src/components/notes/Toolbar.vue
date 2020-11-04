<template>
    <div style="padding-bottom: 20px">
        <form @submit.prevent="submitHandler">
            <div class="row">
                <div class="col s2 m2 l2">
                    <router-link :to="{ name: 'note-add'}" class="white-text">
                        <button class="btn waves-effect waves-light blue darken-2 white-text" type="button">
                            Добавить
                            <i class="material-icons right">add</i>
                        </button>
                    </router-link>
                </div>
                <div class="col s2 m2 l2">
                    <button class="btn waves-effect waves-light blue darken-2 white-text" type="submit">
                        Поиск
                        <i class="material-icons right">search</i>
                    </button>
                </div>
                <div class="col s2 m2 l2">
                    <div class="input-field ">
                        <input
                                id="title"
                                type="text"
                                v-model.trim="title"
                        >
                        <label for="title">Тег</label>
                    </div>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import requests from "../../utils/requests";

    export default {
        name: "Toolbar",
        data: () => ({
            title: null
        }),
        methods: {
            async submitHandler() {
                let notes = null;
                if(this.title === ''){
                    notes = requests.getNotes();
                }
                else{
                    notes = requests.filterNoteTag(this.title);
                }
                this.$emit('filter', notes);
            }

        }
    }
</script>

<style scoped>

</style>