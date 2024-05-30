const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch Promise One")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promis One is resolved")
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch Promise Two")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise Two is resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"chai",email:'chai@examle.com'})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        // let error = false
        if(!error){
            resolve({username: "Prabhakar", password: "13456"})
        }else{
            reject("ERROR: Something went wrong!")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("finaly is Alwayse executed promise resolved ether rejected")
}
)
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = true
        let error = false
        if(!error){
            resolve({username: "javascript", password: "10300456"})
        }else{
            reject("ERROR:In JS Something went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://randomuser.me/api/')
        // console.log(typeof response)
        // console.log(response)
        const jsonResponse = await response.json()
        // console.log(typeof jsonResponse)
        console.log(jsonResponse)
    } catch (error) {
        console.log("ERR : ",error)
    }
}
// getAllUsers()

fetch('https://randomuser.me/api/').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})







