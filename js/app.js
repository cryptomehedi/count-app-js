const count = document.querySelector('.count');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const resetCount = document.querySelector('#reset');
const buttons = document.querySelector('#buttons');

up.addEventListener('click', function(){
    count.innerText++;
    setColor();
});
down.addEventListener('click', function(){
    count.innerText--;
    setColor();
});
resetCount.addEventListener('click', function(){
    count.innerText=0;
    setColor();
});

function setColor(){
    if(count.innerText>0){
        count.style.color='lightGreen';
    }else if(count.innerText<0){
        count.style.color='red';
    }else{
        count.style.color='white';
    }
};