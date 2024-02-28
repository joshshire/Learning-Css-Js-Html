// let username;
// document.getElementById('mySubmit').onclick = function(){
//     username = document.getElementById('myText').value;
//     if (Boolean(username)){
//         console.log(username)
//         document.getElementById('myH1').textContent = `Welcome, ${username}`;
//     }else{
//         alert('Please input your name')
//         console.log('User enetered no name!')
//     }
// }

// let cicumfrance;
// const PI = 3.14159;
// let radius;
// document.getElementById('mySubmit').onclick = function(){
//     radius = document.getElementById('myText').value;
//     cicumfrance = radius * 2 * PI
//     document.getElementById('myCircumference').textContent = `The Circumfenence is ~${cicumfrance}`;
//     console.log('1') 
// }
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const increase10 = document.getElementById('Increase10Btn')
const decrease10 = document.getElementById('Decrease10Btn')
const Increasetext = document.getElementById('increasefield')
const Decreasetext = document.getElementById('decreasefield')
const Button = document.getElementById('textbutton')
let countLabel = document.getElementById('count')
let count = 0;
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
};
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
};
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
};
increase10.onclick = function(){
    count += 10;
    countLabel.textContent = count;
};
decrease10.onclick = function(){
    count -= 10;
    countLabel.textContent = count;
};
Button.onclick = function(){
    if (Boolean(Increasetext.value)){
        console.log((Boolean(Increasetext.value)))
        count += Number(Increasetext.value);
        countLabel.textContent = count;
        Increasetext.value = '';

    }else{
        count -= Number(Decreasetext.value);
        countLabel.textContent = count;
        Decreasetext.value = '';   
};
};
