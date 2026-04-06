// Botones
let botonAñadirTarea = document.querySelector("#añadirTarea");
let botonBorrarTareas = document.querySelector("#borrarTareas");

// Listas
let listaPorHacer = document.querySelector("#listaPorHacer");
let listaCompletadas = document.querySelector("#listaCompletadas");

// Otras variables
let inputTareas = document.querySelector("#inputTareas");

// Acciones

// Click en el botón de Añadir tarea
botonAñadirTarea.addEventListener("click", () => {
    // Si el input está vacío
    if (inputTareas.value === "") return;

    // Crea div tarea nueva con un párrafo con la tarea y un botón para cambiarla de lista
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("divTareas");
    let tareaParrafo = document.createElement("p");
    tareaParrafo.textContent = inputTareas.value;
    let botonTarea = document.createElement("button");
    botonTarea.classList.add("botonTarea");
    botonTarea.textContent = "Marcar como completada"

    // Introducir párrafo y botón en el div tarea
    tareaNueva.appendChild(tareaParrafo);
    tareaNueva.appendChild(botonTarea);

    // Click en la tarea para cambiarla a la otra lista
    botonTarea.addEventListener("click", () => {
        if (tareaNueva.parentElement === listaPorHacer){
            botonTarea.textContent = "Marcar como no completada"
            listaCompletadas.appendChild(tareaNueva);
        }
        else if (tareaNueva.parentElement === listaCompletadas){
            botonTarea.textContent = "Marcar como completada";
            listaPorHacer.appendChild(tareaNueva);
        }
        })

    // Introducir la tarea en la lista Por Hacer
    listaPorHacer.appendChild(tareaNueva);
    inputTareas.value = "";
})

// Click en botón de eliminar para eliminar las tareas de las listas
botonBorrarTareas.addEventListener("click", () => {
    listaPorHacer.textContent = "";
    listaCompletadas.textContent = "";
})
