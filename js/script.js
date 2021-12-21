document.addEventListener("DOMContentLoaded", function() {
    
    const CHARS = ['!', '\"', '#', '$','%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '~', '`', '{', '|', '}', '_'];

    const passGenBtn = document.querySelector('.generator__button');
    const passArea = document.querySelector('.generator__password');

    function randLetterGen(startASCII){
        let num = randNumGen(25);
        return String.fromCharCode(num + startASCII);
    }

    function randNumGen(max, min = 0){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generatePassword(){
        let password = Array.from({length: 8});

        let randUppercase = randLetterGen(65);
        let randLowercase = randLetterGen(97);
        let randSpecialChar = CHARS[randNumGen(CHARS.length)];
        let randNumeric = randNumGen(9);

        for(let i = 0; i < password.length; i++){
            let randNum = randNumGen(126, 33);
            password[i] = String.fromCharCode(randNum);
        }

        let insertIdx;

        insertIdx = randNumGen(7); 
        password.splice(insertIdx, 0, randUppercase); 

        insertIdx = randNumGen(8);
        password.splice(insertIdx, 0, randLowercase); 

        insertIdx = randNumGen(9); 
        password.splice(insertIdx, 0, randSpecialChar); 

        insertIdx = randNumGen(10);
        password.splice(insertIdx, 0, randNumeric); 

        return password.join("");
    }

    passGenBtn.addEventListener('click', () => {
        let pass = generatePassword();
        passArea.firstElementChild.textContent = pass;
    });
});