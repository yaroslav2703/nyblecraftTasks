import model from "../../storage/index";


export default {
    getNotes(){
        return model
    },
    getNote(id){
        for(let item of model){
            if(item.id === id){
                return item
            }
        }
    },
    editNote(id, text){
        for(let item of model){
            if(item.id === id){
                item.text = text
            }
        }
    },
    deleteNote(id){
        let index = null;
        for(let item in model){
            if(model[item].id === id){
                index = item;
            }
        }
        if (index > -1) {
            model.splice(index, 1);
        }
    },
    addNote(obj){
        let id= 0;
        for(let index in model){
            if(model[index].id > id){
                id = model[index].id;
            }
        }
        obj.id = id+1;
        model.push(obj)
    },
    getNoteTags(id){
        const tags = this.getNote(id).tags;
        let objTags = [];
        for(let item of tags){
            objTags.push({
                tag: item
            });
        }
        return objTags;
    },
    addNoteTag(id, tags){
        for(let item of model){
            if(item.id === id){
                item.tags = tags;
            }
        }
    },
    filterNoteTag(tag){
        let notes = [];
        for(let item of model){
            for(let _tag of item.tags){
                if(_tag === tag){
                    notes.push(item)
                }
            }
        }
        return notes;
    }

}