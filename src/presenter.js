

const descripcion = document.querySelector("#tarea-descripcion");
const form = document.querySelector("#tarea-form");
const div = document.querySelector("#resultado-div");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Tarea_descripcion= descripcion.value;

  div.innerHTML = div.innerHTML+ "<p>" + "Tarea: "+Tarea_descripcion + "</p>";
});

//formMul.addEventListener("submit", (event) => {
//  event.preventDefault();
//
//  const firstNumberMul = Number.parseInt(firstMul.value);
//  const secondNumberMul = Number.parseInt(secondMul.value);
//
//  divMul.innerHTML = "<p>" + multiplicar(firstNumberMul, secondNumberMul) + "</p>";
//});
