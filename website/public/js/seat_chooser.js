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
      for(var row=0; row<29; row++){
          for(var seat=0; seat<5;seat++){
            var newNode = document.createElement("P");
            var textNode = document.createTextNode(array[row][seat]);
            newNode.appendChild(textNode);
        document.getElementById("print-area").appendChild(newNode);
        console.log("Here");
          }
      }
  }