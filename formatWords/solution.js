function formatWords(words){
  if (words === null)
    return '';
  let newString = words.filter(Boolean);
  let string = newString.join(', ');
  let boom = string.replace(/,(?=[^,]+$)/, ' and');
  return boom;
}