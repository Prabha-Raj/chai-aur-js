const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const msg = document.querySelector('#msg')
    console.log(height,weight)
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid Weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if (bmi < 18.6){
            msg.innerHTML = `You are 'Under weight' !`
        }else if (bmi >= 18.6 && bmi <=24.9){
            msg.innerHTML = `Your 'weight' is Normal !`
        }else if(bmi > 24.9){
            msg.innerHTML = `You are 'Over weight' !`
        }
        results.innerHTML =  `${bmi}`
    }
})