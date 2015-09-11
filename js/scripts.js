var findReplace = function(string, replaceWord, newWord) {

  var output = '';
  var newString = '';

  if(string.indexOf(replaceWord) != -1) {
    // output += replaceWord+ ' does occur in your string';
    newString = string.replace(replaceWord, newWord);
  } else{ newString += replaceWord + ' does not occur in your string'}
  return newString;
  // return newString;

}
