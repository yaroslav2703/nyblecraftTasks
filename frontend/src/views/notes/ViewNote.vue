<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{note.title}}</h3>
                    </div>
                   <Toolbar v-bind:id="note.id"></Toolbar>
                    <div class="chips chips-placeholder"></div>
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
    import Toolbar from "../../components/notes/ToolbarView";
    import requests from "../../utils/requests";

    export default {
        name: "ViewNote",
        data : () => ({
            note: null,
            tags: []
        }),
        components: {
            Toolbar
        },
        mounted() {
            $('.chips-placeholder').chips({
                data: requests.getNoteTags(this.$route.params.id),
                placeholder: 'Введите тег',
                secondaryPlaceholder: '+ Тег',
                onChipDelete: () => {
                    this.saveStateTags()
                },
                onChipAdd: () => {
                    this.saveStateTags()
                }
            });

        },
        created() {
            const id = this.$route.params.id;
            const response = requests.getNote(id);
            if(response != null){
                this.note = response;
                this.tags = response.tags;
            }
        },
        methods: {
            saveStateTags(){
                const tags = [];
                for(let item of document.querySelectorAll('.chip')){
                    let tag = item.innerText;
                    const index = item.innerText.indexOf('\n');
                    tag = tag.slice(0, index);
                    tags.push(tag);
                }
                this.tags = tags;
                requests.addNoteTag(this.note.id, this.tags);
            }
        }
    }
</script>

<style scoped>

</style>