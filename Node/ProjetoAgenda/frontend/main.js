import 'core-js/stable';
import 'regenerator-runtime';

//import './assets/css/style.css';
import Login from './modules/login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

console.log('Olá mundo 3');