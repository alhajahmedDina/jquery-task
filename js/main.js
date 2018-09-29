$( document ).ready(function() {
    $("#signInBtn").click(function(){
      $(".popup").show();
      event.preventDefault();
      //$(".popup").fadeIn(2000);
    });
    $(".leftSide .submitBtn").click(function(){
      $(".popup").hide();
      event.preventDefault();    
     // $(".popup").fadeOut(2000);
    }); 
    
    $(".popup").click(function(){
      $(this).hide();
      event.preventDefault();    
     // $(this).fadeOut(2000);
    }); 

});