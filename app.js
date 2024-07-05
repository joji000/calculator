const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";

}

function calaulate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'ERROR!!';
    }

}