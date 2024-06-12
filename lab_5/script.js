document.addEventListener("DOMContentLoaded", () => {
    // Problema 1: Tabla de Números
    let number = parseInt(prompt("Ingresa un número para la tabla:"));
    if (!isNaN(number) && number > 0) {
        // Crear la tabla con los números del 1 al número ingresado, incluyendo sus cuadrados y cubos
        let tablaHTML = "<table class='highlight centered'><thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead><tbody>";
        for (let i = 1; i <= number; i++) {
            tablaHTML += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
        }
        tablaHTML += "</tbody></table>";
        // Insertar la tabla en el div correspondiente
        document.getElementById("tablaNumeros").innerHTML = tablaHTML;
    } else {
        alert("Por favor, ingresa un número válido.");
    }

    // Problema 2: Suma Aleatoria
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const startTime = new Date().getTime();

    // Pedir al usuario que ingrese la suma de dos números aleatorios
    const userAnswer = parseInt(prompt(`¿Cuál es la suma de ${num1} + ${num2}?`));
    const endTime = new Date().getTime();
    const correctAnswer = num1 + num2;
    const timeTaken = (endTime - startTime) / 1000;

    // Mostrar si la respuesta es correcta o incorrecta, y el tiempo que tomó
    if (userAnswer === correctAnswer) {
        document.getElementById("sumaAleatoria").innerText = `¡Correcto! Tomaste ${timeTaken} segundos.`;
    } else {
        document.getElementById("sumaAleatoria").innerText = `Incorrecto. La respuesta correcta era ${correctAnswer}. Tomaste ${timeTaken} segundos.`;
    }

    // Problema 3: Contador de Números
    function contador(arr) {
        let negativos = 0, ceros = 0, positivos = 0;
        // Contar la cantidad de números negativos, ceros y positivos en el arreglo
        for (let num of arr) {
            if (num < 0) {
                negativos++;
            } else if (num === 0) {
                ceros++;
            } else {
                positivos++;
            }
        }
        return { negativos, ceros, positivos };
    }

    const arr = [1, -2, 3, 0, -5, 0, 6];
    document.getElementById("arregloNumeros").innerText = JSON.stringify(arr);
    const resultadoContador = contador(arr);
    // Mostrar los resultados del contador en el párrafo correspondiente
    document.getElementById("contadorNumeros").innerText = `Negativos: ${resultadoContador.negativos}, Ceros: ${resultadoContador.ceros}, Positivos: ${resultadoContador.positivos}`;

    console.assert(JSON.stringify(resultadoContador) === JSON.stringify({ negativos: 2, ceros: 2, positivos: 3 }), 'Test contador fallido');

    // Problema 4: Promedios de Matriz
    function promedios(matrix) {
        // Calcular el promedio de cada renglón en la matriz
        return matrix.map(row => {
            const sum = row.reduce((acc, val) => acc + val, 0);
            return sum / row.length;
        });
    }

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    // Mostrar la matriz en una tabla HTML
    const matrizTable = document.getElementById("matrizNumeros");
    matrix.forEach(row => {
        const rowHTML = row.map(num => `<td>${num}</td>`).join('');
        matrizTable.innerHTML += `<tr>${rowHTML}</tr>`;
    });

    const resultadoPromedios = promedios(matrix);
    // Mostrar los promedios de cada renglón en el párrafo correspondiente
    document.getElementById("promediosMatriz").innerText = `Promedios: ${resultadoPromedios.join(', ')}`;

    console.assert(JSON.stringify(resultadoPromedios) === JSON.stringify([2, 5, 8]), 'Test promedios fallido');

    // Problema 5: Inverso de Número
    function inverso(num) {
        // Invertir los dígitos del número ingresado
        return parseInt(num.toString().split('').reverse().join(''), 10);
    }

    const num = 12345;
    const resultadoInverso = inverso(num);
    // Mostrar el número invertido en el párrafo correspondiente
    document.getElementById("inversoNumero").innerText = `Inverso de ${num} es ${resultadoInverso}`;

    console.assert(resultadoInverso === 54321, 'Test inverso fallido');

    // Problema 6: Solución con Objeto (Gestión de Biblioteca)
    class Libro {
        constructor(titulo, autor, paginas) {
            this.titulo = titulo;
            this.autor = autor;
            this.paginas = paginas;
        }

        // Método para obtener la información del libro
        informacion() {
            return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
        }

        // Método para verificar si el libro es largo
        esLargo() {
            return this.paginas > 300 ? "El libro es largo." : "El libro no es largo.";
        }
    }

    // Crear una instancia de Libro
    const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 417);
    const infoLibro = miLibro.informacion();
    const largoLibro = miLibro.esLargo();

    // Mostrar los resultados en el documento HTML
    document.getElementById("informacionLibro").innerText = infoLibro;
    document.getElementById("esLibroLargo").innerText = largoLibro;

    // Pruebas con console.assert
    console.assert(infoLibro === "Título: Cien Años de Soledad, Autor: Gabriel García Márquez, Páginas: 417", 'Test información fallido');
    console.assert(largoLibro === "El libro es largo.", 'Test esLargo fallido');
});
