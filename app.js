

const textbox = document.getElementById("Textbox")
const toFaren = document.getElementById("Tofaren")
const tocelsius = document.getElementById("Tocelsius")


let temp

function Convert() {

    if(Tofaren.checked) {

        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;

        

        document.getElementById("Result").textContent = temp
    }

    else if(Tocelsius.checked) {

        temp = Number(textbox.value);
        temp = temp * 5 / 9 - 32;
        
        document.getElementById("Result").textContent = temp
    }
    else{
        document.getElementById("Result").textContent = "Please Select a unit"
    }
    
}

