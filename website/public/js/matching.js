let baby = 'i';
let sleep = 'i';
let social = 'i';
let read = 'i';
let acces = 'i';

function valid_options(ba, re, sp, sl, ac) {
    var newNode = document.createElement("P");
    var textNode = document.createTextNode("The option(s) you chose are invalid");
    if(ba == 'i' || re == 'i' || ac == 'i' || sp == 'i')
    {
        newNode.appendChild(textNode);
        document.getElementById("submit-area").appendChild(newNode);
    }
    else
    {
        baby = ba;
        sleep = sp;
        read = re;
        social = sl;
        acces = ac;
        window.location = "seat_chooser.html";
    }
        
}