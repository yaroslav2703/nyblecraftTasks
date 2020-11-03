<template>
    <ul class="sidenav app-sidenav open">
        <img src="../../public/logo.png" width="250px"  style="padding: 5px"/>
        <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" >
            <a href="#" class="waves-effect waves-orange pointer">
                <i class="material-icons">{{link.icon}}</i>
                {{link.title}}
            </a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "Sidebar",
        data: () => ({
            links: [
                {title: 'Все заметки', url: '/notes', icon: 'collections_bookmark'},
                {title: 'Теги', url: '/tags', icon: 'bookmark'},
            ]
        })
    }
</script>

<style scoped>

</style>