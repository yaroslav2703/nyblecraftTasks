const User = require('../../database/models/user');
const addPdfFile = require('../../utils/addPdfFile');


module.exports = async (req, res) => {
    try{
        const firstName = req.body.firstName;
        await User.findOne({where: {firstName: firstName}})
            .then(user=>{
                if(!user){
                    res.status(404).json({state: false})
                }
                else{
                    addPdfFile(User, user);
                    res.status(201).json({state: true})
                }
            }).catch(err=>console.log(err));
    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};