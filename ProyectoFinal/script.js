// Espera a que el documento esté listo
$(document).ready(function(){
    // Llama a la función para redimensionar la imagen de bienvenida cuando el documento esté listo
    resizeWelcomeImage();
});

// Escucha el evento de redimensionamiento de la ventana
$(window).resize(function(){
    // Llama a la función para redimensionar la imagen de bienvenida cuando la ventana cambie de tamaño
    resizeWelcomeImage();
});

// Función para redimensionar la imagen de bienvenida
function resizeWelcomeImage(){
    // Obtiene la altura de la ventana del navegador
    var windowHeight = $(window).height();
    // Establece la altura de la imagen de bienvenida igual a la altura de la ventana
    $('#welcome-image').css('height', windowHeight + 'px');
}
