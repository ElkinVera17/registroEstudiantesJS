
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnJSONGeneral = document.getElementById("btnJSONGeneral");
const btneliminar=document.getElementById("eliminar");
const btnBuscar=document.getElementById("btnBuscar");
const btnBuscarEstudiante=document.getElementById("btnLimpiarBusqueda");
const btnFiltrar=document.getElementById("btnFiltrar");

btnAgregar.addEventListener("click", agregarEstudiante);
btnLimpiar.addEventListener("click", limpiarTabla);
btnJSONGeneral.addEventListener("click", mostrarJSONGeneral);
btneliminar.addEventListener("click",reinicio);
btnBuscar.addEventListener("click",buscarEstudiante);
btnBuscarEstudiante.addEventListener("click",limpiarBusqueda);
btnFiltrar.addEventListener("click",filtrarCarrera);


let cursos = [];
let modoEdicion = false;
let indiceEditar = -1;


function agregarEstudiante() {
  const estudiante = obtenerDatosFormulario();

  if (!validarEstudiante(estudiante)) {
    mostrarMensaje("Debe completar todos los campos.", "warning");
    return;
  }

  if (modoEdicion) {
    Swal.fire({
      title: "¿Guardar cambios?",
      text: "Se actualizará la información de este estudiante.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        cursos[indiceEditar] = estudiante;
        modoEdicion = false;
        indiceEditar = -1;
        btnAgregar.textContent = "Agregar estudiante";
        mostrarMensaje("Estudiante actualizado correctamente.", "success");
      }
    });

  } else {
    cursos.push(estudiante);
    actualizarTotal();
    mostrarMensaje("Estudiante agregado correctamente.", "success");
  }
  agregarFilaTabla(cursos);
  limpiarFormulario();

}


function obtenerDatosFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const carrera = document.getElementById("carrera").value;
  const semestre = document.getElementById("semestre").value;

  const estudiante = {
    nombre: nombre,
    carrera: carrera,
    semestre: semestre
  };

  return estudiante;
}

function validarEstudiante(estudiante) {
  if (estudiante.nombre === "" || estudiante.carrera === "" || estudiante.semestre === "") {
    return false;
  }
  return true;
}


function agregarFilaTabla(listaEstudiantes) {
  const cuerpoTabla = document.getElementById("cuerpoTabla");
  cuerpoTabla.innerHTML = "";

  listaEstudiantes.forEach((estudiante, indice) => {
    const fila = document.createElement("tr");

    const columnaNumero = document.createElement("td");
    columnaNumero.textContent = indice + 1;

    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = estudiante.nombre;

    const columnaCarrera = document.createElement("td");
    columnaCarrera.textContent = estudiante.carrera;

    const columnaSemestre = document.createElement("td");
    columnaSemestre.textContent = estudiante.semestre;

    const columnaAcciones = document.createElement("td");

    const ver = document.createElement("button");
    ver.textContent = "ver";
    ver.addEventListener("click", () => mostrarJSON(estudiante));

    const editar = document.createElement("button");
    editar.textContent = "editar";
    editar.addEventListener("click", () => editarEstudiante(indice));


    const eliminar = document.createElement("button");
    eliminar.textContent = "eliminar";
    eliminar.addEventListener("click", () => eliminarEstudiante(indice));

    ver.className = "btn btn-info btn-sm";
    editar.className = "btn btn-warning btn-sm mx-1";
    eliminar.className = "btn btn-danger btn-sm";


    fila.appendChild(columnaNumero);
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaCarrera);
    fila.appendChild(columnaSemestre);


    columnaAcciones.appendChild(ver);
    columnaAcciones.appendChild(editar);
    columnaAcciones.appendChild(eliminar);
    fila.appendChild(columnaAcciones);

    cuerpoTabla.appendChild(fila);
  });
}


function actualizarTotal() {
  document.getElementById("totalEstudiantes").textContent = cursos.length;
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("carrera").value = "";
  document.getElementById("semestre").value = "";
}

function limpiarTabla() {
  document.getElementById("cuerpoTabla").innerHTML = "";
}

function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.className = `alert alert-${tipo} mt-3`;
  mensaje.textContent = texto;
}

function mostrarJSON(estudiante) {
  const textoJSON = JSON.stringify(estudiante, null, 4);
  document.getElementById("contenidoJSON").textContent = textoJSON;
  const modal = new bootstrap.Modal(document.getElementById("modalJSON"));
  modal.show();
}

function mostrarJSONGeneral() {
  if (cursos.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Sin registros",
      text: "No existen estudiantes registrados."
    });
  } else {

    const textoJSON = JSON.stringify(cursos, null, 4);
    document.getElementById("contenidoJSON").textContent = textoJSON;
    const modal = new bootstrap.Modal(document.getElementById("modalJSON"));
    modal.show();
  }

}

function editarEstudiante(indice) {
  const estudiante = cursos[indice];
  document.getElementById("nombre").value = estudiante.nombre;
  document.getElementById("carrera").value = estudiante.carrera;
  document.getElementById("semestre").value = estudiante.semestre;
  modoEdicion = true;
  indiceEditar = indice;
  btnAgregar.textContent = "Guardar cambios";
}

function eliminarEstudiante (indice){
  const estudiante = cursos[indice];
  Swal.fire({
    title: "¿Eliminar estudiante?",
    text: `Se eliminara el estudiante ${estudiante.nombre} de la lista.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar"
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      cursos.splice(indice, 1);//elimina(pocision,cantidad)
      actualizarTotal();
      mostrarMensaje("Estudiante eliminado correctamente.", "success");
      agregarFilaTabla(cursos);
    }
  });
}

function reinicio(){
  swal.fire({
    title: "¿Eliminar todo?",
    text: "Se perderan todos los datos ingresados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Reiniciar",
    cancelButtonText: "Cancelar"
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      cursos = [];
      actualizarTotal();
      limpiarTabla();
      limpiarFormulario();
    }
  })
}


function limpiarBusqueda(){
    document.getElementById("txtBuscar").value="";
    agregarFilaTabla(cursos);

}

function buscarEstudiante() {
    const texto = document.getElementById("txtBuscar").value.trim().toLowerCase();
    let encontrados = [];

    if (texto === "") {
    Swal.fire({
      icon: "warning",
      title: "Buscador vacio",
      text: "Ingrese un campo para filtrar"
    });
  }else{

    for (let i = 0; i < cursos.length; i++) {
        let estudiante = cursos[i];

        if (//truo o falso
            estudiante.nombre.toLowerCase().includes(texto) ||  estudiante.carrera.toLowerCase().includes(texto) ||estudiante.semestre.toString().includes(texto)
        ) {
            encontrados.push(estudiante);
        }
    }
    agregarFilaTabla(encontrados);
    if (encontrados.length === 0) {
    Swal.fire({
        icon: "info",
        title: "Sin resultados",
        text: "No se encontraron estudiantes."
    });
}
}

}

function filtrarCarrera(){
  const carrera = document.getElementById("selectCarrera").value;
  let encontrados = [];

    if (carrera === "Todas") {
    Swal.fire({
      icon: "info",
      title: "Sin filtro",
      text: "Usted esta filtrado con todas las carreras"
    });
  }else{

    for (let i = 0; i < cursos.length; i++) {
        let estudiante = cursos[i];

            if (estudiante.carrera === carrera){
            encontrados.push(estudiante);
        }
    }
    
}
agregarFilaTabla(encontrados);
}
