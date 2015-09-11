var findReplace = function(string, subString) {
  var searchString = string;
  var replaceWord = subString;
  var output = '';

  if(searchString.indexOf(subString) != -1) {
    output += replaceWord + ' does occur in your string';
  } else{ output += replaceWord + ' does not occur in your string'}
  return output;
}
