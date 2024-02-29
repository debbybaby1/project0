var target_milli= new Date("Mar 5, 2024 11:30").getTime();
function countdown() {
   var now_milli = new Date().getTime();
   var remaining_secs = Math.floor( (target_milli - now_milli ) / 1000);

   var days = Math.floor(remaining_secs / (3600 * 24));
   var hours = Math.floor((remaining_secs % (3600 * 24)) / 3600);
   var mins = Math.floor((remaining_secs % 3600) / 60);
   var secs = Math.floor(remaining_secs % 60);

   document.querySelector("#days").innerHTML = days;
   document.querySelector("#hours").innerHTML = hours;
   document.querySelector("#mins").innerHTML = mins;
   document.querySelector("#secs").innerHTML = secs;
}

setInterval(countdown, 1000);