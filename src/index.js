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
  console.log(data);
}
// temp, tempmax, tempmin, windspeed, uvindex, humidity, feelslike, description, datetime
