const pdfMakePrinter = require('pdfmake/src/printer');
const fs = require('fs');


module.exports = (model, obj, docDefinition, successCallback, errorCallback) => {
    try {
        const fontDescriptors = {
            Roboto: {
                normal: 'fonts/Roboto-Regular.ttf',
                bold: 'fonts/Roboto-Medium.ttf',
                italics:  'fonts/Roboto-Italic.ttf',
                bolditalics: 'fonts/Roboto-MediumItalic.ttf'
            }
        };
        const printer = new pdfMakePrinter(fontDescriptors);
        const doc = printer.createPdfKitDocument(docDefinition);

        doc.pipe(
            fs.createWriteStream(`store/${obj.firstName}${obj.lastName}${obj.image}.pdf`).on("error", (err) => {
                errorCallback(err.message);
            })
        );

        doc.on('end', () => {
            successCallback("PDF successfully created and stored", doc);
        });

        doc.end();

    } catch(err) {
        throw(err);
    }
};