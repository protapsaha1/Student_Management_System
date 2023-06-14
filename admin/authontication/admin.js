
const error = document.getElementById('error')
export default class Admin{
    static users = []
    error(text){
        error.textContent = text                  
        error.style.opacity = 1
        error.style.cursor = 'text'

        setTimeout(()=>{
            error.style.opacity = 0
            error.style.cursor = 'default'

        },5000)
    }
    login(inistituteCode,password){
        axios.get('http://localhost:3000/users')
        .then( (response)=> {
            // Handle the response data
            response.data.forEach(val=>{
                if (val.inistituteCode === inistituteCode && val.password === password){
                    console.log('Login Successfully')
                    return
                }
                this.error("Invalid Inputs")
                return 
            })
        })
        .catch(function (error) {
            // Handle any errors that occurred during the request
            console.error(error);
        });

        // if (this.inistituteCode === inistituteCode && this.password === password){
        //     return true
        // }
        // return false
    }
    signup(inistituteCode,inistituteName,inistituteID,email,password,confirmPassword){
        let flag = false
        if (password === confirmPassword){
            axios.get('http://localhost:3000/users')
        .then( (response)=> {
            // Handle the response data
            response.data.forEach(val=>{
                console.log(val.inistituteCode, inistituteCode)
                if (val.inistituteCode === inistituteCode){
                    this.error("Already Registred")
                    flag = true
                    return
                }
            })
        })
        .catch(function (error) {
            // Handle any errors that occurred during the request
            console.error(error);
        });
            if (!flag){
                this.inistituteCode = inistituteCode
                this.inistituteName = inistituteName
                this.inistituteID = inistituteID
                this.email = email
                this.password = password
                Admin.users.push(this)
                
                axios.post('http://localhost:3000/users', { 
                    // Request payload (data)
                    inistituteCode:this.inistituteCode,
                    inistituteName:this.inistituteName,
                    inistituteID:this.inistituteID,
                    email:this.email,
                    password:this.password
                })
                    .then(response => {
                    // Handle success
                    console.log(response.data);
                    })
                    .catch(error => {
                    // Handle error
                    console.error(error);
                    });

                return true
            }
        }else{
            this.error("Password Not Match")
            return false
        }
    }
}

