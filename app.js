
const tarjeta = document.querySelector(".tarjeta");

const SUPABASE_URL = "https://laxllktmjckmwjfdqprq.supabase.co";
const SUPABASE_KEY = "sb_publishable_9PeOUFxJHRtZZk4aivhFow_ZG9VsUD5";
const preguntas = [
    // SECCION 1: DATOS GENERALES
    {
        seccion: "Datos generales",
        texto: "¿Cuál es tu actividad principal?",
        opciones: ["Agricultura", "Ganadería", "Comercio", "Estudiante", "Hogar", "Artesanía", "Otra actividad"]
    },
    {
        seccion: "Datos generales",
        texto: "¿Dónde utilizas principalmente los muebles?",
        opciones: ["En mi hogar", "En mi negocio", "En mi unidad educativa", "En mi taller", "En otro lugar"]
    },

    // SECCION 2: NECESIDADES DE MUEBLES
    {
        seccion: "Necesidades de muebles",
        texto: "¿Qué tipo de mueble necesitas o te hace falta?",
        opciones: ["Mesa", "Silla", "Estante", "Armario", "Escritorio", "Ropero", "Mueble multifuncional", "Otro"]
    },
    {
        seccion: "Necesidades de muebles",
        texto: "¿Tienes muebles que necesitan reparación?",
        opciones: ["Sí", "No", "Algunos"]
    },
    {
        seccion: "Necesidades de muebles",
        texto: "¿Qué problemas tienes con tus muebles actuales?",
        opciones: ["Falta de espacio", "Poca resistencia", "Deterioro", "Dificultad para transportarlos", "Falta de organización", "Ninguno", "Otro"]
    },
    {
        seccion: "Necesidades de muebles",
        texto: "¿Necesitas muebles que ayuden a organizar mejor tus espacios?",
        opciones: ["Sí", "No", "Tal vez"]
    },
    {
        seccion: "Necesidades de muebles",
        texto: "¿Te interesaría un mueble que cumpla varias funciones?",
        opciones: ["Sí", "No", "Tal vez"]
    },

    // SECCION 3: CARACTERISTICAS DEL PRODUCTO
    {
        seccion: "Características del producto",
        texto: "¿Qué característica valoras más en un mueble?",
        opciones: ["Resistencia", "Precio económico", "Ahorro de espacio", "Fácil limpieza", "Multifuncionalidad", "Portabilidad"]
    },
    {
        seccion: "Características del producto",
        texto: "¿Qué material prefieres?",
        opciones: ["Madera", "Metal", "Combinación de madera y metal", "No tengo preferencia"]
    },
    {
        seccion: "Características del producto",
        texto: "¿Qué tamaño de mueble prefieres?",
        opciones: ["Pequeño", "Mediano", "Grande", "Depende de su utilidad"]
    },

    // SECCION 4: PRECIO Y COMPRA
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Estarías interesado en adquirir un mueble fabricado en la comunidad?",
        opciones: ["Sí", "No", "Tal vez"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Cuánto estarías dispuesto a pagar por un mueble?",
        opciones: ["Menos de 100 Bs", "De 100 a 200 Bs", "De 201 a 350 Bs", "De 351 a 500 Bs", "Más de 500 Bs", "Depende del tipo de mueble"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Qué justificaría pagar un precio más elevado?",
        opciones: ["Mayor resistencia", "Mejor calidad", "Diseño especial", "Mayor tamaño", "Varias funciones", "No pagaría más"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Qué aspecto tomarías más en cuenta al comprar un mueble?",
        opciones: ["Precio", "Calidad", "Durabilidad", "Diseño", "Utilidad"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Qué forma de pago te resultaría más conveniente?",
        opciones: ["Al contado", "En cuotas", "Una parte al inicio y otra al finalizar", "Otra forma"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "Si el precio fuera accesible y la calidad buena, ¿comprarías el producto?",
        opciones: ["Sí", "No", "Tal vez"]
    },
    {
        seccion: "Precio y posibilidades de compra",
        texto: "¿Qué opinas de combinar madera y metal en un mismo mueble?",
        opciones: ["Me parece una buena idea", "Prefiero solo madera", "Prefiero solo metal", "No tengo preferencia"]
    },

    // SECCION 5: SUGERENCIAS Y OPINIONES
    {
        seccion: "Sugerencias y opiniones",
        texto: "¿Qué mueble te gustaría que se fabricara en tu comunidad?",
        tipo: "texto",
        placeholder: "Escribe el mueble que necesitas..."
    },
    {
        seccion: "Sugerencias y opiniones",
        texto: "¿Qué característica especial te gustaría que tuviera ese mueble?",
        tipo: "texto",
        placeholder: "Escribe tu sugerencia..."
    },
    {
        seccion: "Sugerencias y opiniones",
        texto: "¿Qué recomendación darías para fabricar muebles útiles para la comunidad?",
        tipo: "texto",
        placeholder: "Escribe tu recomendación..."
    }
];

let numeroPregunta = 0;
let respuestas = [];

function iniciarEncuesta() {
    numeroPregunta = 0;
    respuestas = [];
    mostrarPregunta();
}

function mostrarPregunta() {
    const pregunta = preguntas[numeroPregunta];
    const progreso = ((numeroPregunta + 1) / preguntas.length) * 100;

    let campo = "";

    if (pregunta.tipo === "texto") {
        campo = `
            <textarea id="respuesta"
                placeholder="${pregunta.placeholder}"
                rows="4"
                style="width:100%;padding:14px;border:1px solid #cbd5e1;border-radius:10px;font-size:16px;box-sizing:border-box;"
            ></textarea>
        `;
    } else {
        campo = `
            <select id="respuesta"
                style="width:100%;padding:14px;border:1px solid #cbd5e1;border-radius:10px;font-size:16px;background:white;">

                <option value="">Selecciona una opción</option>

                ${pregunta.opciones.map(opcion =>
                    `<option value="${opcion}">${opcion}</option>`
                ).join("")}
            </select>
        `;
    }

    tarjeta.innerHTML = `
        <span class="etiqueta">PROYECTO BTH</span>

        <p style="color:#2563eb;font-weight:bold;">
            ${pregunta.seccion}
        </p>

        <p>Pregunta ${numeroPregunta + 1} de ${preguntas.length}</p>

        <div style="background:#dbeafe;height:9px;border-radius:20px;margin:15px 0 25px;">
            <div style="background:#174ea6;width:${progreso}%;height:9px;border-radius:20px;"></div>
        </div>

        <h2>${pregunta.texto}</h2>

        ${campo}

        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:25px;">

            ${numeroPregunta > 0 ? `
                <button class="boton" id="anterior" style="background:#64748b;">
                    Anterior
                </button>
            ` : ""}

            <button class="boton" id="siguiente">
                ${numeroPregunta === preguntas.length - 1 ? "Finalizar encuesta" : "Siguiente"}
            </button>
        </div>
    `;

    const entrada = document.getElementById("respuesta");
    entrada.value = respuestas[numeroPregunta] || "";

    document.getElementById("siguiente")
        .addEventListener("click", guardarRespuesta);

    const anterior = document.getElementById("anterior");

    if (anterior) {
        anterior.addEventListener("click", volverAnterior);
    }
}

function guardarRespuesta() {
    const respuesta = document.getElementById("respuesta").value.trim();

    if (respuesta === "") {
        alert("Por favor, responde esta pregunta.");
        return;
    }

    respuestas[numeroPregunta] = respuesta;

    if (numeroPregunta < preguntas.length - 1) {
        numeroPregunta++;
        mostrarPregunta();
    } else {
        mostrarFinal();
    }
}

function volverAnterior() {
    numeroPregunta--;
    mostrarPregunta();
}

async function mostrarFinal() {
    tarjeta.innerHTML = `
        <span class="etiqueta">PROYECTO BTH</span>
        <h2>Enviando respuestas...</h2>
        <p>Por favor, espera un momento.</p>
    `;

    try {
        const datos = preguntas.map((pregunta, i) => ({
            seccion: pregunta.seccion,
            pregunta: pregunta.texto,
            respuesta: respuestas[i]
        }));

        const resultado = await fetch(
            SUPABASE_URL + "/rest/v1/respuestas_encuesta",
            {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": "Bearer " + SUPABASE_KEY,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({
                    respuestas: datos
                })
            }
        );

        if (!resultado.ok) {
            throw new Error(await resultado.text());
        }

        tarjeta.innerHTML = `
            <span class="etiqueta">PROYECTO BTH</span>
            <h1>¡Muchas gracias!</h1>
            <h2>Encuesta completada</h2>
            <p>Tu respuesta fue guardada correctamente.</p>
            <button class="boton" id="reiniciar">
                Volver al inicio
            </button>
        `;

        document.getElementById("reiniciar")
            .addEventListener("click", iniciarEncuesta);

    } catch (error) {
        console.error(error);

        tarjeta.innerHTML = `
            <h2>No se pudieron enviar las respuestas</h2>
            <p>Comprueba tu conexión a internet e inténtalo nuevamente.</p>
            <button class="boton" id="reintentar">
                Reintentar envío
            </button>
        `;

        document.getElementById("reintentar")
            .addEventListener("click", mostrarFinal);
    }
}

const botonComenzar = document.getElementById("comenzar");

if (botonComenzar && tarjeta) {
    botonComenzar.addEventListener("click", iniciarEncuesta);
}
