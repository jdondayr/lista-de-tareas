// Botones
let botonAñadirTarea = document.querySelector("#añadirTarea");
let botonBorrarTareas = document.querySelector("#borrarTareas");

// Listas
let listaPorHacer = document.querySelector("#listaPorHacer");
let listaCompletadas = document.querySelector("#listaCompletadas");

// Otras variables
let inputTareas = document.querySelector("#inputTareas");

// Acciones
botonAñadirTarea.addEventListener("click", () => {
    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = inputTareas.value;

    if (inputTareas.value === "") return;

    tareaNueva.addEventListener("click", () => {
        if (tareaNueva.parentElement === listaPorHacer) listaCompletadas.appendChild(tareaNueva);
        else if (tareaNueva.parentElement === listaCompletadas) listaPorHacer.appendChild(tareaNueva);
    })
    
    listaPorHacer.appendChild(tareaNueva);
    inputTareas.value = "";
})

botonBorrarTareas.addEventListener("click", () => {
    listaPorHacer.textContent = "";
    listaCompletadas.textContent = "";
})
