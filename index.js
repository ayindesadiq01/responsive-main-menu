'use strict';


const goal = document.querySelector('.goal');
const hidden = document.querySelector('.hidden');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay')


menu.addEventListener('click', function(){
 goal.classList.remove('hidden')
 overlay.classList.remove('hidden')
})

closeMenu.addEventListener('click', function(){
 goal.classList.add('hidden')
 overlay.classList.add('hidden')
})

