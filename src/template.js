// Using a template literal look at module 9 

function generateHTML(data) {
  const html = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Engineer") {
      console.log(data[i])
      html.push(`
       <div id="finalCard">
       <div class="card" id="emp" style="width: 18rem; text-align: center;">
         <div class="card-body">
           <h5 class="card-title">${data[i].getRole()}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${data[i].getName()}</h6>
           <p class="card-text">${data[i].getEmail()}</p>
           <a href="#" class="card-link">${data[i].getGitHub()}</a>
         </div>
       </div>
     </div>
       `)
    }
    if (data[i].getRole() === "Intern") {
      console.log(data[i])
      html.push(`
      <div id="finalCard">
      <div class="card" id="emp" style="width: 18rem; text-align: center;">
        <div class="card-body">
          <h5 class="card-title">${data[i].getRole()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data[i].getName()}</h6>
          <p class="card-text">${data[i].getEmail()}</p>
          <p class="card-text">${data[i].getSchool()}</p>
        </div>
      </div>
    </div>
      `)
    }
    if (data[i].getRole() === "Manager") {
      console.log(data[i])
      html.push(`
      <div id="finalCard">
      <div class="card" id="emp" style="width: 18rem; text-align: center;">
        <div class="card-body">
          <h5 class="card-title">${data[i].getRole()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data[i].getName()}</h6>
          <p class="card-text">${data[i].getEmail()}</p>
          <p class="card-text">${data[i].getOfficeNumber()}</p>
        </div>
      </div>
    </div>
      `)
    }
  }
    console.log(html.join(""))
    return html.join("")
  }
  module.exports = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Module 10</title>
    </head style="margin-top: -10px">
    <div style="background-color: #89cff0">
      <h1 style="font-family: sans-serif; text-align:center" class="theTitle">MY TEAM</h1>
    </div>
    <body>
    ${generateHTML(data)}
          
    
    </body>
    </html>`
  }
