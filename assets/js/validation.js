// assets/js/validation.js

function validateCPF(cpf) {
    // 1. Limpa o CPF (remove pontuações e máscara)
    cpf = cpf.replace(/[^\d]/g, ''); 

    // 2. Verifica se tem 11 dígitos e se não é uma sequência inválida (ex: 111.111.111-11)
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;
    let remainder;
    
    // 3. Cálculo do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    
    sum = 0;
    
    // 4. Cálculo do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    
    // 5. Se passou em todas as verificações, é válido
    return true;
}

// Função principal de validação do formulário
document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const form = document.querySelector('.form');

    // Listener para validar em tempo real
    cpfInput.addEventListener('input', () => {
        const isCpfValid = validateCPF(cpfInput.value);
        
        // Verifica se o campo foi preenchido o suficiente (14 caracteres com máscara)
        if (cpfInput.value.length === 14) {
            if (!isCpfValid) {
                // CPF preenchido, mas inválido
                cpfInput.setCustomValidity('Inválido'); // Define o estado de inválido para o CSS
                cpfError.style.display = 'block'; // Mostra a mensagem de erro personalizada
            } else {
                // CPF válido
                cpfInput.setCustomValidity(''); // Limpa o estado de inválido
                cpfError.style.display = 'none'; // Esconde a mensagem
            }
        } else if (cpfInput.value.length < 14 && cpfInput.value.length > 0) {
            // Se o usuário está digitando (mas ainda não completou), remove a validação do CPF
            cpfInput.setCustomValidity(''); 
            cpfError.style.display = 'none';
        }
    });

    // Listener para evitar o envio do formulário se o CPF for inválido
    form.addEventListener('submit', (e) => {
        const isCpfValid = validateCPF(cpfInput.value);

        if (!isCpfValid) {
            e.preventDefault(); // Impede o envio
            cpfInput.setCustomValidity('Inválido'); // Força o estado de inválido
            cpfError.style.display = 'block';
            cpfInput.focus(); // Coloca o foco no campo
        } else {
             cpfInput.setCustomValidity(''); // Garante que o estado está limpo
        }
    });
}); 