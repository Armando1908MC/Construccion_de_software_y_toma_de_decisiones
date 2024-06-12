// Agrega un evento para manejar el envío del formulario
document.getElementById('pulseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario para manejarlo con JavaScript
    
    // Obtiene los valores ingresados en los campos de edad y pulso
    const age = parseInt(document.getElementById('age').value);
    const pulse = parseInt(document.getElementById('pulse').value);
    
    // Valida que los valores ingresados sean válidos
    if (isNaN(age) || isNaN(pulse) || age <= 0 || pulse <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }
    
    let message = ''; // Variable para almacenar el mensaje de resultado
    
    // Determina el rango de pulso normal basado en la edad
    if (age >= 1 && age <= 10) {
        if (pulse < 70) {
            message = 'Pulso bajo';
        } else if (pulse >= 70 && pulse <= 120) {
            message = 'Pulso normal';
        } else {
            message = 'Pulso alto';
        }
    } else if (age >= 11 && age <= 20) {
        if (pulse < 60) {
            message = 'Pulso bajo';
        } else if (pulse >= 60 && pulse <= 100) {
            message = 'Pulso normal';
        } else {
            message = 'Pulso alto';
        }
    } else if (age >= 21 && age <= 60) {
        if (pulse < 60) {
            message = 'Pulso bajo';
        } else if (pulse >= 60 && pulse <= 100) {
            message = 'Pulso normal';
        } else {
            message = 'Pulso alto';
        }
    } else {
        if (pulse < 50) {
            message = 'Pulso bajo';
        } else if (pulse >= 50 && pulse <= 100) {
            message = 'Pulso normal';
        } else {
            message = 'Pulso alto';
        }
    }
    
    // Muestra el resultado en el contenedor de resultados
    document.getElementById('result').innerHTML = `Tu pulso es ${pulse} bpm (${message})`;
});
