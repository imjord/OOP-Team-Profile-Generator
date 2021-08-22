

const teamIndexHtml = (data) => { console.log(data[0]); return `

   

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team </title>
    </head>
    <body>
    Manager Name ${data[0].name}
    Manager ID ${data[0].id}
    Manager Email ${data[0].email}
    Manager Office number ${data[0].office}

    </body>
    </html>
`







}









module.exports = teamIndexHtml;