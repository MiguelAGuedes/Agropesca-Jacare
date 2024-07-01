document.addEventListener('DOMContentLoaded', function() {
    const perfil = document.getElementById('perfil');
    const closePopupBtn2 = document.getElementById('closePopupBtn2');
    const popup2 = document.getElementById('popup2');
     
    const Cadastre = document.getElementById('Cadastre');
    const popup4 = document.getElementById('popup4');
    const closePopupBtn4 = document.getElementById('closePopupBtn4');

    
    Cadastre.addEventListener('click', function () {
        popup2.style.display = 'none';
        popup4.style.display = 'block';
    })

    perfil.addEventListener('click', function() {
        popup2.style.display = 'block';
    });

    closePopupBtn4.addEventListener('click', function() {
        popup4.style.display = 'none';
    });

    closePopupBtn2.addEventListener('click', function() {
        popup2.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup2) {
            popup2.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const perfil = document.getElementById('perfil');
    const closePopupBtn2 = document.getElementById('closePopupBtn2');
    const popup2 = document.getElementById('popup2');

    const Senha = document.getElementById('Senha');
    const popup5 = document.getElementById('popup5');
    const closePopupBtn5 = document.getElementById('closePopupBtn5');

    Senha.addEventListener('click', function () {
        popup2.style.display = 'none';
        popup5.style.display = 'block';
    })

    perfil.addEventListener('click', function() {
        popup2.style.display = 'block';
    });

    closePopupBtn5.addEventListener('click', function() {
        popup5.style.display = 'none';
    });

    closePopupBtn2.addEventListener('click', function() {
        popup2.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup2) {
            popup2.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn1 = document.getElementById('openPopupBtn1');
    const closePopupBtn1 = document.getElementById('closePopupBtn1');
    const popup1 = document.getElementById('popup1');

    const buttonProx2 = document.getElementById('buttonProx2');
    const popup3 = document.getElementById('popup3');
    const closePopupBtn3 = document.getElementById('closePopupBtn3');

    buttonProx2.addEventListener('click', function () {
        popup1.style.display = 'none';
        popup3.style.display = 'block';

    })

    closePopupBtn3.addEventListener('click', function() {
        popup3.style.display = 'none';
    });

    openPopupBtn1.addEventListener('click', function() {
        popup1.style.display = 'block';
    });

    closePopupBtn1.addEventListener('click', function() {
        popup1.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup1 || event.target == popup3) {
            popup1.style.display = 'none';
            popup3.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';   
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

var meusPedidos = document.getElementById('meusPedidos');

function minhaconta(m) { 
    window.location = "./"+m+".html";

}

let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

updateCarousel();