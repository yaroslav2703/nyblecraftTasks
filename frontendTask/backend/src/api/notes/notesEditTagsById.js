const file = require('../../storage/index');

const fs = require('fs');


module.exports = async (req, res) => {
    try{

        const {id, tags} = req.body;
        let contents = fs.readFileSync("src/storage/index.json");
        const notes = JSON.parse(contents);

        for(let item of notes){
            if(item.id === id){
                item.tags = tags;
            }
        }

        contents = JSON.stringify(notes,null,'\t');
        fs.writeFileSync("src/storage/index.json", contents);


        res.status(200).json({message: 'successfully'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};