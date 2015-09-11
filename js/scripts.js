var findReplace = function(string, replaceWord, newWord) {

  var replaceWords = new RegExp(replaceWord,"gi");
  var newString = '';
  if(string.indexOf(replaceWord) != -1) {
    // newString += replaceWord+ ' does occur in your string';
    newString = string.replace(replaceWords, newWord);
  } else{ newString += replaceWord + ' does not occur in your string'}
  return newString;
};

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var string = $("input#string").val();
    var replaceWord = $("input#replaceWord").val();
    var newWord = $("input#newWord").val();
    var result = findReplace(string, replaceWord, newWord);

    $("#result").text(result);
    $("#results").show();
    event.preventDefault();
  });
});
