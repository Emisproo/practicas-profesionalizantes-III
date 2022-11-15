class CalculatorModel{
    constructor(){}
    calculate(expression)
    {
        return fetch('./backend/funtionCalculate.php', {method:'post', body: JSON.stringify(expression)}).then(response=> response.json());
    }
}
