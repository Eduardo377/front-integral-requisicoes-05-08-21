const criptorInput = document.querySelector('#criptor');
const maiorValor = document.querySelector('.valor')
const maiorOferta = document.querySelector('.maiorOferta')


criptorInput.addEventListener('change', () => {
    fetch("https://www.mercadobitcoin.net/api/" + criptorInput.value + "/ticker/")
        .then((resposta) => resposta.json())
        .then((resposta) => {
            console.log(resposta);
            maiorValor.textContent = Number(resposta.ticker.high).toFixed(2);
            maiorOferta.textContent = Number(resposta.ticker.buy).toFixed(2);
        })
});