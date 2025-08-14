// Marca activa según la página
document.addEventListener('DOMContentLoaded', () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(a => {
      const href = a.getAttribute('href');
      if (href === current) a.classList.add('active');
    });
  
    // Registro
    const form = document.getElementById('formRegistro');
    if (form) {
      const alerta = document.getElementById('alertaRegistro');
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const destino = document.getElementById('destino');
      const personas = document.getElementById('personas');
      const fecha = document.getElementById('fecha');
      const comentarios = document.getElementById('comentarios');
      const btnExportar = document.getElementById('btnExportar');
  
      const esEmailValido = (v) => /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v);
      const esFechaFutura = (v) => {
        const hoy = new Date(); hoy.setHours(0,0,0,0);
        const f = new Date(v); f.setHours(0,0,0,0);
        return f > hoy;
      };
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Validaciones
        let valido = true;
        if (!nombre.value.trim()) { nombre.classList.add('is-invalid'); valido=false; } else nombre.classList.remove('is-invalid');
        if (!esEmailValido(email.value)) { email.classList.add('is-invalid'); valido=false; } else email.classList.remove('is-invalid');
        if (!destino.value) { destino.classList.add('is-invalid'); valido=false; } else destino.classList.remove('is-invalid');
        if (!(+personas.value > 0)) { personas.classList.add('is-invalid'); valido=false; } else personas.classList.remove('is-invalid');
        if (!esFechaFutura(fecha.value)) { fecha.classList.add('is-invalid'); valido=false; } else fecha.classList.remove('is-invalid');
  
        if (!valido) return;
  
        const registro = {
          nombre: nombre.value.trim(),
          email: email.value.trim(),
          destino: destino.value,
          personas: +personas.value,
          fecha: fecha.value,
          comentarios: comentarios.value.trim(),
          creado: new Date().toISOString()
        };
  
        const key = 'clientes_agencia';
        const lista = JSON.parse(localStorage.getItem(key) || '[]');
        lista.push(registro);
        localStorage.setItem(key, JSON.stringify(lista));
  
        alerta.className = 'alert alert-success mt-3';
        alerta.textContent = 'Registro guardado en memoria del navegador.';
        alerta.classList.remove('d-none');
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  
      btnExportar?.addEventListener('click', () => {
        const key = 'clientes_agencia';
        const lista = JSON.parse(localStorage.getItem(key) || '[]');
        if (!lista.length) {
          alerta.className = 'alert alert-warning mt-3';
          alerta.textContent = 'No hay registros en memoria para exportar.';
          alerta.classList.remove('d-none');
          return;
        }
        // Generar contenido TXT (CSV-friendly con ; como separador)
        const encabezado = 'Nombre;Email;Destino;NumeroPersonas;Fecha;Comentarios';
        const filas = lista.map(c => [c.nombre, c.email, c.destino, c.personas, c.fecha, (c.comentarios||'').replace(/\r?\n/g,' ')].join(';'));
        const contenido = [encabezado, ...filas].join('\n');
        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'clientes.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    }
  });
  