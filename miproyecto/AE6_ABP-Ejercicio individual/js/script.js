$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.thumbnail');

    // Mostrar el modal con la imagen grande
    images.on('click', function() {
        currentIndex = images.index(this);
        showImage(currentIndex);
        $('#modal').fadeIn();
    });

    // Función para mostrar la imagen en el modal
    function showImage(index) {
        const imgSrc = $(images[index]).attr('src');
        $('#modal-img').attr('src', imgSrc);
    }

    // Navegación entre imágenes
    $('#next').on('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('#prev').on('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Cerrar el modal
    $('.close, .modal').on('click', function() {
        $('#modal').fadeOut();
    });

    // Evitar que el clic en la imagen cierre el modal
    $('.modal-content').on('click', function(event) {
        event.stopPropagation();
    });
});