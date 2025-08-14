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
  });
  