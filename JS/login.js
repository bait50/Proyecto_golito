document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!storedUser) {
      alert('No se encontraron usuarios registrados.');
      return;
    }
  
    // Validar credenciales
    if (storedUser.email === email && storedUser.password === password) {
      alert('Inicio de sesión exitoso');
      window.location.href = 'main.html';
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  });

  document.getElementById('registerButton').addEventListener('click', () => {
    window.location.href = 'registro.html';
    });