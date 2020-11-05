const file = require('../../storage/index');

const fs = require('fs');


module.exports = async (req, res) => {
    try{

        const {id} = req.body;
        let contents = fs.readFileSync("src/storage/index.json");
        const notes = JSON.parse(contents);
        let note = null;
        for(let item of notes){
            if(item.id === id){
                note = item
            }
        }

        res.status(200).json({message: 'successfully', note: note})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};