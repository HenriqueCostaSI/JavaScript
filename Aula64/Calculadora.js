function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = function() {
        this.display.value = '0';
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaCalculo();
            }
        });
    };

    this.limpaDisplay = function() {
        this.display.value = '';
    };

    this.delDisplay = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaCalculo = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                throw new Error('Conta inválida');
            }

            this.display.value = conta;

        } catch (e) {
            alert(e.message);
        }
    };

    this.cliqueBotoes = function() {
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
        });
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
