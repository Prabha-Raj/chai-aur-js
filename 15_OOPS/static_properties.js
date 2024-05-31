// static properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static createId(){
        return '234'
    }
}
const hitesh = new User("hitesh")
hitesh.logMe()
// console.log(hitesh.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("Iphone", "ip@phone.com")
iphone.logMe()
// console.log(iphone.createId())






