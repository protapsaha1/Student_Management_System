import Admin from "./admin.js";

const form = document.getElementById('form')

form.addEventListener('submit',function(ev){
    const admin = new Admin()
    ev.preventDefault();
    [...this.elements].forEach(el=>{
        if (el.type !== 'submit'){
            if(el.value!==""){
                admin.login(this.elements['inistitueCode'].value,this.elements['password'].value)
            }else{
                admin.error("Empty Data!")
            }
        }
    })

})