
var api_key = "0c5970c54598d65c0722070b9fc69b25";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {

            var json = JSON.parse(this.responseText);

            document.getElementById("row1").innerHTML = "City: ";
            row1.setAttribute("style", "font-weight:bold");
            document.getElementById("row2").innerHTML = json.name;
            document.getElementById("row3").innerHTML = "Longitude: ";
            row3.setAttribute("style", "font-weight:bold");
            document.getElementById("row4").innerHTML = json.coord.lon;
            document.getElementById("row5").innerHTML = "Latitude: ";
            row5.setAttribute("style", "font-weight:bold");
            document.getElementById("row6").innerHTML = json.coord.lat;
            document.getElementById("row7").innerHTML = "Sunrise: ";
            row7.setAttribute("style", "font-weight:bold");
            var dtSunrise = new Date((json.sys.sunrise)*1000);
            document.getElementById("row8").innerHTML = dtSunrise;
            document.getElementById("row9").innerHTML = "Sunset: ";
            row9.setAttribute("style", "font-weight:bold");
            var dtSunset = new Date((json.sys.sunrise)*1000);
            document.getElementById("row10").innerHTML = dtSunset;
            document.getElementById("row11").innerHTML = "Weather: ";
            row11.setAttribute("style", "font-weight:bold");
            document.getElementById("row12").innerHTML = json.weather[0].main;
            document.getElementById("row13").innerHTML = "Description: ";
            row13.setAttribute("style", "font-weight:bold");
            document.getElementById("row14").innerHTML = json.weather[0].description;
            document.getElementById("row15").innerHTML = "Visibility: ";
            row15.setAttribute("style", "font-weight:bold");
            if(json.weather[0].main=="Clear")
            {
                document.getElementById("row16").innerHTML = "Good";
            }
            else
            {
                document.getElementById("row16").innerHTML = "Bad";
            }
            document.getElementById("row17").innerHTML = "Temperature: ";
            row17.setAttribute("style", "font-weight:bold");
            document.getElementById("row18").innerHTML = ((json.main.temp) - 272.15).toFixed(2)+" Celsius";
            document.getElementById("row19").innerHTML = "Pressure: ";
            row19.setAttribute("style", "font-weight:bold");
            document.getElementById("row20").innerHTML = json.main.pressure+"hPa";
            document.getElementById("row21").innerHTML = "Humidity: ";
            row21.setAttribute("style", "font-weight:bold");
            document.getElementById("row22").innerHTML = json.main.humidity+"%";
            document.getElementById("row23").innerHTML = "Min Temp: ";
            row23.setAttribute("style", "font-weight:bold");
            document.getElementById("row24").innerHTML = ((json.main.temp_min) - 272.15).toFixed(2)+" Celsius";
            document.getElementById("row25").innerHTML = "Max Temp: ";
            row25.setAttribute("style", "font-weight:bold");
            document.getElementById("row26").innerHTML = ((json.main.temp_max) - 272.15).toFixed(2)+" Celsius";
            document.getElementById("row27").innerHTML = "Clouds: ";
            row27.setAttribute("style", "font-weight:bold");
            document.getElementById("row28").innerHTML = json.clouds.all+"%";
            document.getElementById("row29").innerHTML = "Just a small tip: ";
            row29.setAttribute("style", "font-weight:bold");
            if((((json.main.temp_max) - 272.15).toFixed(2))>=29.00 && (json.clouds.all)<=10)
            {
                document.getElementById("row30").innerHTML = "It's too hot outside.";
            }
            else if((((json.main.temp_max) - 272.15).toFixed(2))<20.00 && (json.clouds.all)<=10)
            {
                document.getElementById("row30").innerHTML = "It's cold outside. Kindly carry a jacket.";
            }
            else if((((json.main.temp_max) - 272.15).toFixed(2))<20.00 && (json.clouds.all)>10)
            {
                document.getElementById("row30").innerHTML = "It's cold outside, kindly carry a jacket. It might rain also, so please carry an umbrella too.";
            }
            else if((json.clouds.all)>10)
            {
                document.getElementById("row30").innerHTML = "Please carry an umbrella. It might rain today.";
            }
            else
            {
                document.getElementById("row30").innerHTML = "It's pleasant outside. Enjoy your day.";
            }

            
        }
    };
    xhr.send(null);
}
