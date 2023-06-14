import Admin from "./admin.js";

const form = document.getElementById('form')

form.addEventListener('click',function(ev){
    ev.preventDefault()
    const users = Admin.users
    console.log(users)
})