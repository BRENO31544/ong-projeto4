function validateCPF(cpf) {
    
    cpf = cpf.replace(/[^\d]/g, ''); 

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;
    let remainder;
    
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
    
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const form = document.querySelector('.form');

    cpfInput.addEventListener('input', () => {
        const isCpfValid = validateCPF(cpfInput.value);
        
        if (cpfInput.value.length === 14) {
            if (!isCpfValid) {
                cpfInput.setCustomValidity('Inválido'); // Define o estado de inválido para o CSS
                cpfError.style.display = 'block'; // Mostra a mensagem de erro personalizada
            } else {
                // CPF válido
                cpfInput.setCustomValidity(''); // Limpa o estado de inválido
                cpfError.style.display = 'none'; // Esconde a mensagem
            }
        } else if (cpfInput.value.length < 14 && cpfInput.value.length > 0) {
            cpfInput.setCustomValidity(''); 
            cpfError.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        const isCpfValid = validateCPF(cpfInput.value);

        if (!isCpfValid) {
            e.preventDefault(); 
            cpfInput.setCustomValidity('Inválido'); 
            cpfError.style.display = 'block';
            cpfInput.focus(); 
        } else {
             cpfInput.setCustomValidity(''); 
        }
    });
}); 