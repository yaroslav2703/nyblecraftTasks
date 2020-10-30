const database = require('./databaseInit');
const user = require('./models/user');


module.exports = () =>{
    const DB = database;
    let User = user;
    DB.sync()
        .then(result=>{
            console.log('Соединение с бд прошло успешно!');
        })
        .catch((err)=> {
            console.log('Ошибка подключения к базе данных!');
            process.exit(1);
        });
};