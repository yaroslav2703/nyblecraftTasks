<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{title}}</h3>
                    </div>
                   <Toolbar v-bind:id="id"></Toolbar>
                    <div class="chips chips-placeholder"></div>
                    <div class="card-panel lime lighten-4">
                        <span class="black-text">
                           {{text}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Toolbar from "../../components/notes/ToolbarView";
    import requests from "../../utils/requests";

    export default {
        name: "ViewNote",
        data : () => ({
            id: null,
            title:'',
            text: '',
            tags: []
        }),
        components: {
            Toolbar
        },
        async created() {
            const formData = {
                id: this.$route.params.id
            };
            try{
                const response = await requests.request('/api/notes/getById', 'POST', formData);
                if (response.message === 'successfully'){
                    this.id = response.note.id;
                    this.title = response.note.title;
                    this.text = response.note.text;
                    this.tags = response.note.tags;
                    $('.chips-placeholder').chips({
                        data: await requests.getNoteTags(this.id),
                        placeholder: 'Введите тег через знак #',
                        secondaryPlaceholder: '+ #тег',
                        onChipDelete: () => {
                            this.saveStateTags()
                        },
                        onChipAdd: () => {
                            this.saveStateTags()
                        }
                    });
                }
            } catch (e) {
                console.log(e.message)
            }
        },
        methods: {
            async saveStateTags(){
                const tags = [];
                for(let item of document.querySelectorAll('.chip')){
                    let tag = item.innerText;
                    const index = item.innerText.indexOf('\n');
                    tag = tag.slice(0, index);
                    let firstTagSymbol = tag.slice(0, 1);
                    if(firstTagSymbol === '#'){
                        tags.push(tag);
                    }

                }
                const formData = {
                    id: this.id,
                    tags: tags
                };
                try{
                    const response = await requests.request('/api/notes/editTagsById', 'POST', formData);
                    if (response.message === 'successfully'){
                        this.tags = tags;
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>