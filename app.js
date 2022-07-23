var cpfs = [];
var data = [];

var datasaida = [];
var dataentrada = [];

var input = document.querySelector("input");
input.focus();

var achou = false;

function motorista() {
    for (var cpf = 0; cpf < cpfs.length; cpf++) {


        if (input.value == cpfs[cpf]) {
            achou = true;
            break;

        }
    }
    if (achou == false) {
        alert("Você Errou, tente novamente!");
    }

    input.value = "";
    input.focus();
}
var button = documente.querySelector("button");
button.onclik = motorista;