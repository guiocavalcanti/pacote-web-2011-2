// O .ready espera a DOM, JS e imagens carregarem
$(document).ready(function(){
    var todo = {
      criarElemento : function(dado){
        var $li = $("<li/>");
        var $descricao = $("<span/>", { "class" : "description" });
        $descricao.html(dado.todo.description);
        var $botao = $("<input>", { "class" : "remover", "value" : "Remover" });

        $li.append($descricao);
        $li.append($botao);
        $li.data("todo", dado);

        return $li;
      }
    };

    // Removendo um item da lista
    $(".remover").live('click', function(){
        var $li = $(this).parent();
        var id = $li.data("todo").todo.id;
        var url = "http://todoing.heroku.com/todos/" + id + ".json"

        $.post(url, { "_method" : "delete" }, function(){
            $li.slideUp(function(){
                $(this).remove();
            });
        });
    });

    $("form").submit(function(e){
        var url = "http://todoing.heroku.com/todos.json";
        var dados = $("#description").serialize();

        $.post(url, dados, function(data){
          var $li = todo.criarElemento(data).hide();
          $li.appendTo($("#lista")).slideDown();
        }, "json");

        e.preventDefault();
    });

    $.getJSON("http://todoing.heroku.com/todos.json", function(data){
        // já que data é uma lista de objetos
        for(var i in data){
          var $elemento = todo.criarElemento(data[i]);
          $("#lista").append($elemento);
        }

        $("#carregando").hide();
      }
    );

});
