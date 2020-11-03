<template>
    <div style="padding-bottom: 20px">
        <div class="row">
            <div class="col s2 m2 l2">
                <router-link :to="{ name: 'note-add'}" class="white-text">
                    <button class="btn waves-effect waves-light blue darken-2 white-text" type="button">
                        Добавить
                        <i class="material-icons right">add</i>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>