class ValidaFormulario {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.eventos();
  }

  evento() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.checkFields();
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.document.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.form.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `${label} não pode estar vazio`);
        valid = false;
      }
    }

    if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
    }
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
        this.criaErro(campo, "CPF inválido");
        return false;
    }
    return true
  }
 

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
