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
        for(let item in model){
            if(model[item].id > id){
                id = model[item].id;
            }
        }
        obj.id = id+1;
        model.push(obj)
    }

}