[README.md](https://github.com/user-attachments/files/30172423/README.md)
# 📚 Sistema de Registro de Estudiantes

Aplicación web para la gestión de estudiantes con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) utilizando JavaScript puro y manipulación del DOM.

## 📝 Descripción

Este proyecto consiste en un sistema de registro de estudiantes que permite:
- Agregar nuevos estudiantes con nombre, carrera y semestre
- Visualizar la lista de estudiantes en una tabla dinámica
- Ver información detallada en formato JSON (individual y general)
- Editar y eliminar estudiantes con confirmación
- Buscar estudiantes por nombre, carrera o semestre
- Filtrar estudiantes por carrera
- Mantener un contador actualizado del total de estudiantes

Los datos se almacenan temporalmente en un arreglo global durante la sesión del navegador.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3 + Bootstrap 5.3.3**: Estilos y diseño responsivo
- **JavaScript (ES6+)**: Lógica de la aplicación y manipulación del DOM
- **SweetAlert2**: Alertas y modales de confirmación mejorados
- **Bootstrap Modal**: Visualización de datos en formato JSON

## 🚀 Ejecución de la Aplicación

### Requisitos previos
- Un navegador web moderno (Chrome, Firefox, Edge, Safari)

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ElkinVera17/registroEstudiantesJS.git
2. **Navegar al directorio del proyecto**
3. **Abrir el archivo index.html en el navegador**
Opción 1: Doble clic en el archivo index.html
Opción 2: Usar una extensión como "Live Server" en VS Code
Opción 3: Arrastrar el archivo a una ventana del navegador
### Estructura del Proyecto
```
└── 📁 laboratorio-js-dom
    ├── 📕 ElkinVera_29535_ManipulaciónDeDOM.pdf
    ├── 📝 README.md
    ├── 📄 app.js
    └── 🌐 index.html
```
### Autor
Elkin Alejandro Vera Gorozabel
GitHub: @ElkinVera17
### Funcionalidades Principales
Función	Descripción
➕ Agregar	Registra un nuevo estudiante en el arreglo y la tabla
✏️ Editar	Carga los datos del estudiante en el formulario para modificación
🗑️ Eliminar	Elimina un estudiante con confirmación previa
🔍 Buscar	Filtra estudiantes por coincidencia de texto
📋 Filtrar	Muestra estudiantes según la carrera seleccionada
📊 JSON	Visualiza datos en formato JSON en un modal
### Mejoras Futuras
- Persistencia de datos con localStorage
- Exportar datos a archivo CSV/Excel
- Validación de campos en tiempo real
- Paginación para grandes volúmenes de datos
- Temas oscuro/claro
