// PART 1: SHOW A FORTUNE

function showFortune() {


  fetch('/fortune')
    .then(response => response.text())
    .then(responseFortune => {
      document.querySelector('#fortune-text').innerHTML = responseFortune;
    })
  
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;
  // TODO: request weather
  //  with that URL and show the 
  // forecast in #weather-info
  fetch('/weather')
    .then(response => response.json())
    .then(responseForecast => {
      document.querySelector('#weather-info').innerText = responseForecast.forecast
    })


}

document.querySelector('#weather-form').addEventListener('submit', showWeather);
