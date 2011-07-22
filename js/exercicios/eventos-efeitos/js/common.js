$(document).ready(function(){
    // Esconde todos sem efeito
    $("#uma-vez").click(function(){
        $("div").hide();
    });

    $("#uma-vez-efeito").click(function(){
        $("div").slideUp();
    });

    $("#dobrar").click(function(){
        var $clonados = $("div").clone().addClass("clonado");
        $("div:last").after($clonados);
    });

    $("#resetar").click(function(){
        $(".clonado").remove();
        $("div:not(.clonado)").show();
        //$("div:hidden").show();
        // Uma outra forma de voltar p/ o estado inicial
        // window.location.reload();
    });

    // Utilizado p/ detectar eventos em el. que vão
    // ser criados
    /*
    $("#fade").live("click", function(){
        console.log("teste");
    });

    var $novoLink = $("<a/>", { "href" : "#", "id" : "fade" });
    $novoLink.html("Esconder com efeito");

    $("#resetar").after($novoLink);
    */



});
