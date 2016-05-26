$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var exampleInputName2= $("input#exampleInputName2").val();
    var exampleInputLast2= $("input#exampleInputLast2").val();


    $(".exampleInputName2").text(exampleInputName2);
    $(".exampleInputLast2").text(exampleInputLast2);

    $("#letter").show();

    event.preventDefault();
      });
    });
