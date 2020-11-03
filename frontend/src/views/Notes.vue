<template>
    <div>
        <div class="page-title">
            <h3>Все заметки</h3>
        </div>
        <div class="preloader-wrapper big active preloader-page" v-if="showPreloader">
            <Preloader/>
        </div>
        <div v-else>
            <Toolbar></Toolbar>
            <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
                <Table  v-bind:notes="notes"></Table>
            </div>
        </div>
    </div>
</template>

<script>
    import Toolbar from "../components/notes/Toolbar";
    import Table from "../components/notes/Table";
    import Preloader from "../components/Preloader";
    import requests from "../utils/requests";

    export default {
        name: "Notes",
        data: () => ({
            notes: null,
            showPreloader: true
        }),
        components: {
            Table, Preloader, Toolbar
        },
        async mounted() {
            this.notes = requests.getNotes();
            this.showPreloader = false
        },
    }
</script>

<style scoped>

</style>