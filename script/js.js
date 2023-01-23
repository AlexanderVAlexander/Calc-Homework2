function calculate(){
    let val1, operator, val2, str, res

    val1 = prompt('Введите первое число:');
    operator = prompt('Какую математическую операцию нужно выполнить? (+, -, *, /, %, ^, √)');
    val2 = prompt('Введите второе число:');
    str = val1 + operator + val2;
    res
    
    switch (operator){
        case '%': res = val1 / 100 * val2 || val1 / 100
            alert(res)
            break
        case '^': res = Math.pow(val1, val2)
            alert(res)
            break
        case '√': res = Math.sqrt(val1) || Math.sqrt(val2)
            alert(res)
            break   
        default: alert(eval(str));    
        }    
}
calculate();