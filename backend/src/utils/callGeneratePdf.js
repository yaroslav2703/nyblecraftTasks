const pdf = require('html-pdf');
const fs = require('fs');

const pdfTemplate = require('../../store/template');


module.exports = (obj, successCallback, errorCallback) => {
    try {
        pdf.create(pdfTemplate(obj.firstName, obj.lastName, null)).toFile(`store/pdf/${obj.firstName}${obj.lastName}.pdf`, (err) => {
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