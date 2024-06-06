const paragrafos = document.querySelector('.paragrafos');
/* `const frases = paragrafos.querySelectorAll('p');` is selecting all `<p>` elements that are
descendants of the element with the class name 'paragrafos'. The `querySelectorAll('p')` method
returns a NodeList of all matching elements, which can then be accessed and manipulated in the
subsequent code. */
const frases = paragrafos.querySelectorAll('p');


/* `const estilosBody = getComputedStyle(document.body);` is retrieving the computed styles of the
`<body>` element in the document. The `getComputedStyle()` function returns an object that contains
all the CSS properties and values applied to the specified element. In this case, it is getting the
computed styles of the `<body>` element, and storing them in the `estilosBody` constant for further
use. */
const estilosBody = getComputedStyle(document.body);
///////////////////////////////////////////////////
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of frases) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}