// program to generate random number
const randNum = Math.ceil(Math.random() * 10);

console.log(randNum);


// program to generate random strings
// declare all characters
// use all characters length to get a random number
// reach each character with for loop
// up to length you want loop it
// give how many loop times you want and get a random string
// 

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function genString(length) {
    let result = ``;
    for (let i = 0; i < length; i++) {
        let charlength = characters.length;
        result += characters.charAt(Math.ceil(Math.random() * charlength));
    }
    return result;
    
}

console.log(genString(9));




