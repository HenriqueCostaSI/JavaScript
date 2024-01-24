function meuFormulario() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  form.addEventListener("submit", function recebeEventForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    adicionaPessoa(pessoa);



        
        resultado.innerHTML = `
          <p>Nome: ${pessoa.nome}</p>
          <p>Sobrenome: ${pessoa.sobrenome}</p>
          <p>Peso: ${pessoa.peso}</p>
          <p>Altura: ${pessoa.altura}</p>
        `;
      



    return pessoa;
  });

  

  function adicionaPessoa(pessoa) {
    pessoas.push(pessoa);
    
  }

  /*form.onsubmit = function(event) {
      event.preventDefault();
      alert('Formulário enviado!');
  };
  */
}

meuFormulario();