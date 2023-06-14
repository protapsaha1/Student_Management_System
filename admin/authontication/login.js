import Admin from "./admin.js";

const form = document.getElementById('form')

form.addEventListener('click',function(ev){
    ev.preventDefault()
    const admin = new Admin()
    admin.login(this.elements['inistitueCode'].value,this.elements['password'].value)

})