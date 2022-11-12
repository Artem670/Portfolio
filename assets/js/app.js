'use strict';
const submit_btn = document.getElementById("submit-btn");
// const scrollUp = document.querySelector('#scroll-up');
const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');
const navLink = document.querySelectorAll('.nav-link')

submit_btn.onclick = function(){
    alert('Спасибо, что заполнили форму, я отвечу вам в течение 2 дней.');
    document.getElementById("answer-form").innerHTML = "Форма отправлена, ожидайте.";
    submit_btn.value = 'Форма отправлена, ожидайте.';
    submit_btn.style.backgroundColor = "white"
    submit_btn.style.cursor = "wait"
    document.getElementById("secondname").style.cursor = "not-allowed"
    document.getElementById("name").style.cursor = "not-allowed"
    document.getElementById("email").style.cursor = "not-allowed"
    document.getElementById("message").style.cursor = "not-allowed"  
};

// scrollUp.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//     });
// });

burger.addEventListener("click", () => {
    ul.classList.toggle('show')
});

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
)