
const hint = document.getElementById('Hint');
const Guess = document.getElementById('Guess');
const Guesstext = document.getElementById('Guesses');
const Hintone = document.getElementById('firsthint');
const Hinttwo = document.getElementById('secondhint');
const Hintthree = document.getElementById('thirdhint');
const Odd_Even = document.getElementById('Odd/Even');
const count = document.getElementById('count');
const Odd_Even_Label = document.getElementById('Odd/Even/Label');
const Guess1 = document.getElementById('item1');
const Guess2 = document.getElementById('item2');
const Guess3 = document.getElementById('item3');
const Guess4 = document.getElementById('item4');
const TextCont = document.getElementById('TextContainer')
const BtnCont = document.getElementById('Btncontainer')
let popup = document.getElementById('popup');
const hints = document.getElementById('hints');


const lineBreak = document.createElement("br");
document.getElementById('Check').onclick = function openpopup(){
    popup.classList.remove('open-popup');
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    TextCont.classList.toggle('active');
    BtnCont.classList.toggle('active');
    hints.classList.toggle('active');
}


document.getElementById('restartbutton').onclick = function(){
    hints.classList.remove('ThirdHint');
    hints.classList.remove('Gameover');
    Startgame()
};

function Startgame(){
    Hintthree.textContent = 'Hint 3'
    Hinttwo.textContent = 'Hint 2'
    Hintone.textContent = 'Hint 1'
    count.textContent = 'Guess a number between 1 and 100'
    let odd = false
    let even = false
    let Hint1 = false
    let Hint2 = false
    let Hint3 = false;
    let GuessOne = false
    let GuessTwo = false
    let GuessThree= false
    let Guessfour = false
    let Guesses = 4
    hint.textContent = '';
    Guess.value = '';
    Guess1.textContent = 'Guess 1:';
    Guess1.append(document.createElement("br"));
    Guess2.textContent = 'Guess 2:';
    Guess2.append(document.createElement("br"));
    Guess3.textContent = 'Guess 3:';
    Guess3.append(document.createElement("br"));
    Guess4.textContent = 'Guess 4:';
    Guess4.append(document.createElement("br"));
    Guesstext.textContent = `You have ${Guesses} Guesses left`
    const Randnum = Math.floor(Math.random() * 100) + 1
    if (Randnum % 2 == 1){
        odd = true
    }else{
        even = true
    }
    console.log(Randnum)
    document.getElementById('textbutton').onclick = function(){
        if (GuessOne == false && Guesses == 4){
            Guess1.append(Guess.value, document.createElement("br"));
            GuessOne = true;
        };
        if (GuessOne == true && Guesses == 3){
            Guess2.append(Guess.value, document.createElement("br"));
            GuessTwo = true;
        };
        if (GuessTwo == true && Guesses == 2){
            Guess3.append(Guess.value, document.createElement("br"));
            GuessThree = true;
        };
        if (GuessThree == true && Guesses == 1){
            Guess4.append(Guess.value, document.createElement("br"));
            Guessfour = true;
        };
        if (Guess.value < Randnum && Guesses > 0) { 
            hint.textContent = 'Too Low, Try again';
            Guess.value = ''
            Guesses -= 1
            Guesstext.textContent = `You have ${Guesses} Guesses left`
        }
        if (Guess.value > Randnum && Guesses > 0) { 
            hint.textContent = 'Too High, Try again';
            Guess.value = ''
            Guesses -= 1
            Guesstext.textContent = `You have ${Guesses} Guesses left`
        }
        if (Guess.value == Randnum){
            count.textContent = `You Win! The number was ${Randnum}`
            Guesstext.textContent = `Press Restart to play again!`
            hint.textContent = '';
            Guess.value = ''
        }
        if (Hint1 == false){
            if (Randnum % 2 == 0){
                Hintone.textContent = 'Hint: Even';
                console.log(Randnum.value % 2);
                Guess.value = ''
                even = true
                Hint1 = true
                if (Hint1 == true){
                    document.getElementById('firsthint').onclick = function(){
                        let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                        console.log(Hint1)
                        let num = 0;
                        const array = [];
                        for (let i = 1; i < 102; i++) {
                            if((i % 2) == 0){
                                num +=2;
                                array.push(num);
                                // evennums.push['FML'];
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The even numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                    };
                };
                
            }
            if (Randnum % 2 >= 1){
                Hintone.textContent = 'Hint: Odd';
                Hint1 = true
                odd = true
                Guess.value = ''
                if (Hint1 == true){
                    document.getElementById('firsthint').onclick = function(){
                        let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                        console.log(Hint1)
                        let num = 0;
                        const array = [];
                        for (let i = 1; i < 100; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                                // evennums.push['FML'];
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The odd numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                    };
                };
                
            };
            return;
        }else if (Hint1 == true && Hint2 == false){ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (Randnum < 50){
                Hinttwo.textContent = 'Lower than 50'
                Hint2 = true
                Guess.value = ''
                if (Hint1 == true && Hint2 == true){
                    document.getElementById('secondhint').onclick = function(){
                        let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                        if(odd == true){
                        console.log(Hint1)
                        let num = 0;
                        const array = [];
                        for (let i = 1; i < 50; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                                // evennums.push['FML'];
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The possible odd are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numbers are: ${array}`);
                    }else if(even == true){
                        let num = 0;
                        const array = [];
                        for (let i = 0; i < 24; i++) {
                            num += 2;                                    
                            array.push(num);
                                // evennums.push['FML'];
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible numbers are ';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                    };

                    };
                };
                return;
            };
            if (Randnum > 50){
                Hinttwo.textContent = 'Greater than 50'
                Hint2 = true
                Guess.value = ''
                if (Hint1 == true && Hint2 == true){
                    document.getElementById('secondhint').onclick = function(){
                        let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                        if(odd == true){
                        console.log(Hint1)
                        let num = 50;
                        const array = [];
                        for (let i = 1; i < 50; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible odd Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                    }else if(even == true){
                        let num = 50;
                        const array = [];
                        for (let i = 0; i < 24; i++) {
                            num += 2;                                    
                            array.push(num);
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible numbers are ';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                    };

                    };
                };
                return;
            };
        }else if(Hint1 == true && Hint2 == true){
            if(Randnum >= 75){
                Hintthree.textContent = 'Greater than 75'
                Hint3 = true
                Guess.value = ''
                document.getElementById('thirdhint').onclick = function(){
                    let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                    if (odd == true){
                        let num = 74;
                        const array = [];
                        for (let i = 1; i < 26; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible odd Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                }else if(even == true){
                    let num = 74;
                    const array = [];
                    for (let i = 1; i < 14; i++) {
                        num += 2;
                        if((num % 2) == 0){                                    
                            array.push(num);
                        };
                    };
                    Odd_Even.textContent = array;
                    Odd_Even_Label.textContent = 'The Possible Even Numbers are';
                    popup.classList.add('open-popup');;
                    console.log(`The even numebrs are: ${array}`);
                };
            };
            }if(Randnum <= 25){
                Hintthree.textContent = 'Less than 25'
                Hint3 = true
                Guess.value = ''
                document.getElementById('thirdhint').onclick = function(){
                    let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                    if (odd == true){
                        let num = 0;
                        const array = [];
                        for (let i = 1; i < 26; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible odd Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                }else if(even == true){
                    let num = 74;
                    const array = [];
                    for (let i = 1; i < 14; i++) {
                        num += 2;
                        if((num % 2) == 0){                                    
                            array.push(num);
                        };
                    };
                    Odd_Even.textContent = array;
                    Odd_Even_Label.textContent = 'The Possible Even Numbers are';
                    popup.classList.add('open-popup');;
                    console.log(`The even numebrs are: ${array}`);
                };
            };
            }else if(Randnum > 25 && Randnum < 50){
                Hintthree.textContent = 'Above 25'
                Hint3 = true
                Guess.value = ''
                console.log("FML")
                odd = true
                document.getElementById('thirdhint').onclick = function(){
                    let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                    if (odd == true){
                        let num = 25;
                        const array = [];
                        for (let i = 1; i < 26; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible odd Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                };
                    if(even == true){
                        let num = 25;
                        const array = [];
                        for (let i = 1; i < 26; i++) {
                            num += 2;
                            if((num % 2) == 0){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible Even Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                };
            };
            };
            if(Randnum < 75 && Randnum > 50){
                Hintthree.textContent = 'Lower than 75'
                Hint3 = true
                Guess.value = ''
                document.getElementById('thirdhint').onclick = function(){
                    let blur = document.getElementById('blur');
                        blur.classList.toggle('active');
                        TextCont.classList.toggle('active');
                        BtnCont.classList.toggle('active');
                        hints.classList.toggle('active');
                    if (odd == true){
                        let num = 50;
                        const array = [];
                        for (let i = 1; i < 26; i++) {
                            num ++;
                            if((num % 2) == 1){                                    
                                array.push(num);
                            };
                        };
                        Odd_Even.textContent = array;
                        Odd_Even_Label.textContent = 'The Possible odd Numbers are';
                        popup.classList.add('open-popup');;
                        console.log(`The even numebrs are: ${array}`);
                }else if(even == true){
                    let num = 50;
                    const array = [];
                    for (let i = 1; i < 13; i++) {
                        num += 2;
                        if((num % 2) == 0){                                    
                            array.push(num);
                        };
                    };
                    Odd_Even.textContent = array;
                    Odd_Even_Label.textContent = 'The Possible Even Numbers are';
                    popup.classList.add('open-popup');;
                    console.log(`The even numebrs are: ${array}`);
                };
            };
            
        };
            };
            if (Hint3 == true){
                console.log('3')
                hints.classList.toggle('ThirdHint');
            };
            if (Guesses == 0){
                Guesstext.textContent = `You lose! The number was ${Randnum}, Press restart to try again! `;
                hints.classList.toggle('Gameover');
                hint.textContent = '';
        };
    
    };
};
Startgame();
