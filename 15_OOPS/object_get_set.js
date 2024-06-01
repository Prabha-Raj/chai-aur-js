const User = {
    _email: 'pr@raj.com',
    _password: 'abc',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this.password = value
    },

}



console.log(User._email)
const tea = Object.create(User)
console.log(tea.email)
console.log(tea.password)

