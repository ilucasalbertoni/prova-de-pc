function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Remove a classe 'active' de todos os links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona a classe 'active' ao link que abriu a aba
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Abre a aba de definição por padrão
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink').click();
});
