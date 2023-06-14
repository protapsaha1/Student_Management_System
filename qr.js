const qr = require('qrcode')

const data = {
    name:"Rafe",
    age:"20"
}

let str = ""

for(let [key,value] of Object.entries(data)){
    str += `${key}: ${value}\n`
}

qr.toFile('./rafe.png',str,(err,code)=>{
    if (err)console.log(err)
    
})