1. Botón para abrir el JSON

Coloque este botón debajo de la tabla:

<button id="btnVerJSON" class="btn btn-dark mt-3">
  Ver JSON de estudiantes
</button>
2. Modal Bootstrap para mostrar el JSON

Coloque este modal antes de cerrar el body:

<div class="modal fade" id="modalJSON" tabindex="-1" aria-labelledby="modalJSONLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="modalJSONLabel">JSON de estudiantes registrados</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>

      <div class="modal-body">
        <pre id="contenidoJSON" class="bg-dark text-white p-3 rounded"></pre>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>

    </div>
  </div>
</div>
3. Agregar el script de Bootstrap

Antes de app.js, coloque el script de Bootstrap. Debe quedar así:

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="app.js"></script>

Esto es necesario para que el modal funcione.

4. JavaScript mínimo

En app.js, agregue un arreglo global:

const estudiantesRegistrados = [];

Cuando agregue un estudiante correctamente, guárdelo en ese arreglo:

estudiantesRegistrados.push(estudiante);

Luego capture el botón:

const btnVerJSON = document.getElementById("btnVerJSON");

btnVerJSON.addEventListener("click", mostrarModalJSON);

Y cree esta función:

function mostrarModalJSON() {
  const contenidoJSON = document.getElementById("contenidoJSON");

  if (estudiantesRegistrados.length === 0) {
    contenidoJSON.textContent = "No existen estudiantes registrados.";
  } else {
    contenidoJSON.textContent = JSON.stringify(estudiantesRegistrados, null, 2);
  }

  const modal = new bootstrap.Modal(document.getElementById("modalJSON"));
  modal.show();
}

Con eso queda una segunda parte básica: el estudiante registra datos, se guardan en un arreglo y luego se muestra el JSON dentro de un modal Bootstrap. Es fácil de explicar y conecta DOM, eventos, arreglos, objetos y JSON.stringify().