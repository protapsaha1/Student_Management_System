export default class Admin{
    static users = []
    login(inistituteCode,password){
        if (this.inistituteCode === inistituteCode && this.password === password){
            return true
        }
        return false
    }
    signup(inistituteCode,inistituteName,inistituteID,email,password,confirmPassword){
        let flag = false
        if (password === confirmPassword){
            Admin.users.forEach(el=>{
                if (el.inistituteCode === inistituteCode){
                    console.log('Already Registred')
                    flag = true
                    return false
                }
            })
            if (!flag){
                this.inistituteCode = inistituteCode
                this.inistituteName = inistituteName
                this.inistituteID = inistituteID
                this.email = email
                this.password = password
                Admin.users.push(this)
                return true
            }
        }
        return false
    }
}

