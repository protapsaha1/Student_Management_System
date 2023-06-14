const qr = require('qrcode')

// const data = {
//     name:"Rafe",
//     age:"20",
//     roll:672641,
//     fatherName:'Golam Farooq',
//     motherName: "Rogi Begum",
//     address: "Jamalpur",
//     img: './static/download.png'
// }
const data = {
    name:"Rafe Uddaraj",
    age:"20",
    roll:672641,
    fatherName:'Golam Farooq',
    motherName: "Rogi Begum",
    address: "Jamalpur",
    img: './static/download.png'
}

let str = ""

for(let [key,value] of Object.entries(data)){
    str += `${key}: ${value}\n`
}

qr.toFile('./rafe.png',str,(err,code)=>{
    if (err)console.log(err)
    
})