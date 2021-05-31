function SnakeCase(str) { 
  // to lower case
  // replace special char with underscore 
  str = str.toLowerCase().replace(/\W/g, '_')
  return str; 

}