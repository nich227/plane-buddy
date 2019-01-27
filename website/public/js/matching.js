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
        console.log("HERE BIT" + uid);
        if(baby != 'i')
            pushData(baby);
        else if(social != 'i')
            pushData(social);
        else if(acces != 'i')
            pushData(acces);
            console.log("here"); 
        window.location = "seat_chooser.html";
        console.log("here");
    }
        
}

/*
pushData(str){
    var database = firebase.database();
    var ref = database.ref('users');
    ref.on('value', gotData, errData);
    //console.log(arr);
    var data = { //set data to push, get from usr choice
      usr: uid, 
      resp: "test"//actual response go here
    }
    console.log(ref.push(data)); 
}*/