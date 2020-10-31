const pdfMakePrinter = require('pdfmake/src/printer');
const fs = require('fs');

const generatePdf = require('./callGeneratePdf');


module.exports = (model, obj) => {
    const  docDefinition  =  {
        content : [ `firstName: ${obj.firstName}; lastName: ${obj.lastName}; image: ${obj.image};` ]
    } ;

    generatePdf(model, obj, docDefinition, (response, doc) => {
        console.log(response);

        model.update(
            {
                pdf: doc
            },
            {
                where: {
                    id: obj.id
                }
            }
        ).catch(err=>console.log(err));

    }, (error) => {
        console.log(error)
    });

};