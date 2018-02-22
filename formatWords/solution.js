function formatWords(words){
  if (words === null) 
    return '';
  let newString = words.filter(Boolean);
  console.log(newString);
  let string = newString.join(', ');
  console.log(string);
  string.replace(/,(?=[^,]+$)/, ' and');
  console.log(string);
  return string;
}