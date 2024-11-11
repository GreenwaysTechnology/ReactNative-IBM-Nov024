//strings : ""  or '' , or `` or `${}`
let firstName = "Subramanian"
let lastName = 'Murugan'
let fullName = firstName + lastName
//
console.log("Your Name is" + fullName)
console.log('Your Name is' + fullName)
console.log("Your Name is", fullName)
console.log(`Your Name is ${fullName}`)

fullName = `${firstName} ${lastName}`
console.log(`Your Name is ${fullName}`)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)