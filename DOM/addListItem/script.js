// DOM işlemleri (sıradaki JS konusu)
const fruitList = ['apple', 'banana', 'tomato' ];
// You are given some names of different fruit and an unordered list html element;
// add a list item for each to the unordered list.
// querySelector, createElement, appendChild ve forEach kullanarak çözülecek

const ul = document.querySelector('.ul');

fruitList.forEach((listItem) => {
    const li = document.createElement('li');
    ul.appendChild(li).textContent = listItem;
})






















