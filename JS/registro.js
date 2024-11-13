document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
    tipoDocumento: document.getElementById('tipoDocumento').value,
    numeroDocumento: document.getElementById('numeroDocumento').value,
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    direccion: document.getElementById('direccion').value,
    telefono: document.getElementById('telefono').value,
    email: document.getElementById('email').value,
    sexo: document.getElementById('sexo').value,
    password: document.getElementById('password').value
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registro exitoso');
    window.location.href = 'login.html';
});