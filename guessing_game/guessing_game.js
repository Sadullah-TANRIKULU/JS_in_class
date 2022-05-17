console.log("guessing_game.js is running...");

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// Pseudocode :
// prompt guessNumber
// Math.random
// counter = 5 live
// descending counter, live -= 1
// if guessNumber > randomNumber, down
// if guessNumber < randomNumber, up
// else, congrats!!
// if counter > 0, prompt guessNumber
// else, game over

let continueGame;
do {
    let live = 5;
    
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    do {
        const guessNumber = Number(prompt("enter a number between 0 and 100!"));
        // prompt tan girilen değer default string dir.
        // sayıya çevirmek için Number(), +prompt() veya parseInt() kullanılabilir.
        live -= 1;
        if (guessNumber === randomNumber) {
            console.log(`Congrats!!  🥂 Your ${5 - live}th try.`);
            break;
        } else {
            console.log(`Be careful! You have only ${live} lives!!`) // template literal backtick li kullanım, react ta çok kullanışlı

            if (guessNumber > randomNumber) {
                alert("down ⬇");
            }
            else if (guessNumber < randomNumber) {
                alert("up ⬆");
            }
        }


    } while (live > 0);

    if (live === 0) {
        console.log("Sorry, game over! 😔");
    }

    continueGame = prompt("Do you want to play again? (y/n): ");
} while (continueGame == 'y' || continueGame == 'Y');

console.log("See you next time 😁");





