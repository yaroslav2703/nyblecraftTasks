const pdf = require('html-pdf');
const fs = require('fs');

const pdfTemplate = require('../../store/template');


module.exports = (obj, successCallback, errorCallback) => {
    try {

        fs.writeFile(`store/img/${obj.firstName}${obj.lastName}.jpg`, obj.image, (error) => {
            if(error) throw error; // если возникла ошибка
        });

        const imageUrl = `${obj.firstName}${obj.lastName}.jpg`;
        pdf.create(pdfTemplate(obj.firstName, obj.lastName, imageUrl)).toFile(`store/pdf/${obj.firstName}${obj.lastName}.pdf`, (err) => {
            if(err) {
                errorCallback('Ошибка создания pdf-файла!');
                return
            }
            successCallback('Файл успешно создан!')

        });
    } catch(err) {
        throw(err);
    }
};