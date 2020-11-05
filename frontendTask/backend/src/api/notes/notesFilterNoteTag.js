const file = require('../../storage/index');

const fs = require('fs');


module.exports = async (req, res) => {
    try{

        const {tag} = req.body;
        let contents = fs.readFileSync("src/storage/index.json");
        const notes = JSON.parse(contents);

        let newNotes = [];
        for(let item of notes){
            for(let _tag of item.tags){
                if(_tag === tag){
                    newNotes.push(item)
                }
            }
        }

        res.status(200).json({message: 'successfully', notes: newNotes})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};