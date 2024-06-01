class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    set email(value){
        this._email = value
    }
    get email(){
        return this._email.toUpperCase()
    }

    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase()
    }
}

const hitesh = new User("pr@fb.com", "abs678")
console.log(hitesh.email)
console.log(hitesh.password)


