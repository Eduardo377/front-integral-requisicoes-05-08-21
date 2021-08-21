const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const cepInput = document.querySelector('#cep');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');
const ruaNumberInput = document.querySelector('#ruaNumber');


cepInput.addEventListener('change', () => {
    const enderecoRequerido = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');
    if (cepInput.value.length > 8) {
        console.log('Números demais!');
    } else if (cepInput.value.length > 8) {
        console.log('Falta números!');
        return;
    }
    enderecoRequerido.then((resposta) => {
        if (!resposta.ok) {
            console.log('ERRO');
            return;
        }
        const promiseBody = resposta.json();

        promiseBody.then((body) => {
            ruaInput.value = body.logradouro;
            cidadeInput.value = body.localidade;
        })
    })
});