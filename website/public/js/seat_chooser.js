$('.dot').mouseenter(function(){
    $(this).fadeTo( 100 , 0.9, 'linear', function() {
        // Animation complete.
      $( this ).css('border-radius', '0%');
      });
    });
  
  $('.dot').mouseenter(function(){
   $(this).css({background:'#20B2AA'});
  
    });
  
  $(".dot").click(function(){
  $(this).animate({borderRadius:'10px'});
      });
  
  $('.dot').click(function(){
   $(this).css({background:'#66CDAA'});
  
    });
  function buildPlaneSeats(array){
    //   for(var row=0; row<29; row++){
    //       for(var seat=0; seat<5;seat++){
    //         var newNode = document.createElement("P");
    //         var textNode = document.createTextNode(array[row][seat]);
    //         newNode.appendChild(textNode);
    //     document.getElementById("print-area").appendChild(newNode);
    //     console.log("Here");
    //       }
    //   }

    // for(var i=0; i<array.length; i++){
    //     if (i%6==0){
    //         print('\n');
    //     }
    //     print(array[i][0] + '\t')
    // }

    for(var i=0; i<6*29; i++){
        if (i%6==0){
            var newNode = document.createElement("P")
            // var textNode = document.createTextNode("newOne")
            // newNode.appendChild(textNode)
        }
        var textNode = document.createTextNode(array[i][0] + '\t')
        newNode.appendChild(textNode);
        document.getElementById("print-area").appendChild(newNode);
    }
    
    // for(var row=0; row<29; row++){
    //     var newNode = document.createElement("P");
    //     var textNode = document.createTextNode(array[row][0]);
    //     newNode.appendChild(textNode);
    //     document.getElementById("print-area").appendChild(newNode);
    //     console.log("Here");
    // }


}