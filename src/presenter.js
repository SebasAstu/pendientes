

const descripcion = document.querySelector("#tarea-descripcion");
const form = document.querySelector("#tarea-form");
const div = document.querySelector("#resultado-div");
const div_cant= document.querySelector("#cant-tareas");
var cant_tareas=0;


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Tarea_descripcion= descripcion.value;

  if (Tarea_descripcion =="" )
  {
    alert("el campo de descripcion esta vacio por favor rellenar")
  }
  else
  {
    cant_tareas = cant_tareas+1;
    div_cant.innerHTML ="<p>" + "Todos("+cant_tareas +")"+ "</p>";
    div.innerHTML = div.innerHTML+ "<p>" + "Tarea: descripcion.- "+Tarea_descripcion + "</p>";
  }
  
});
