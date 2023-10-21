document.addEventListener("DOMContentLoaded", (event) => {
    // Evento do Botão
    let btn = document.getElementById("btn");
    btn.addEventListener("click", Calcular);

    function Calcular() {
        // Captura os valores
        let valorFinanciado = parseFloat(document.getElementById("valor-financiado").value.replace(",", "."));
        let numeroPrestacoes = parseFloat(document.getElementById("numero-prestacoes").value.replace(",", "."));
        let taxaJuros = parseFloat(document.getElementById("taxa-juros").value.replace(",", "."));
        let resultadoPrestacao = document.getElementById("resultado-prestacao");

        // Converte a taxa de juros de porcentagem para decimal
        let taxaJurosDecimal = taxaJuros / 100;

        // Calcula o valor da prestação
        let base = 1 + taxaJurosDecimal;
        let resultado = (valorFinanciado * taxaJurosDecimal * Math.pow(base, numeroPrestacoes)) / (Math.pow(base, numeroPrestacoes) - 1);
        resultado = resultado.toFixed(2);

        // Mostra o Resultado
        resultadoPrestacao.textContent = "O Resultado é: " + resultado + " R$";
    }
});
