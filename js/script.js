document.addEventListener("DOMContentLoaded", (event) => {
    // Evento do Botão
    let btn = document.getElementById("btn");
    btn.addEventListener("click", Calcular);

    function Calcular() {
        // Captura os ID
        let valorFinanciado = parseFloat(document.getElementById("valor-financiado").value);
        let numeroPrestacoes = parseFloat(document.getElementById("numero-prestacoes").value);
        let taxaJuros = parseFloat(document.getElementById("taxa-juros").value);
        let resultadoPrestacao = document.getElementById("resultado-prestacao");

        // Converte a taxa de juros de porcentagem para decimal
        let taxaJurosDecimal = taxaJuros / 100;

        // Calcula o valor da prestação
        let resultado = (valorFinanciado * taxaJurosDecimal * Math.pow(1 + taxaJurosDecimal, numeroPrestacoes)) / (Math.pow(1 + taxaJurosDecimal, numeroPrestacoes) - 1);
        resultado = resultado.toFixed(2);

        // Mostra o Resultado
        resultadoPrestacao.textContent = "O Resultado é: " + resultado + " R$"
    }
});
