$(document).ready(function () {
  const peliculas = [
    { nombre: "Duna Parte 2", imagen: "img/Dune.webp" },
    { nombre: "Oppenheimer", imagen: "img/oppenheimer.jpg" },
    { nombre: "Barbie", imagen: "img/barbie.jpg" },
  ];

  peliculas.forEach(pelicula => {
    $("#galeriaPeliculas").append(`
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${pelicula.nombre}</h5>
            <button class="btn btn-primary btnReservar" data-pelicula="${pelicula.nombre}">Reservar</button>
          </div>
        </div>
      </div>
    `);
  });

  // Abrir modal
  $(document).on("click", ".btnReservar", function () {
    const pelicula = $(this).data("pelicula");
    $("#inputPelicula").val(pelicula);
    $("#formReserva")[0].reset();
    $("#inputPelicula").val(pelicula);
    const modal = new bootstrap.Modal(document.getElementById("modalReserva"));
    modal.show();
  });

  // Confirmar reserva
  $("#formReserva").submit(function (e) {
    e.preventDefault();
    const pelicula = $("#inputPelicula").val();
    const horario = $("#inputHorario").val();
    const asientos = $("#inputAsientos").val();

    alert(`🎟️ ¡Reserva confirmada!\n\nPelícula: ${pelicula}\nHorario: ${horario}\nAsientos: ${asientos}`);
    $("#modalReserva").modal('hide');
  });
});