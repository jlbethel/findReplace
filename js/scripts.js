var findReplace = function(string, replaceWord, newWord) {

  var replaceWords = new RegExp(replaceWord,"gi");
  var newString = '';
  if(string.indexOf(replaceWord) != -1) {
    // newString += replaceWord+ ' does occur in your string';
    newString = string.replace(replaceWords, newWord);
  } else{ newString += replaceWord + ' does not occur in your string'}
  return newString;
}
