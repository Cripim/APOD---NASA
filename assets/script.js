$("form").submit(false);

$("#botao").on("click", function () {
  const date = $("#date").val();
  $.ajax({
    url: (`https://api.nasa.gov/planetary/apod?api_key=8vZlcK1eM7eEp61nDxVBKKofuWrxi47Qxr3CPnUD&date=${date}`),
    type: "GET",
    success: function (resposta) {
      $("#titulo").text(resposta.title);
      $("#texto").text(resposta.explanation);
      if (resposta.media_type == "image") {
        $("#imagem").attr("src", resposta.url);
        $("#video").hide();
        $("#imagem").show();
      } else {
        $("#video").attr("src", resposta.url);
        $("#video").show();
        $("#imagem").hide();
      }
    }, error:function(){
      alert ('deu erro fi')
    }

  });
});
