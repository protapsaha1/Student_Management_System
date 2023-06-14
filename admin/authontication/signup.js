import Admin from "./admin.js";
const form = document.getElementById('form')
const data_base = []
form.addEventListener('submit',function(ev){
    ev.preventDefault()
    let flag = false
    const data = {};
    [...this.elements].forEach(el=>{
        if (el.type!=='submit'){
            if (el.value !== ''){
                data[el.name] = el.value
                flag = true
            }
            else{
                console.log('Empty Data')
            return
        }
        }
    })
    if(flag){
        data_base.push(data)
        const admin = new Admin()
        if (admin.signup(data.inistitueCode,data.inistitueName,data.inistitueID,data.emailAddress,data.password,data.confirmPassword)){
            this.reset()
            window.location.href = '/admin/login.html'
            console.log(Admin.users)
            return
        }
        console.log('Password Does not Exist')
    }
})