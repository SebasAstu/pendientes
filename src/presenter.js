

const descripcion = document.querySelector("#tarea-descripcion");
const form = document.querySelector("#tarea-form");
const div = document.querySelector("#resultado-div");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Tarea_descripcion= descripcion.value;

  if (Tarea_descripcion =="" )
  {
    alert("el campo de descripcion esta vacio por favor rellenar")
  }
  else
  {
    div.innerHTML = div.innerHTML+ "<p>" + "Tarea: descripcion.- "+Tarea_descripcion + "</p>";
  }
  
});
