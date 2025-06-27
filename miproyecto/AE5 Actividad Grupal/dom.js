const books = [
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    genre: "Ficción",
    description: "Una historia poética sobre un pequeño príncipe y sus viajes."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programación",
    description: "Una guía para escribir código limpio y mantenible."
  },
  {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    description: "Una saga familiar ambientada en el mítico pueblo de Macondo."
  }
];

// Mostrar libros en el catálogo
function renderBooks(filteredBooks) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = filteredBooks.map(book => `
    <div class="card">
      <h3>${book.title}</h3>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p><strong>Género:</strong> ${book.genre}</p>
      <p>${book.description}</p>
    </div>
  `).join("");
}

// Búsqueda por input de texto
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.genre.toLowerCase().includes(query)
  );
  renderBooks(results);
  document.getElementById("resultCount").textContent = `${results.length} resultado(s)`;
  console.log(`Búsqueda ejecutada con término: "${query}", resultados: ${results.length}`);
});

// Filtro por género usando select
document.getElementById("genreSelect").addEventListener("change", function () {
  const selectedGenre = this.value.toLowerCase();
  const results = selectedGenre
    ? books.filter(book => book.genre.toLowerCase() === selectedGenre)
    : books;
  renderBooks(results);
  document.getElementById("resultCount").textContent = `${results.length} resultado(s)`;
  console.log(`Filtro por género: "${selectedGenre}", resultados: ${results.length}`);
});

// Validación del formulario de registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector("[name='name']").value;
  const email = this.querySelector("[name='email']").value;
  const pass = this.querySelector("[name='password']").value;

  if (!name || !email || !pass) {
    alert("Por favor completa todos los campos.");
    console.log("Formulario incompleto.");
  } else {
    alert("¡Registro exitoso!");
    console.log(`Usuario registrado: ${name}, ${email}`);
    this.reset();
  }
});

// Cargar todos los libros al inicio
window.onload = () => renderBooks(books);

// --- Código para botón "Subir" ---
const btnTop = document.getElementById("btn-top");

// Mostrar el botón cuando el scroll baje 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Al hacer clic, subir suavemente al tope
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});