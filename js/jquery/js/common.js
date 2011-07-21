$(document).ready(function(){
    var nav = $("#container .nav");

    // Esconde sem efeito
    nav.hide();
    // Mostra com efeito de slide
    nav.slideDown("slow");
    // Esconde com efeito de fade
    nav.fadeOut("fast");
});
