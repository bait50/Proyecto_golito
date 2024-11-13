document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      alert('No hay datos de usuario. Por favor, inicia sesión.');
      window.location.href = 'login.html'; // Redirigir al login si no hay datos
      return;
    }
  
    // Mostrar datos del usuario en el perfil
    document.getElementById('tipoDocumento').value = user.tipoDocumento;
    document.getElementById('numeroDocumento').value = user.numeroDocumento;
    document.getElementById('nombre').value = user.nombre;
    document.getElementById('apellido').value = user.apellido;
    document.getElementById('direccion').value = user.direccion;
    document.getElementById('telefono').value = user.telefono;
    document.getElementById('email').value = user.email;
    document.getElementById('sexo').value = user.sexo;
  });
  