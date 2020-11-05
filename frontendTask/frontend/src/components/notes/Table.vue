<template>
    <div>
        <ul class="collection">
            <li class="collection-item" v-for="note in notes" :key="note.id">
                <i class="material-icons right">note</i>
                <h6>
                    <router-link :to="{ name: 'note-view', params: { id: note.id }}" class="blue-darken-text title" >
                        {{note.title}}
                    </router-link>
                </h6>
                <div>...</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: ['notes']
    }
</script>

<style scoped>

</style>