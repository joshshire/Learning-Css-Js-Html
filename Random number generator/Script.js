let random;
const min = 50;
const max = 100;
document.getElementById('RandBtn').onclick = function(){
    random = Math.floor(Math.random() * (max - min)) + min;

    console.log(random);
    document.getElementById('RandNum').textContent = random;
};
