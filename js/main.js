'use strict';


const inputUa = document.querySelector('#ua'),
inputPl = document.querySelector('#pl');

inputPl.addEventListener('input', () => {
    const request = new XMLHttpRequest(); //Вмонтований в браузер об*єкт і він має свої методи, властивості і так далі

    //request.open(method, url, async, login, pasword); 
    /*Цей метод допомагає зібрати налаштування щоб у майбутньому зробити запит /1 параметр запит гет пост і тому подібне \2 це путь де має бути запрос url /3 асинхоність і сихронність. Сихронний код йде по порядку якщо якись код довго виповняється то весь інший код буде його чекати, синхронний код буде прцювати в іншому напрямку*/

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');  //Опис шо передається в цьому файлі
    request.send();

    //status - показуэ статус нашо запиту
    //statusText - показує який статсу
    //response - відповідь від сервера
    //readyState

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            //перетворюємо json в об*єкт щоб можна було з ним працювати

            const data = JSON.parse(request.response);
            inputUa.value = (+inputPl.value * data.current.usd).toFixed(2);
        } else {
            inputPl.value = 'error';
        }
    });
});



/*

const inputValuePl = document.querySelector('#vpl'),
      inputValueUSD = document.querySelector('#vusd');

inputValuePl.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');

    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputValueUSD.value = (+inputValuePl.value / data.current.usd).toFixed(2);
        } else {
            inputValuePl.value = 'error';
        }
    });
});
*/