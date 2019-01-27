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
  