document.addEventListener('DOMContentLoaded', function() {
    var openPopupBtn2 = document.getElementById('openPopupBtn2');
    var closePopupBtn2 = document.getElementById('closePopupBtn2');
    var popup2 = document.getElementById('popup2');

    openPopupBtn2.addEventListener('click', function() {
        popup2.style.display = 'block';
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
    var openPopupBtn1 = document.getElementById('openPopupBtn1');
    var closePopupBtn1 = document.getElementById('closePopupBtn1');
    var popup1 = document.getElementById('popup1');

    openPopupBtn1.addEventListener('click', function() {
        popup1.style.display = 'block';
    });

    closePopupBtn1.addEventListener('click', function() {
        popup1.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup1) {
            popup1.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var openPopupBtn = document.getElementById('openPopupBtn');
    var closePopupBtn = document.getElementById('closePopupBtn');
    var popup = document.getElementById('popup');

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