const logo = document.querySelector('.logo');
const about =  document.querySelector('.about');

const hidePrimeiro = document.querySelector('.other');
const ul = document.querySelector('.details');

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

hidePrimeiro.addEventListener('click', function(){
    //alert('Funcionou!');
    ul.classList.add('remove');
    hidePrimeiro.innerHTML = "SHOW";
})

hidePrimeiro.addEventListener('click', function(){
    ul.classList.remove('remove');
})



/*
    VERIFICAR
about.addEventListener('click', function(){
    about.classList.add('active');
})*/




