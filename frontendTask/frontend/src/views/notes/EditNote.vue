<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="page-title">
                        <h3>{{title}}</h3>
                    </div>
                        <div class="row">
                        <form class="col s12" @submit.prevent="submitHandler">
                            <div class="col s12 m12 l12">
                                <button class="btn waves-effect waves-light blue darken-2 white-text" type="submit">
                                    Сохранить
                                    <i class="material-icons right">save</i>
                                </button>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <div id="textarea2"
                                         contentEditable="true"
                                         class="lime lighten-4" data-length="10"
                                         style="height: 200px"
                                         ref="content"
                                         @focus="focusHandler"
                                         @input="inputHandler"
                                    >
                                    </div>
                                    <div class="chips chips-placeholder"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import requests from "../../utils/requests";


    export default {
        name: "EditNote",
        data : () => ({
            id: null,
            title: '',
            text: '',
            modText: '',
            tags: [],
            newTag: '',
            lastSymbol: ''
        }),
        async mounted() {

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
                    this.modText = this.text;
                    $('.chips-placeholder').chips({
                        data: await requests.getNoteTags(this.id),
                        placeholder: 'Введите тег #',
                        secondaryPlaceholder: '+ #тег',
                        onChipDelete: () => {
                            this.saveStateTags()
                        },
                        onChipAdd: () => {
                            this.saveStateTags()
                        }
                    });
                    this.$refs.content.textContent = this.modText;
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
            },
            async submitHandler() {
                this.modText = this.$refs.content.textContent;
                const formData = {
                    id: this.id,
                    text: this.modText
                };
                try{
                    const response = await requests.request('/api/notes/editById', 'POST', formData);
                    if (response.message === 'successfully'){
                        await this.$router.push("/");
                    }
                } catch (e) {
                    console.log(e.message)
                }
            },
            async focusHandler(){
                let array = [];
                let val = (this.modText).split(' ');
                for (let i = 0; i < val.length; i++) {
                    if (val[i].charAt(0) === "\n") {
                        val[i] = val[i].slice(1, val[i].length)
                    }
                }
                for (let i = 0; i < val.length; i++) {
                    if (val[i].charAt(0) === "#") {
                        array.push(val[i]);
                    }
                }
                let result = [];

                for (let str of array) {
                    if (!result.includes(str)) {
                        result.push(str);
                    }
                }
                array = result;
                this.$refs.content.innerHTML = this.$refs.content.textContent.split(' ').map(word => {
                    return array.includes(word) ? `<b>${word}</b>` : word;
                }).join(' ');
            },
            async inputHandler() {
                this.modText = this.$refs.content.textContent;
                let array = [];
                let val = (this.modText).split(' ');
                for (let i = 0; i < val.length; i++) {
                    if (val[i].charAt(0) === "\n") {
                        val[i] = val[i].slice(1, val[i].length)
                    }
                }
                for (let i = 0; i < val.length; i++) {
                    if (val[i].charAt(0) === "#") {
                        array.push(val[i]);
                    }
                }
                let result = [];

                for (let str of array) {
                    if (!result.includes(str)) {
                        result.push(str);
                    }
                }
                array = result;
                let lastElement = array[array.length - 1];
                let lastSymbol = this.modText[this.modText.length - 1];
                if (val[val.length - 2].charAt(0) === "#" && val[val.length - 1].charAt(0) !== "#") {
                    for(let item of array){
                        if(this.tags.indexOf(item) === -1){
                            this.tags.push(item)
                        }
                    }
                }
                else if (val[val.length - 1] === lastElement && lastSymbol === this.lastSymbol){
                    if(this.tags.indexOf(lastElement) === -1){
                        this.tags.push(lastElement)
                    }
                }
                this.lastSymbol = lastSymbol;
                const formData = {
                    id: this.id,
                    tags: this.tags
                };
                try{
                    const response = await requests.request('/api/notes/editTagsById', 'POST', formData);
                    if (response.message === 'successfully'){
                        $('.chips').chips('addChip', {tag: this.tags[this.tags.length-1]});
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