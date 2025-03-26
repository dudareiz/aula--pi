const btn = document.getElementById('btn');

function mover() {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const novoX = Math.random() * largura;
    const novoY = Math.random() * altura;

    btn.style.left = `${novoX}px`;
    btn.style.top = `${novoY}px`;
}

btn.addEventListener('mouseover', () => {
    btn.style.display = 'none';
    mover();
    btn.style.display = 'block';
});
