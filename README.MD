# 🌍 Agencia de Viajes Express – App Web con JS

Aplicación web responsiva para la gestión de clientes y paquetes de viaje, desarrollada como parte de la **Práctica 1** de la materia *Desarrollo de Sitios Web* (BUAP-FCC).

El sistema permite explorar paquetes turísticos, registrar interesados, exportar datos a un archivo `.txt`, cargar y visualizar clientes en una tabla, y contactar a la agencia mediante un formulario.

---

## 🚀 Características principales

- **Diseño responsivo** con **Bootstrap 5** y Flexbox.
- **Menú de navegación** en todas las páginas.
- **Landing Page** con:
  - Banner con imagen de fondo.
  - Carrusel de destinos turísticos.
  - Información de la agencia.
  - Botón de llamada a la acción.
- **Página de Servicios** con 10 paquetes de viaje en tarjetas (Bootstrap Cards) y modales con más información.
- **Formulario de Registro**:
  - Campos: nombre, email, destino, número de personas, fecha, comentarios.
  - Validaciones con JavaScript (campos requeridos, email válido, fecha futura).
  - Almacenamiento temporal en `localStorage`.
  - Exportación de datos a archivo `clientes.txt`.
- **Lista de Clientes**:
  - Carga manual de `clientes.txt` y visualización en tabla Bootstrap.
  - Botones de edición y eliminación (acciones simuladas).
  - **Funcionalidad extra**: si hay datos en `localStorage`, se muestran automáticamente aunque no se cargue archivo.
- **Página de Contacto**:
  - Formulario con nombre, email y mensaje.
  - Alerta de éxito al enviar (Bootstrap Alert con icono).

---

## 📂 Estructura del proyecto

```
.
├── index.html
├── servicios.html
├── registro.html
├── clientes.html
├── contacto.html
├── css/
│   └── estilos.css
├── js/
│   ├── script.js
│   └── clientes.js
├── data/
│   ├── clientes.txt (generado por la app)
└── README.md
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3** y **Bootstrap 5**
- **Bootstrap Icons**
- **JavaScript (ES6)**
- **LocalStorage**
- **FileReader API** para leer `.txt`

---

## 📖 Flujo de uso

1. **Explorar paquetes** desde la página de servicios.
2. **Registrarse** en `registro.html`:
   - Llenar el formulario y guardar registro (almacenado en LocalStorage).
   - Exportar datos acumulados a `clientes.txt`.
3. **Visualizar clientes** en `clientes.html`:
   - Cargar manualmente el archivo `clientes.txt` **o**
   - Ver datos desde LocalStorage si existen (funcionalidad extra).
4. **Contactar a la agencia** en `contacto.html` mediante el formulario.

---

## 📜 Créditos

**Autores:**

- Kaltum Abdala Viveros Gómez
- Diego Alberto Nava Rivera
- Josué Saul Torres Zamora
- Nelson Ricardo Sosa Francisco
  **Materia:** Desarrollo de Sitios Web – BUAP-FCC
  **Profesor:** M.C. Luis Yael Méndez Sánchez
  **Año:** 2025

---
