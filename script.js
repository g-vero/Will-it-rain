//Dom elements

const city = document.querySelector('.resultsBox p:nth-of-type(1)');
const temp = document.querySelector('.resultsBox p:nth-of-type(2)');
const desc = document.querySelector('.resultsBox p:nth-of-type(3)');
const locationBox = document.querySelector('.locationBox');
const resultsBox = document.querySelector('.resultsBox');
const btn = document.querySelector('button');

//Select location click event

btn.addEventListener('click', () => {

    //Get input field value(location)        
    let locationInput = document.getElementById('location');
    let location = locationInput.value;

    if(location){

        //Api call

       
    } else {
        alert('Insert location')
    }

});
