const button = document.querySelector('button');

button.addEventListener('click', () => {
    setTimeout(() => {
        alert('width screen:  ' + window.screen.width + '\n'  + 'height screen:  ' + window.screen.height);
    }, 100);
});