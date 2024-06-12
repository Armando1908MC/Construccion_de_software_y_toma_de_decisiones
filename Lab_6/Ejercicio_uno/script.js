// Agregar un evento al formulario para evitar el envío por defecto y manejar la validación
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let valid = true; // Variable para rastrear la validez del formulario

    // Reiniciar mensajes de error
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('message').textContent = '';

    // Criterios de validación de la contraseña
    const passwordCriteria = [
        { regex: /.{8,}/, message: 'La contraseña debe tener al menos 8 caracteres.' },
        { regex: /[A-Z]/, message: 'La contraseña debe contener al menos una letra mayúscula.' },
        { regex: /[a-z]/, message: 'La contraseña debe contener al menos una letra minúscula.' },
        { regex: /[0-9]/, message: 'La contraseña debe contener al menos un número.' },
        { regex: /[^A-Za-z0-9]/, message: 'La contraseña debe contener al menos un carácter especial.' },
    ];

    // Verificar la contraseña contra los criterios
    passwordCriteria.forEach(criteria => {
        if (!criteria.regex.test(password)) {
            document.getElementById('passwordError').textContent = criteria.message;
            valid = false; // Marcar como no válido si algún criterio falla
        }
    });

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
        valid = false; // Marcar como no válido si las contraseñas no coinciden
        setTimeout(() => {
            document.getElementById('confirmPasswordError').textContent = '';
        }, 3000); // Mensaje de error temporal
    }

    // Si es válido, mostrar un mensaje de éxito
    if (valid) {
        setTimeout(() => {
            document.getElementById('message').textContent = '¡Contraseña válida!';
        }, 1000); // Mensaje de éxito después de una breve espera
    }
});

// Indicador de fortaleza de la contraseña
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('passwordStrength');
    let strength = 0;

    // Criterios de fortaleza de la contraseña
    if (/.{8,}/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Actualizar la barra de fortaleza
    strengthBar.innerHTML = '<div style="width: ' + (strength * 20) + '%; background-color: ' + getStrengthColor(strength) + '"></div>';
});

// Función para obtener el color según la fortaleza
function getStrengthColor(strength) {
    switch (strength) {
        case 1: return '#ff4d4d'; // Muy débil
        case 2: return '#ff944d'; // Débil
        case 3: return '#ffd24d'; // Media
        case 4: return '#b3ff66'; // Fuerte
        case 5: return '#66ff66'; // Muy fuerte
        default: return '#e0e0e0'; // Por defecto
    }
}
