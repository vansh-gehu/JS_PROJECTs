const form = document.querySelector('form')
//If we write here empty values will be given out 
form.addEventListener('submit',function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))
    if (height == '' || height < 0 || isNaN(height) ) {
        results.innerHTML = `pls give a valid height ${height}`;
    }
    else if (weight == '' || weight < 0 || isNaN(weight) ) {
        results.innerHTML = `pls give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) /10000) ).toFixed(2);
        // Show the results 
        results.innerHTML = `<span> ${bmi}</span>`
    } 
    
})