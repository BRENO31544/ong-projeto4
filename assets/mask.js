// mask.js
// ... (Máscaras inalteradas) ...

const menuToggle = document.getElementById("menuToggle"); // O input checkbox
const menu = document.querySelector(".menu");
const dropBtns = document.querySelectorAll(".dropbtn");

// Fechar menu mobile (Se o checkbox estava marcado, desmarca)
function closeMobileMenu() {
    if (menuToggle.checked) {
        menuToggle.checked = false;
        dropBtns.forEach(btn => btn.parentElement.classList.remove("active"));
    }
}

// **AJUSTE AQUI:** O clique no ícone hambúrguer é tratado nativamente pelo checkbox no CSS.

// abrir/fechar submenu mobile - mantido, mas com correção na lógica
dropBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        // Previne que o link vá para '#' e mude o hash, focando em abrir/fechar o submenu
        e.preventDefault(); 
        const parent = btn.parentElement;
        parent.classList.toggle("active");
    });
});

// fechar menu ao clicar em qualquer link de navegação (SPA)
menu.querySelectorAll("li a").forEach(link => {
    // Garante que o dropdown link não feche o menu (apenas os links de navegação final)
    if (!link.classList.contains('dropbtn')) {
        link.addEventListener("click", () => {
            closeMobileMenu(); 
        });
    }
});


// Modal - mantido
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.onclick = () => modal.style.display = 'flex';
    closeModalBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { 
        if(e.target === modal) modal.style.display = 'none'; 
    }
}