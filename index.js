
// #1
const findMatching = (array, string) => array.filter(element => element.toLowerCase() === string.toLowerCase());
// #2
const fuzzyMatch = (array, string) => array.filter(element => element[0] === string[0]);
// #3
const matchName = (array, string) => array.filter(element => element.name === string);