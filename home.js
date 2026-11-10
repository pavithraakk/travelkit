const currentLocation = document.getElementById('currentLocation');
const destination = document.getElementById('destination');
const currentError = document.getElementById('current-error');
const destinationError = document.getElementById('destination-error');
const continueBtn = document.getElementById('continue-btn');

continueBtn.addEventListener('click',function(){
     console.log("button clicked");
     console.log(currentLocation.value);
     console.log(destination.value);
    const current=currentLocation.value.trim();
    const dest=destination.value.trim();
    if(current==""){
        currentError.textContent="Current location is required";
    }
    if(dest==""){
        destinationError.textContent="Destination is required";
    }


});