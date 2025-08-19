document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const tbody = document.querySelector('#tablaClientes tbody');

  function agregarFila(campos) {
    const [nombre, email, destino, personas, fecha] = campos;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${nombre}</td>
      <td>${email}</td>
      <td>${destino}</td>
      <td>${personas}</td>
      <td>${fecha}</td>
      <td>
        <button class="btn btn-sm btn-outline-secondary me-1 btn-edit"><i class="bi bi-pencil"></i></button>
        <button class="btn btn-sm btn-outline-danger btn-del"><i class="bi bi-trash"></i></button>
      </td>
    `;
    tr.querySelector('.btn-edit').addEventListener('click', () => alert('Acción para editar no programada'));
    tr.querySelector('.btn-del').addEventListener('click', () => alert('Acción para eliminar no programada'));
    tbody.appendChild(tr);
  }

  // 🆕 Mostrar datos desde LocalStorage si no está vacio
  const localData = JSON.parse(localStorage.getItem('clientes_agencia') || '[]');
  if (localData.length) {
    localData.forEach(c => {
      agregarFila([c.nombre, c.email, c.destino, c.personas, c.fecha]);
    });
  }

  // Evento de carga de archivo .txt
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      const lineas = text.split(/\r?\n/).filter(l => l.trim().length);
      if (!lineas.length) return;
      const data = lineas.slice(1).map(l => l.split(';')); // omite encabezado
      tbody.innerHTML = '';
      data.forEach(campos => { if (campos.length >= 6) agregarFila(campos); });
    };
    reader.readAsText(file, 'utf-8');
  });

    // Soporte para arrastrar/soltar archivos en el dropzone
  const dropzone = document.querySelector('.clients-dropzone');
  if (dropzone && fileInput) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('drag-over');
    });
    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('drag-over');
    });
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');
      if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        fileInput.dispatchEvent(new Event('change'));
      }
    });
  }

});
