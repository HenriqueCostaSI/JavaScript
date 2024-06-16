function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia: function() {
            this.display.value = '0';
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaCalculo();
                }
            });
        },

        limpaDisplay() {
            this.display.value = '';
        },

        delDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaCalculo() {
           let conta = this.display.value;

           try{
                conta = eval(conta);
                if(!conta) {
                    throw new Error('Conta invalida');
                    return;
                }

                this.display.value = conta;

           } catch(e) {
               alert(e.message);
           }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delDisplay();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaCalculo();
                }
            });//.bind(this) se nao fosse uma arrow function
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
} 
const calculadora = criaCalculadora();
calculadora.inicia();