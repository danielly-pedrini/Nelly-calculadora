function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display'). value = valorInput + caracter
}

function limparTela(){
    document.querySelector('.display'). value = ''
}

function calcular(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display'). value = eval(valorInput)
}
function invert(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display'). value = valorInput * -1
}

// Nova função de porcentagem
function calcularPorcentagem() {
    const valorInput = document.querySelector('.display').value
    
    // Se não houver valor, retorna
    if (!valorInput) return;
    
    // Verifica se há uma operação pendente
    if (valorInput.includes('+') || valorInput.includes('-') || 
        valorInput.includes('*') || valorInput.includes('/')) {
        
        // Separa a expressão em partes
        const partes = valorInput.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/)
        
        if (partes) {
            const [_, numero1, operador, numero2] = partes
            let resultado;
            
            // Calcula a porcentagem baseada no operador
            switch (operador) {
                case '+':
                    // Adiciona a porcentagem do segundo número ao primeiro
                    resultado = parseFloat(numero1) + (parseFloat(numero1) * (parseFloat(numero2) / 100))
                    break;
                case '-':
                    // Subtrai a porcentagem do segundo número do primeiro
                    resultado = parseFloat(numero1) - (parseFloat(numero1) * (parseFloat(numero2) / 100))
                    break;
                case '*':
                    // Multiplica o primeiro número pela porcentagem do segundo
                    resultado = parseFloat(numero1) * (parseFloat(numero2) / 100)
                    break;
                case '/':
                    // Divide o primeiro número pela porcentagem do segundo
                    resultado = parseFloat(numero1) / (parseFloat(numero2) / 100)
                    break;
            }
            
            document.querySelector('.display').value = resultado
        }
    } else {
        // Se não houver operação, simplesmente converte o número para porcentagem
        const numero = parseFloat(valorInput)
        document.querySelector('.display').value = numero / 100
    }
}