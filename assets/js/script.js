
    // FUNÇÃO PARA ATIVAR O ITEM CLICADO NO MENU
 
 
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona todos os links do menu
        const menuItems = document.querySelectorAll(".menu .nav ul li a");
    
        // Adiciona um ouvinte de evento para cada item do menu
        menuItems.forEach(item => {
            item.addEventListener("click", function (event) {
                // Remove a classe 'active' de todos os itens do menu
                menuItems.forEach(i => i.classList.remove("active"));
    
                // Adiciona a classe 'active' ao item clicado
                this.classList.add("active");
    
                // Obtém o ID de destino a partir do atributo href do link
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
    
                // Se o elemento de destino existir, rola suavemente até ele
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    });