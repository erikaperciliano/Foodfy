const logo = document.querySelector('.logo');
const about =  document.querySelector('.about');

logo.addEventListener('click', function(){
    window.location.href='/';
})


const receitas = document.querySelectorAll(".card")
//show the receipe especific
for (let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener("click", function() {
        window.location.href = `/details/${i}`
    })
}



/*
    VERIFICAR
about.addEventListener('click', function(){
    about.classList.add('active');
})*/




