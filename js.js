let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', howOld);

function howOld(){
    if(input.value.length === 4){
        alert('Ваш возвраст: ' + (2017 - input.value) + ' лет');
    }
    else if(input.value.length === 2){
        alert('Ваш возвраст: ' + (17 - input.value));
    }   
    else{
        alert('Введите корректную дату рождения');
    } 
}