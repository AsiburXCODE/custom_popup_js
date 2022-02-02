let btn = document.querySelector('#btn');
let popup_container = document.querySelector(".popup_container");
let close = document.querySelector('.close');

btn.addEventListener('click', function(){
    popup_container.style.display = 'block';
})

close.addEventListener('click', function(){
    popup_container.style.display = 'none';
})

popup_container.addEventListener('click', function(){
    popup_container.style.display = 'none';
})