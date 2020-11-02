const fs = require('fs');

const generatePdf = require('./callGeneratePdf');


module.exports = (model, obj) => {

    generatePdf(obj, (response) => {
        console.log(response);
        const pdfData = fs.readFileSync(`store/pdf/${obj.firstName}${obj.lastName}.pdf`);

        model.update(
            {
                pdf: pdfData
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