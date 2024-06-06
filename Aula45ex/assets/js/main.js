/* This JavaScript code is creating HTML elements dynamically and appending them to a container element
on a webpage. Here's a breakdown of what the code is doing: */
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
  ];
  
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  
/* The `for` loop in the provided JavaScript code is iterating over an array called `elementos`. For
each element in the array, it is extracting the `tag` and `texto` properties using destructuring
assignment. */
  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
  
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
  }
  
  container.appendChild(div);