// O .ready espera a DOM, JS e imagens carregarem
$(document).ready(function(){
    // ".compras > li:odd"
    // $(".compras > li:even").addClass("espacamento");

    var botao = $("#acao").clone();
    $("body").append(botao);

    var link = $("<a/>", { "class" : "novo-elemento", "href" : "#" });
    link.html("Elemento criado em runtime");
    $("body").append(link);

    $("#acao, .novo-elemento").live('click', function(){
      $(".compras > li:even").addClass("selecionado");
      $(".compras > li:not(.selecionado)").hide();
      $(".compras > li:not(:hidden)").addClass("espacamento");
    });


    /*
    $("#acao").toggle(function(){
        $(".compras > li:even").addClass("selecionado");
        $(".compras > li:not(.selecionado)").hide();
        $(".compras > li:not(:hidden)").addClass("espacamento");
      },
      function(){
        $("li:hidden").show();
        $("li.espacamento").removeClass("espacamento");
    });
    */
});
