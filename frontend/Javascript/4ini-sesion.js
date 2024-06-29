// frontend/Javascript/menu.js
document.getElementById('crea-cuenta-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
        alert('La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.');
        return;
    }
    // Aquí iría la lógica para enviar el formulario a la API
    e.target.submit();
});

document.getElementById('ini-sesion-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a la API
    e.target.submit();
});
