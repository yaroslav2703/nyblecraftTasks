const file = require('../../storage/index');

const fs = require('fs');


module.exports = async (req, res) => {
    try{

        const {title, text} = req.body;
        let contents = fs.readFileSync("src/storage/index.json");
        const notes = JSON.parse(contents);
        let newId= 0;
        for(let index in notes){
            if(notes[index].id > newId){
                newId = notes[index].id;
            }
        }
        notes.push({
            id: newId+1,
            title: title,
            text: text,
            tags: []
        });

        contents = JSON.stringify(notes,null,'\t');
        fs.writeFileSync("src/storage/index.json", contents);


        res.status(200).json({message: 'successfully'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
