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

const other = document.querySelector('.other');
const details = document.querySelector('.details');


other.addEventListener('click', function(){
    if(other.innerHTML === 'HIDE'){
        details.classList.add('remove');
        other.innerHTML = "SHOW";
    }else {
        details.classList.remove('remove');
        other.innerHTML = "HIDE";
    }
   
})

const otherSecond = document.querySelector('.otherSecond');
const detailsSecond = document.querySelector('.detailsSecond');

otherSecond.addEventListener('click', function(){
    if(otherSecond.innerHTML === 'HIDE'){
        detailsSecond.classList.add('remove');
        otherSecond.innerHTML = "SHOW";
    }else {
        detailsSecond.classList.remove('remove');
        otherSecond.innerHTML = "HIDE";
    }
   
})

const information = document.querySelector('.information');
const detailsInformation = document.querySelector('.detailsInformation');

information.addEventListener('click', function(){
    if(information.innerHTML === 'HIDE'){
        detailsInformation.classList.add('remove');
        information.innerHTML = "SHOW";
    }else {
        detailsInformation.classList.remove('remove');
        information.innerHTML = "HIDE";
    }
   
})
