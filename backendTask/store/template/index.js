module.exports = (firstName, lastName, imageUrl) => {
    return `
        <!doctype html>
        <html>
           <head>
              <meta charset="utf-8">
              <title>PDF Result Template</title>
              <style>
                 .invoice-box {
                 max-width: 800px;
                 margin: auto;
                 padding: 30px;
                 border: 1px solid #eee;
                 box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                 font-size: 20px;
                 line-height: 24px;
                 font-family: 'Helvetica Neue', 'Helvetica',
                 color: #555;
                 }
                 .margin-top {
                 margin-top: 50px;
                 }
                 .justify-center {
                 text-align: center;
                 }
                 .invoice-box table {
                 width: 100%;
                 line-height: inherit;
                 text-align: left;
                 }
                 .invoice-box table td {
                 padding: 5px;
                 vertical-align: top;
                 }
                 }
              </style>
           </head>
           <body>
              <div class="invoice-box">
                 <table cellpadding="0" cellspacing="0">
                    <tr class="information">
                        <td>
                           First name: ${firstName}
                        </td>
                    </tr>
                     <tr class="information">
                        <td>
                           Last name: ${lastName}
                        </td>
                     </tr>
                     <tr class="information">
                         <td>
                           Image: <img src="file:///D:/nbsoft/backendTask/store/img/${imageUrl}" width="100px" height="100px" alt="нет фото">
                         </td>
                     </tr>
                 </table>
              </div>
           </body>
        </html>
        `;
}