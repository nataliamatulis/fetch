const DATA_URL = "json/data.json"; 

const container = document.getElementById("container");

function showData(dataArray) {
  // Limpiar el contenedor antes de agregar nuevos datos
  container.innerHTML = ''; 

  for (const item of dataArray) {
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

function fetchData() {
  fetch(DATA_URL)
    .then(response => response.json())
    .then(data => {
      // Extraer el array de estudiantes del objeto JSON
      const students = data.students;
      showData(students);
    })
    .catch(error => console.error('Error al cargar los datos:', error));
}

// Llamar a fetchData cuando la página esté completamente cargada
window.addEventListener('DOMContentLoaded', (event) => {
  fetchData();
});