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

        const cors = 'https://cors-anywhere.herokuapp.com/';
        const apiKey = YOUR_API_KEY;
        const url = `${cors}api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;

        fetch(url)
            .then(res => {
                if(res.ok){
                    return res.json();
                } else {
                    throw Error(`Request rejected with status ${res.status}`);
                }
            
            })
            .then(data => {
                //console.log(data);

                const iconId = data.weather[0].icon;
                    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
                    document.getElementById('icon').src = `${iconUrl}`;

                    resultsBox.style.bottom = '5%';
                    resultsBox.style.opacity = '1';

                    city.innerHTML = `${data.name}`;
                    desc.innerHTML = `${data.weather[0].description}`;
                    temp.innerHTML = `${data.main.temp}°C`;

                    locationInput.value = '';
            })
            .catch(err => {
                console.log(err)
            })

       
    } else {
        alert('Insert location')
    }

});
