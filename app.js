document.addEventListener('DOMContentLoaded',function() {
    const themeSwitcher = document.querySelector('#theme');
    const body = document.querySelector('body');

    themeSwitcher.addEventListener('click',function() {
        body.classList.toggle('light');
    });
});