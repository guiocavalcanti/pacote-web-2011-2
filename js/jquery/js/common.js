$(document).ready(function(){
    var nav = $("#container .nav");

    // Esconde sem efeito
    // nav.hide();
    // Mostra com efeito de slide
    // nav.slideDown("slow");
    // Esconde com efeito de fade
    // nav.fadeOut("fast");

    $("#acao").click(function(){
        // mostra se tiver escondido
        $("#lista").toggle();
    });

    var $meuNovoElemento = $("<div/>", { "id" : "nova" }).html("Conteúdo");
    $("#container").after($meuNovoElemento);

    var $novoContainer = $("#container").clone();
    $("body").append($novoContainer);

    // $("#lista").remove();

});
