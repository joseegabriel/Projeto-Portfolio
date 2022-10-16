const skills = document.querySelectorAll(".mouse-icon")

const content = document.querySelector('.conteudo');

const description = [
    '<h2>HTML</h2> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>',
    '<h2>CSS</h2> <p>É um mecanismo para adicionar estilo a um documento Web.</p>',
]

skills.forEach((elemento, index) => {
    elemento.addEventListener('mouseover', () => content.innerHTML = `${description[index]}`)
    elemento.addEventListener('mouseout', () => content.innerHTML = 'Coloque o mouse por cima para ler a descrição')
});