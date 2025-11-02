const menuToggle = document.getElementById("menuToggle"); // O input checkbox
const menu = document.querySelector(".menu");
const dropBtns = document.querySelectorAll(".dropbtn");

function closeMobileMenu() {
    if (menuToggle.checked) {
        menuToggle.checked = false;
        dropBtns.forEach(btn => btn.parentElement.classList.remove("active"));
    }
}


dropBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault(); 
        const parent = btn.parentElement;
        parent.classList.toggle("active");
    });
});

menu.querySelectorAll("li a").forEach(link => {
    if (!link.classList.contains('dropbtn')) {
        link.addEventListener("click", () => {
            closeMobileMenu(); 
        });
    }
});

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