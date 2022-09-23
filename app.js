const colors = ['blue', 'red', 'yellow', 'green', 'black', 'white', 'grey', 'brown', 'orange', 'pink', 'purple', 'cyan', 'aquamarine'];

const button = document.getElementById('button');

button.addEventListener('click', () => {

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const body = document.getElementsByTagName('body')[0]

    body.style.backgroundColor = randomColor;
})