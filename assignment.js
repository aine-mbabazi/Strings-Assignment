//Extract characters
let word = "extravaganza"
console.log({Character:word[11]});
console.log({Character:word[10]});
console.log({Character:word[9]});
console.log({Character:word[8]});

// Insert String 
let s = 'eat';
const food = "The quick fox jumped over the lazy dog";
let add = `The quick fox jumped ${s} over the lazy dog`;
console.log({add});

//count
const string1 = "The quick brown fox jumps over the lazy dog";
console.log((string1.match(/the/g)).length);
console.log((string1.match(/brown/g)).length);

//question 5
const  wd= 'wonderful';
console.log(wd.toUpperCase());
let comment = 'amazing';
console.log(comment.toLowerCase());
let text = 'undERneath';
console.log(text.toLowerCase());
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
console.log(titleCase('A wonderful world'));


//question 4
const str1= "The pupils are reading in the library";
let substr1 = "the";
console.log(str1.includes(substr1));
let str2= "The child was sitting on the table before it fell";
const substr2 = "sitting";
console.log(str2.includes(substr2));
