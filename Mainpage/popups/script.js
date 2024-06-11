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