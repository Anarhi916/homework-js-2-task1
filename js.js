let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', howOld);

// function howOld(){
//     if(input.value.length === 4){
//         alert('Ваш возвраст: ' + (2017 - input.value) + ' лет');
//     }
//     else if(input.value.length === 2){
//           if(input.value >= 0 && input.value < 18){
//               alert('Ваш возвраст: ' + (17 - input.value));
//           }
//           else{
//               alert('Ваш возвраст: ' + (2017 - ('19' + input.value)));
//           }  
//     }   
//     else{
//         alert('Введите корректную дату рождения');
//     } 
// }

function howOld(){    
    const now= new Date();    
    const userDate = new Date((parseInt(input.value, 10)), 01, 01);    
    if(input.value >= 0 && input.value < 18){
         alert('Ваш возраст: ' + (now.getFullYear() - (2000 + parseInt(input.value, 10))));
    }
    else{
        alert('Ваш возраст: ' + (now.getFullYear() - userDate.getFullYear()));
    }
}    



