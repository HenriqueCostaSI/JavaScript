/* The class ValidaFormulario is used to validate form fields, including checking if passwords match,
validating usernames, and verifying CPF numbers. */
class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulário enviado.");
      this.formulario.submit();
    }
  }

/**
 * The function `senhasSaoValidas` checks if the password and repeat password fields are equal and if
 * the password length is between 6 and 12 characters.
 * @returns The function `senhasSaoValidas()` is returning a boolean value indicating whether the
 * passwords are valid or not. If the passwords do not match or if the length of the password is not
 * between 6 and 12 characters, the function will return `false`. Otherwise, it will return `true`.
 */
  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senha precisar ser iguais.");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisar ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres.");
    }

    return valid;
  }

  /**
   * The function "camposSaoValidos" checks the validity of form fields, displaying error messages for
   * empty fields and validating CPF and username inputs.
   * @returns The `camposSaoValidos()` function returns a boolean value indicating whether all the
   * fields in the form are valid. If all fields are valid, it returns `true`, otherwise it returns
   * `false`.
   */
  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

/**
 * The function "validaUsuario" checks if a user input meets certain criteria for length and character
 * composition.
 * @param campo - Campo is a parameter representing the input field where the username is entered. The
 * function `validaUsuario(campo)` takes this input field as an argument and performs validation checks
 * on the username entered in that field. It checks the length of the username and ensures it contains
 * only letters and numbers. If any
 * @returns The `valid` variable is being returned from the `validaUsuario` function.
 */
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuário precisar conter apenas letras e/ou números."
      );
      valid = false;
    }

    return valid;
  }

/**
 * The function `validaCPF` validates a CPF (Brazilian individual taxpayer registry identification)
 * number inputted in a form field.
 * @param campo - The `campo` parameter in the `validaCPF` function is likely referring to a field or
 * input element that contains a CPF (Cadastro de Pessoas Físicas) number, which is a Brazilian
 * individual taxpayer identification number. The function `validaCPF` is responsible for validating
 * this CPF
 * @returns The `validaCPF` function is returning a boolean value - `true` if the CPF is valid, and
 * `false` if the CPF is invalid.
 */
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido.");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
