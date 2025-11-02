function router() {
    
    const hash = window.location.hash.substring(1) || "home";

    
    const sections = document.querySelectorAll("main section");
    
   
    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    const activeSection = document.getElementById(hash);
    if (activeSection) {
        activeSection.classList.add("active"); 
    } else {
        document.getElementById("home").classList.add("active");
    }

    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => link.classList.remove("active"));
    
    const activeLink = document.querySelector(`.menu a[href$="#${hash}"]`);
    
    if (activeLink) {
        if (!activeLink.classList.contains("dropbtn")) {
             activeLink.classList.add("active");
        }
    } else {
        const homeLink = document.querySelector('.menu a[href="#home"]');
        if (hash === "home" && homeLink) {
            homeLink.classList.add("active");
        }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("load", router);

window.addEventListener("hashchange", router);