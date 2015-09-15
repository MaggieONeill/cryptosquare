var method = function(poem) {
  var newpoem = poem.toLowerCase().replace(/[.',-\/#! $%\^&\*;:{}=\-"_`~()]/g,"").match(/.{1,4}/g);
  var poemLength = newpoem.length;
  var lengthSquareRoot = Math.sqrt(poemLength);
  // return lengthSquareRoot;
  // var poemSplit = newpoem.split("");
  return newpoem;
};

$(document).ready(function() {
  $("form#cryptosquare").submit(function(event){
    var poem = $("input#poem").val();
    var encryptedPoem = method(poem);
    $(".poemResult").text(" ");

    $(".poemResult").text(encryptedPoem);
    $("#result").show();
    event.preventDefault();
  });
});
