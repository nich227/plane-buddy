let baby = 'i';
let social = 'i';
let acces = 'i';

function valid_options(ba, so, ac) {
    var newNode = document.createElement("P");
    var textNode = document.createTextNode("The option(s) you chose are invalid");
    if(ba == 'i' || so == 'i' || ac == 'i')
    {
        newNode.appendChild(textNode);
        document.getElementById("submit-area").appendChild(newNode);
    }
    else
    {
        baby = ba;
        social = so;
        acces = ac;
        window.location = "seat_chooser.html";
    }
        
}