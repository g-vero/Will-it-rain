//Dom elements

const city = document.querySelector('.resultsBox p:nth-of-type(1)');
const temp = document.querySelector('.resultsBox p:nth-of-type(2)');
const desc = document.querySelector('.resultsBox p:nth-of-type(3)');
const locationBox = document.querySelector('.locationBox');
const resultsBox = document.querySelector('.resultsBox');
const btn = document.querySelector('button');

//Select location click event

btn.addEventListener('click', () => {

    
    //Reset results

    resultsBox.style.bottom = '0';
    resultsBox.style.opacity = '0';

    //Get input field value(location)        
    let locationInput = document.getElementById('location');
    let location = locationInput.value;

    if(location){

        //Api call

        const xhr = new XMLHttpRequest;

        const cors = 'https://cors-anywhere.herokuapp.com/';
        const apiKey = YOUR_API_KEY;
        const url = `${cors}api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;

        xhr.open(GET, url, true);

        xhr.onload = () => {

            const res = JSON.parse(xhr.response);

            if (xhr.status >= 200 && xhr.status < 400){
                
                const iconId = res.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
                document.getElementById('icon').src = `${iconUrl}`;

                resultsBox.style.bottom = '5%';
                resultsBox.style.opacity = '1';

                city.innerHTML = `${res.name}`;
                desc.innerHTML = `${res.weather[0].description}`;
                temp.innerHTML = `${res.main.temp}°C`;

                locationInput.value = '';

            } else {
                console.log(`Error ${request.status}`);
            }
        };

        xhr.send();


    } else {
        alert('Insert location')
    }

});
