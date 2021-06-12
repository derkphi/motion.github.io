function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;
    document.getElementById('z').textContent = z;    
}

window.addEventListener("devicemotion", handleMotionEvent, true);
