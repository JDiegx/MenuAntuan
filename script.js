document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las opciones del menú
    const options = document.querySelectorAll(".menu div p");
    
    // Agregar un evento de clic a cada opción del menú
    options.forEach(option => {
        option.addEventListener("click", function() {
            // Obtener el texto de la opción seleccionada y convertirlo a minúsculas
            const category = option.textContent.toLowerCase();
            
            // Obtener la sección correspondiente al contenido de esa categoría
            const categorySection = document.getElementById(category);
            
            // Obtener todas las secciones de categoría
            const categoryElements = document.querySelectorAll(".category");
            
            // Ocultar todas las secciones de categoría
            categoryElements.forEach(element => {
                element.classList.add("hidden");
            });
            
            // Mostrar la sección correspondiente al contenido de la categoría seleccionada
            categorySection.classList.remove("hidden");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".menu div p");

    options.forEach(option => {
        option.addEventListener("click", function() {
            const category = option.textContent.toLowerCase();
            const categorySection = document.getElementById(category);
            const categoryElements = document.querySelectorAll(".category");
            
            categoryElements.forEach(element => {
                element.classList.add("hidden");
            });
            
            categorySection.classList.remove("hidden");
        });
    });
});
