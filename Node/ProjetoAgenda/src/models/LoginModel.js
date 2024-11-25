const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");//npm i bcryptjs

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();//validação
    
    if (this.errors.length > 0) return;

    this.user = await LoginModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push("Usuário não existe.");
      return;
    }//verifica se o usuário existe

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {//verifica se a senha está correta
      this.errors.push("Senha inválida.");
      this.user = null;//garantir que o usuário não vai ficar salvo na memória
      return;
    }
  }

  async register() {
    this.valida();//validação
    if (this.errors.length > 0) return;//se tiver erros, não vai continuar
    
    //verifica se o usuário existe
     await this.userExists();

    const salt = bcryptjs.genSaltSync();// gera um salt que vai ser usado para criptografar a senha
    this.body.password = bcryptjs.hashSync(this.body.password, salt);//

  
      
    this.user = await LoginModel.create(this.body);
    
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });//envia um objeto com o email
    if (this.user) this.errors.push("Usuário já existe.");
    
  }

  valida() {
    this.cleanUp();//limpa os campos

    // Validação
    // O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email))//npm i validator
      this.errors.push("E-mail inválido");

    // A senha precisa ter entre 3 e 50
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("A senha precisa ter entre 3 e 50 caracteres.");
    }
  }

  cleanUp() {
    for (const key in this.body) {
      //Garantir que os campos não estejam vazios
      if (typeof this.body[key] !== "string") {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;//exportando a classe
