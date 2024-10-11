document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.getElementById("close-icon");
    const loginLink = document.getElementById("login-link");
    const searchIcon = document.getElementById("search-icon");
    const menuIcon = document.getElementById("menu-icon");

    let isMenuOpen = true; // Controla o estado do menu

    closeIcon.addEventListener("click", function(event) {
        event.preventDefault();
        if (isMenuOpen) {
            // Esconde os ícones e o login
            loginLink.style.display = "none";
            searchIcon.style.display = "none";
            closeIcon.style.display = "none";
            // Mostra o ícone do menu
            menuIcon.style.display = "block";
        } else {
            // Mostra os ícones e o login
            loginLink.style.display = "block";
            searchIcon.style.display = "block";
            closeIcon.style.display = "block";
            // Esconde o ícone do menu
            menuIcon.style.display = "none";
        }
        isMenuOpen = !isMenuOpen; // Alterna o estado
    });
    
    menuIcon.addEventListener("click", function() {
        closeIcon.click(); // Simula o clique no closeIcon
    });
});