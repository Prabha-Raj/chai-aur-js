//**************** iNHERITANCE IN JS **********************//

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName is : ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const prabha = new Teacher("prabha", "prabh@fb.com", "567ghjj678")
const prabhakar = new User("prabhakar")
prabha.addCourse()
prabhakar.logMe()


