//Меняем местами пункты
let menuItem = document.getElementsByClassName("menu-item");
let secondPunct = menuItem[2];
let thirdPunct = menuItem[1];
document.getElementsByClassName("menu")[0].insertBefore(secondPunct, thirdPunct);

//Меняем задний фон
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Меняем текст
document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";

//Удаляем рекламу
document.getElementsByClassName("adv")[0].remove();