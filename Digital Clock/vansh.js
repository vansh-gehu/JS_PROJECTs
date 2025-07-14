const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toUTCString();
},1000)