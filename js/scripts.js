$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var exampleInputName= $("input#exampleInputName").val();
    var exampleInputLast= $("input#exampleInputLast").val();


    $(".exampleInputName").text(exampleInputName);
    $(".exampleInputLast").text(exampleInputLast);

    $("#letter").show();
      });
    });
