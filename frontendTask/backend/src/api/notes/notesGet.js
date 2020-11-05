const file = require('../../storage/index');

const fs = require('fs');

module.exports = async (req, res) => {
    try{

        let contents = fs.readFileSync("src/storage/index.json");
        const notes = JSON.parse(contents);

        res.status(200).json({message: 'successfully', notes: notes})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
