import "./reset.css";
import "./styles.css";

fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/north%20carolina?unitGroup=us&include=current&key=WFBUJE4N5UY2XA5TGQBQC5VK4&contentType=json",
  {
    method: "GET",
    headers: {},
  }
)
  .then((response) => {
    return response.json();
  })
  .then(function (response) {
    processData(response);
  })
  .catch((err) => {
    console.error(err);
  });

function processData(data) {
  displayData(data);
  console.log(data);
}

function displayData(data) {
  const temp = document.querySelector(".temp");
  const tempMin = document.querySelector(".temp-min");
  const tempMax = document.querySelector(".temp-max");
  const feelsLike = document.querySelector(".feels-like");
  const uv = document.querySelector(".uv");
  const humidity = document.querySelector(".humidity");
  const description = document.querySelector(".description");
  const datetime = document.querySelector(".datetime");
  temp.textContent = data.days[0].temp;
  tempMin.textContent = data.days[0].tempmin;
  tempMax.textContent = data.days[0].tempmax;
  feelsLike.textContent = data.days[0].feelslike;
  uv.textContent = data.days[0].uvindex;
  humidity.textContent = data.days[0].humidity;
  description.textContent = data.days[0].description;
  datetime.textContent = data.days[0].datetime;
}
