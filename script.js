function updateNow(){
    var now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();
    if(minute < 10)
        minute = "0" + minute;
    if(hour > 12)
    {
        hour -= 12;
        minute += " PM";
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


setInterval(updateNow, 1000);