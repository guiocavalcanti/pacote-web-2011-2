jQuery(function(){
    // Escondendo todos de uma vez
    $("#uma-vez").click(function(){
      $("div").hide();
    })

    // Escondendo todos de uma vez com efeito de slide
    $("#uma-vez-efeito").click(function(){
      $("div").slideUp();
    })

    // Clonar
    $("div").live("click", function(){
      var elem =$(this).clone();
      $(this).after(elem);
    })

    // Duplicar
    $("#dobrar").click(function(){
      var elems = $("div").clone();
      $("div:last").after(elems);
    })
});
