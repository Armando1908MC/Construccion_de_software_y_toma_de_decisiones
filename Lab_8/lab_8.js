// tareas.js

const fs = require('fs');

/**
 * Calcula el promedio de un arreglo de números.
 * @param {number[]} arreglo - Arreglo de números.
 * @returns {number} - El promedio de los números en el arreglo.
 */
function calcularPromedio(arreglo) {
    if (arreglo.length === 0) return 0;
    let suma = arreglo.reduce((acc, num) => acc + num, 0);
    return suma / arreglo.length;
}

// Ejemplo de uso de calcularPromedio
const numerosPromedio = [1, 2, 3, 4, 5];
const promedio = calcularPromedio(numerosPromedio);
console.log(`El promedio es: ${promedio}`);

/**
 * Escribe un string en un archivo de texto.
 * @param {string} nombreArchivo - Nombre del archivo donde se escribirá el contenido.
 * @param {string} contenido - Contenido a escribir en el archivo.
 */
function escribirEnArchivo(nombreArchivo, contenido) {
    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error(`Error escribiendo en el archivo: ${err}`);
        } else {
            console.log(`Contenido escrito en ${nombreArchivo}`);
        }
    });
}

// Ejemplo de uso de escribirEnArchivo
const contenido = 'Hola, este es un archivo de texto creado con Node.js';
const nombreArchivo = 'archivo.txt';
escribirEnArchivo(nombreArchivo, contenido);

/**
 * Ordena un arreglo de números utilizando el algoritmo de ordenamiento por burbuja.
 * @param {number[]} arreglo - Arreglo de números a ordenar.
 * @returns {number[]} - Arreglo ordenado.
 */
function ordenarBurbuja(arreglo) {
    let n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                // Intercambiar
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    return arreglo;
}

