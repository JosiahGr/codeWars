function abbrevName(name){
  let aName = name.split(' ');
  return (aName[0][0] + '.' + aName[1][0]).toUpperCase();
}