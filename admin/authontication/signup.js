import Admin from "./admin.js";
const form = document.getElementById('form')
const data_base = []
form.addEventListener('submit',function(ev){
    ev.preventDefault()
    let flag = false
    let blank = true
    const admin = new Admin()
    const data = {};
    [...this.elements].forEach(el=>{
        if (el.type!=='submit'){
            if (el.value !== ''){
                data[el.name] = el.value
                flag = true
                blank = false
            }
            else{
                console.log('Empty Data')
                return
        }
        }
    })
    if(blank){
        admin.error('Empty Data Founded')
    }
    if(flag){
        data_base.push(data)
        if (admin.signup(data.inistitueCode,data.inistitueName,data.inistitueID,data.emailAddress,data.password,data.confirmPassword)){
            this.reset()
            window.location.href = '/admin/login.html'
            console.log(Admin.users)
            return
        }else{
            admin.error("Password Does not match")
        }

    }
})