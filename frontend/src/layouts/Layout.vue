<template>
    <div class="app-main-layout">
        <Sidebar/>
        <main class="app-content">
            <div class="app-page">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from "../components/Sidebar";
    export default {
        name: "Layout",
        components: {
            Sidebar
        }
    }
</script>

<style scoped>

</style>