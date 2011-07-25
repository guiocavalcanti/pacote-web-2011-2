jQuery(function(){

    $("#menu > li > a").click(function(){
        var invisivel = $(this).next().is(":hidden");

        if(invisivel){
          $("#menu > li > ul").slideUp();
          $(this).next().slideDown();
        }
    });
});
