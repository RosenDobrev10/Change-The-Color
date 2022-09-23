let colors = ['blue', 'red', 'yellow', 'green', 'black', 'white', 'grey', 'brown', 'orange', 'pink', 'purple', 'cyan', 'aquamarine'];

let button = document.getElementById('button');

button.addEventListener('click', () => {

    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    let body = document.getElementsByTagName('body')[0]

    body.style.backgroundColor = randomColor;
})