// Ejemplo de uso de ordenarBurbuja
const numerosOrdenar = [64, 34, 25, 12, 22, 11, 90];
const numerosOrdenados = ordenarBurbuja(numerosOrdenar);
console.log('Arreglo ordenado:', numerosOrdenados);

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);

    if(request.url == "/"){
        response.setHeader('Content-Type','text/html');
        response.write(`<!DOCTYPE html>
       <html>
       <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Mi primera web</title>
       </head>
       <body>
           <h1 id="yo">Soy Armando Méndez Castro</h1>
           <h2>Datos:</h2>
           <p>mi matrícula es A01277796 <br> mi correo electrónico es a01277796@tec.mx </p>
           <h3> Sobre mi: </h3>
           <p>Soy una persona muy alegre, me gusta mucho viajar, conocer nuevos lugares, salir con amigos de fiesta, a jugar videojuegos a jugar juegos de mesa entre otras actividades. Mi deporte favorito es el futbol, soy un gran aficionado del barcelona y de las chivas, mi jugador favorito es <strong>Messi</strong> , quien para mi es el mejor jugador del mundo.</p>
           <h3>Mis metas:</h3>
           <p>En un futuro lo que busco es trabajar en una empresa lider en tecnología en estados unidos como Meta, Google, Tesla o alguna por el estilo para adquirir experiencia y despues crear mi propia empresa aquí en Mexico</p>
           <hr>
           <a target="_blank" href= "https://es.wikipedia.org/wiki/Lionel_Messi"> <strong>Messi</strong></a> <br>
           <img src="https://www.wdeportes.com/resizer/v2/KIXYSM4HX5FF5KO74CRHVZEWDM.jpeg?auth=987c262ca632ea5cb0cf73b438d34aca62a935353b94ddb66e7e1516821826fd&width=736&height=552&quality=70&smart=true" width="400"/> <br><br><br>
           <a target="_blank" href="https://www.fcbarcelona.es/es/"> <strong>Barcelona</strong></a> <br>
           <img src="https://summa.es/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fsumma.es%2Fwp-content%2Fuploads%2F2022%2F07%2FBARC%25CC%25A7A_1.jpg&cacheMarker=1710983299-255867&token=394ee5177e721fe4" width="400" /> <br><br><br><br>
           <article>
               <h3>Preguntas:</h3>
               <h4> ¿Cuál es la diferencia entre Internet y la World Wide Web?</h4>
               <p> Internet se refiere a una vasta red global de computadoras interconectadas, mientras que la web, conocida como la World Wide Web, consiste en una extensa recopilación de páginas que reside sobre esta infraestructura de computadoras interconectadas. Por lo tanto, al utilizar tu dispositivo móvil o computadora para navegar en la web, estás accediendo a través de internet</p><br>
               <h4>¿Cuáles son las partes de un URL?</h4>
               <p> -	Protocolo: Especifica el método para acceder al recurso en línea. <br>
                   -	Nombre de dominio: Es el nombre del servidor que alberga el recurso. <br>
                   -	Ruta: Indica la ubicación exacta del recurso dentro del servidor. <br>
                   -	Parámetros: Son datos adicionales que pueden influir en el procesamiento o presentación del recurso. <br>
                   -	Fragmento: Define una sección específica del recurso al que se desea enlazar. 
               </p><br>
               <h4> ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h4>
               <p> -	Protocolo: Especifica el método para acceder al recurso en línea.<br>
                   -	Nombre de dominio: Es el nombre del servidor que alberga el recurso.<br>
                   -	Ruta: Indica la ubicación exacta del recurso dentro del servidor.<br>
                   -	Parámetros: Son datos adicionales que pueden influir en el procesamiento o presentación del recurso.<br>
                   -	Fragmento: Define una sección específica del recurso al que se desea enlazar.
               </p><br>
               <h4>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h4>
               <p> Se utiliza el método HTTP GET, el navegador envía una solicitud GET al servidor web para recuperar la página solicitada y cualquier recurso asociado (como imágenes, archivos CSS o JavaScript) para mostrarla en tu navegador.</p><br>
               <h4>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h4> 
               <p> Un código de respuesta HTTP 200 indica que la solicitud se ha completado satisfactoriamente. Esto significa que el servidor ha procesado la solicitud sin errores y está enviando la respuesta esperada.</p><br>
               <h4> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h4>
               <p> Un error 404 indica que la página solicitada no ha sido encontrada en el servidor, El desarrollador debe investigar y resolver la causa del error, que puede deberse a cambios en la estructura del sitio, enlaces rotos o eliminación de páginas. Es crucial para garantizar una experiencia positiva para el usuario y mantener la integridad del sitio web.</p><br>
               <h4> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h4>
               <p> Este error, también conocido como "Error interno del servidor", señala que hubo un problema en el servidor al procesar la solicitud del usuario. Puede ser causado por diversas razones, como errores en el código del sitio, configuraciones incorrectas del servidor o problemas en la base de datos. Es crucial que el desarrollador investigue la causa subyacente del error 500 y tome las medidas necesarias para solucionarlo lo más rápido posible.</p><br>
               <h4> ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h4>
               <p>-	Significa que se considera obsoleto o desaconsejado su uso en favor de otras alternativas más modernas, eficientes o estándares.<br>
                   -	Elemento "applet": Atributo rev: Utilizado en el elemento "link" para definir una relación inversa de la relación especificada en el atributo rel. En HTML5, no se considera necesario y su uso está desaprobado.<br>
                   -	Atributo frameborder: Utilizado en el elemento "iframe" para especificar si debe mostrarse o no el borde del marco. En HTML5, se sugiere utilizar CSS para estilos de borde.<br>
                   -	Atributo border en el elemento "img": Utilizado para especificar el ancho del borde de una imagen. En HTML5, se prefiere utilizar CSS para estilos de borde.<br>
                   -	Elementos "font" y "big": Estos elementos se consideran presentacionales y su funcionalidad se puede lograr mejor utilizando estilos CSS en HTML5.
               </p><br>
               <h4>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h4>
               <p>-	Algunas de estas diferencias incluyen la introducción de nuevos elementos semánticos para una mejor estructuración del contenido, como encabezados, pie de página, navegación, entre otros. Además, HTML5 ofrece soporte integrado para audio y video con los elementos "audio" y "video", lo que elimina la necesidad de complementos externos como Flash. También incluye capacidades mejoradas de gráficos vectoriales y dinámicos con SVG y Canvas, y una variedad de nuevas APIs de JavaScript para acceder a funcionalidades del navegador. Otras mejoras notables incluyen formularios mejorados, opciones de almacenamiento local y una mayor compatibilidad con dispositivos móviles. En resumen, HTML5 representa una evolución importante en la web, ofreciendo herramientas avanzadas y mejoras significativas para los desarrolladores y usuarios.</p><br>
               <h4>¿Qué componentes de estructura y estilo tiene una tabla?</h4>
               <p> - Elemento "table": Funciona como el contenedor principal de la tabla.<br>
                   - Elemento "tr": Representa una fila dentro de la tabla.<br>
                   - Elemento "th": Define una celda de encabezado, generalmente ubicada al principio de filas o columnas<br>
                   - Elemento "td": Define una celda de datos, que contiene el contenido real de la tabla.<br>
                   - Elementos "thead", "tbody", "tfoot": Opcionales, ayudan a estructurar las secciones de encabezado, cuerpo y pie de la tabla, respectivamente.<br>
                   - En cuanto al estilo, se pueden aplicar propiedades CSS para modificar la apariencia de la tabla, como el color de fondo, el espaciado entre celdas, la alineación del texto y los estilos de borde. Estos elementos y estilos permiten personalizar el diseño y la apariencia de la tabla según las necesidades específicas del diseño web.
               </p><br>
               <h4>¿Cuáles son los principales controles de una forma HTML5?</h4>
               <p> - Input de Texto ("input type="text"""): Permite al usuario ingresar texto de una sola línea.<br>
                   - Área de Texto ("textarea"): Permite al usuario ingresar texto de múltiples líneas.<br>
                   - Botón (button) o (input type="button"): Se utiliza para activar una acción dentro del formulario.<br>
                   - Botón de Envío (input type="submit"): Envía el formulario al servidor cuando se hace clic en él.<br>
                   - Botón de Restablecimiento ("input type="reset"): Restablece los valores del formulario a sus valores predeterminados.<br>
                   - Checkbox (input type="checkbox") Permite al usuario seleccionar una o varias opciones de una lista de opciones.<br>
                   - Radio (input type="radio"): Permite al usuario seleccionar una opción de una lista de opciones mutuamente excluyentes.<br>
                   - Select (select"): Crea un menú desplegable de opciones, permitiendo al usuario seleccionar una de ellas.<br>
                   - Rango (input type="range"): Crea un control deslizante que permite al usuario seleccionar un valor de un rango específico.<br>
                   - Fecha (input type="date"): Permite al usuario seleccionar una fecha de un calendario desplegable.<br>
                   - Correo Electrónico (input type="email"): Verifica que el valor ingresado sea una dirección de correo electrónico válida.<br>
                   - Número (input type="number"): Permite al usuario ingresar un valor numérico.<br>
                   - Teléfono (input type="tel"): Verifica que el valor ingresado sea un número de teléfono válido.<br>
                   - URL (input type="url"): Verifica que el valor ingresado sea una URL válida.
               </p><br>
               <h4> ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? </h4>
               <p> El navegador que Utilice fue Google Chrome y puntúa 525 de 555 puntos </p><br>
               <h4>Sobre el ciclo de vida y desarrollo de los sistemas de información:<br>
                   ¿Cuál es el ciclo de vida de los sistemas de información?<br>
                   ¿Cuál es el ciclo de desarrollo de sistemas de información?
               </h4>
               <p> - El ciclo de vida de los sistemas de información abarca todo el proceso de un sistema, desde su inicio hasta su finalización, incluyendo etapas como investigación, diseño, desarrollo, implementación, operación y desmantelamiento.<br>
                   - Investigación y análisis: Se identifican las necesidades y se realizan estudios de viabilidad.<br>
                   - Diseño: Se crea la arquitectura del sistema y se desarrollan los diseños detallados.<br>
                   - Desarrollo: Se construye el sistema de acuerdo con los diseños.<br>
                   - Implementación: Se instala y pone en funcionamiento el sistema en el entorno de producción.<br>
                   - Operación y mantenimiento: Se ejecuta el sistema y se realizan actualizaciones y mantenimiento según sea necesario.<br>
                   - Retiro/desmantelamiento: Se retira el sistema cuando ya no es útil y se elimina adecuadamente.<br><br>
                   - Por otro lado, el ciclo de desarrollo de sistemas de información se enfoca específicamente en las fases relacionadas con la creación del sistema, desde la identificación de requisitos hasta la implementación y mantenimiento, pasando por etapas como análisis, diseño, pruebas y despliegue.<br>
                   - Identificación de requisitos: Se recopilan y documentan los requisitos del sistema.<br>
                   - Análisis: Se analizan los requisitos para comprender completamente el alcance y las funcionalidades del sistema.<br>
                   - Diseño: Se crea la arquitectura del sistema y se elaboran los diseños detallados.<br>
                   - Implementación: Se construye el sistema de acuerdo con los diseños.<br>
                   - Pruebas: Se realizan pruebas para garantizar que el sistema funcione correctamente y cumpla con los requisitos.<br>
                   - Despliegue: Se instala y pone en funcionamiento el sistema en el entorno de producción.<br>
                   - Mantenimiento: Se realizan actualizaciones, correcciones de errores y mejoras en el sistema según sea necesario.
               </p>
       
       
           </article>
           <footer>
               <p>Derechos de autor - Armando Méndez Castro, 2024 Mi Sitio Web.</p>
           </footer>
       </body>
       </html>`);
       response.end();
   }
});
// localhost: 0 - 12000
server.listen(3000);