let baby = 'i';
let social = 'i';
let acces = 'i';

function valid_options(ba, sl, ac) {
    var newNode = document.createElement("P");
    var textNode = document.createTextNode("The option(s) you chose are invalid");
    if(ba == 'i' && ac == 'i' && sl == 'i')
    {
        newNode.appendChild(textNode);
        document.getElementById("submit-area").appendChild(newNode);
    }
    else
    {
        baby = ba;
        social = sl;
        acces = ac;
        
        if(baby != 'i')
            pushData(baby);
        else if(social != 'i')
            pushData(social);
        else if(acces != 'i')
            pushData(acces);
        window.location = "seat_chooser.html";
    }
        
}