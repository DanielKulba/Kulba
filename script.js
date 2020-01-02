function updateNow(){ //updates the time and date
    var now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();
    if(minute < 10)
        minute = "0" + minute;
    if(hour >= 12)
    {
        minute += " PM";
        if(hour > 12)
            hour -= 12;
    }
    else
        minute += " AM";
    var time = hour + ":" + minute;
    document.getElementById("time").innerHTML = time;

    months = ["January", "February", "March", "Aprl", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    month = months[now.getMonth()];
    day = days[now.getDay()];
    date = now.getDate();
    if(date == 1 || date == 21 || date ==31)
        date = date + "st";
    else if(date == 2 || date == 22)
        date = date + "nd";
    else if(date == 3 || date == 23)
        date = date + "rd";
    else
        date = date + "th";
    var fullDate = day + ", " + month + " " + date;

        document.getElementById("date").innerHTML = fullDate;
}


function updateLocation(){
    navigator.geolocation.getCurrentPosition(tempAndIcon);
}

function tempAndIcon(pos){
    var request = new XMLHttpRequest();
    request.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=2ee08325cae35c28e394ac303bae06be`, true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        var fahr = (data.main.temp-273.15)*9/5+32;
        document.getElementById("temp").innerHTML = Math.round(fahr);
    }
    request.send();
}


function startup(){
    updateLocation();
    updateNow();
}
setInterval(updateNow, 1000);
