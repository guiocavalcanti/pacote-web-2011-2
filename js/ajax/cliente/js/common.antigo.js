// O .ready espera a DOM, JS e imagens carregarem

$(document).ready(function(){
    var todo = {
      urlListagem : "http://todoing.heroku.com/todos.json",
      urlCriacao : "http://todoing.heroku.com/todos.json",
      urlRemocao : function(id){
        return "http://todoing.heroku.com/todos/" + id + ".json";
      },
      criarElemento : function(dados){
        var $li = $("<li/>", { "id" : dados.todo.id });
        var $remover = $("<input>", { "class" : "remover",
            "type" : "submit",
            "value" : "Remover" });
        var $descricao = $("<span/>", { "class" : "description"} ).html(dados.todo.description);

        $remover.data("todo" , dados.todo);
        $li.append($descricao);
        $li.append($remover);

        return $li;
      }
    };

    // Criar todo
    $("#criar").click(function(){
        var content = $("#description").serialize();

        $.post(todo.urlCriacao, content, function(data){
            var $todo = todo.criarElemento(data);
            $todo.hide().appendTo($("#lista")).slideDown();
            $("#description").val("").focus();
        }, "json");
    });

    // Remover todo
    $(".remover").live("click", function(){
        var $li = $(this).parent();
        var id = $(this).data("todo").id;

        $.post(todo.urlRemocao(id), { "_method" : "delete" }, function(data){
            $li.slideUp(function(){
                $(this).remove();
            });
        });
    });

    // Listar todos criados
    $.getJSON(todo.urlListagem, function(data){
        $.each(data, function(i, el){
          var $novoEl = todo.criarElemento(el);
          $("#lista").append($novoEl);
        });

        $("#carregando").fadeOut();
    });

});

