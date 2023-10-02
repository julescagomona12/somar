document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;

    switch (operator) {
        case "adição":
            result = num1 + num2;
            break;
        case "subtração":
            result = num1 - num2;
            break;
        case "multiplicação":
            result = num1 * num2;
            break;
        case "divisão":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Erro! Divisão por zero.";
            }
            break;
        default:
            result = "Operação inválida";
            break;
    }

    document.getElementById("result").textContent = result;
});