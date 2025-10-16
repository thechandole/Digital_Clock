const clock = document.querySelector(".clock");
const clockStart = new Date().getTime();

    
   setInterval(function(){
    const currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString();

   }, 1000);  // just to keep the interval running javascript ke events control karta he 