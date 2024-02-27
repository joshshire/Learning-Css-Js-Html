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