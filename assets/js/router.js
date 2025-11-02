// router.js

function router() {
    // Pega o hash da URL, removendo o '#' inicial, ou define como 'home' se não houver hash.
    const hash = window.location.hash.substring(1) || "home";

    // Pega todas as seções que o router deve controlar
    const sections = document.querySelectorAll("main section");
    
    // 1. Esconde todas as seções (remove a classe 'active')
    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    // 2. Mostra apenas a seção ativa (adiciona a classe 'active')
    const activeSection = document.getElementById(hash);
    if (activeSection) {
        // Usa a classe 'active' do CSS para exibir e animar
        activeSection.classList.add("active"); 
    } else {
        // Se o hash for inválido, volta para a home
        document.getElementById("home").classList.add("active");
    }

    // 3. Atualiza o link ativo no menu
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => link.classList.remove("active"));
    
    // Procura o link cujo 'href' termina com o hash atual
    const activeLink = document.querySelector(`.menu a[href$="#${hash}"]`);
    
    if (activeLink) {
        // Garante que links de submenu (dropdown) ou links temporários não sejam marcados
        if (!activeLink.classList.contains("dropbtn")) {
             activeLink.classList.add("active");
        }
    } else {
        // Garante que o link 'Home' seja marcado se o hash for 'home' ou não existir
        const homeLink = document.querySelector('.menu a[href="#home"]');
        if (hash === "home" && homeLink) {
            homeLink.classList.add("active");
        }
    }
    
    // 4. Garante que a página comece sempre no topo da nova seção (importante para SPAs)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Executa ao carregar a página
window.addEventListener("load", router);

// Executa sempre que o hash da URL muda (ao clicar nos links de navegação)
window.addEventListener("hashchange", router);