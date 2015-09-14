var cryptosquare = function(poem) {
var newpoem = poem.toLowerCase().replace(/[.',-\/#! $%\^&\*;:{}=\-"_`~()]/g,"").split("");
return newpoem;

};
