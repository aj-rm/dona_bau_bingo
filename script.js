// Mazo de Cartas de Lotería
const MAZO = [
    { numero: 1, nombre: "DOÑA BAU", imagen: "cartas/donaBau.png", audio: "sonidos/donaBau.mp3" },
    { numero: 2, nombre: "DON PELOS", imagen: "cartas/donPelos.png", audio: "sonidos/donPelos.mp3" },
    { numero: 3, nombre: "EL ANILLO", imagen: "cartas/elAnillo.png", audio: "sonidos/elAnillo.mp3" },
    { numero: 4, nombre: "EL BASTÓN", imagen: "cartas/elBaston.png", audio: "sonidos/elBaston.mp3" },
    { numero: 5, nombre: "EL BOLSÓN", imagen: "cartas/elBolson.png", audio: "sonidos/elBolson.mp3" },
    { numero: 6, nombre: "EL CAFECITO", imagen: "cartas/elCafecito.png", audio: "sonidos/elCafecito.mp3" },
    { numero: 7, nombre: "EL CARRITO", imagen: "cartas/elCarrito.png", audio: "sonidos/elCarrito.mp3" },
    { numero: 8, nombre: "EL CARTERÓN", imagen: "cartas/elCarteron.png", audio: "sonidos/elCarteron.mp3" },
    { numero: 9, nombre: "EL CEVICHE", imagen: "cartas/elCeviche.png", audio: "sonidos/elCeviche.mp3" },
    { numero: 10, nombre: "EL CHALEQUITO", imagen: "cartas/elChalequito.png", audio: "sonidos/elChalequito.mp3" },
    { numero: 11, nombre: "EL COCO", imagen: "cartas/elCoco.png", audio: "sonidos/elCoco.mp3" },
    { numero: 12, nombre: "EL COCÓN", imagen: "cartas/elCocon.png", audio: "sonidos/elCocon.mp3" },
    { numero: 13, nombre: "EL DOMINÓ", imagen: "cartas/elDomino.png", audio: "sonidos/elDomino.mp3" },
    { numero: 14, nombre: "EL ELOTE", imagen: "cartas/elElote.png", audio: "sonidos/elElote.mp3" },
    { numero: 15, nombre: "EL ESATLÓN", imagen: "cartas/elEsatlon.png", audio: "sonidos/elEsatlon.mp3" },
    { numero: 16, nombre: "EL FALDÓN", imagen: "cartas/elFaldon.png", audio: "sonidos/elFaldon.mp3" },
    { numero: 17, nombre: "EL GALLITO", imagen: "cartas/elGallito.png", audio: "sonidos/elGallito.mp3" },
    { numero: 18, nombre: "EL LORITO", imagen: "cartas/elLorito.png", audio: "sonidos/elLorito.mp3" },
    { numero: 19, nombre: "EL MONEDERO", imagen: "cartas/elMonedero.png", audio: "sonidos/elMonedero.mp3" },
    { numero: 20, nombre: "EL OSSO", imagen: "cartas/elOsso.png", audio: "sonidos/elOsso.mp3" },
    { numero: 21, nombre: "EL POLLO", imagen: "cartas/elPollo.png", audio: "sonidos/elPollo.mp3" },
    { numero: 22, nombre: "EL SANDWICHÓN", imagen: "cartas/elSandwichon.png", audio: "sonidos/elSandwichon.mp3" },
    { numero: 23, nombre: "EL SUÉTER", imagen: "cartas/elSueter.png", audio: "sonidos/elSueter.mp3" },
    { numero: 24, nombre: "EL TAQUITO", imagen: "cartas/elTaquito.png", audio: "sonidos/elTaquito.mp3" },
    { numero: 25, nombre: "EL TEQUILA", imagen: "cartas/elTequila.png", audio: "sonidos/elTequila.mp3" },
    { numero: 26, nombre: "EL TERRENO", imagen: "cartas/elTerreno.png", audio: "sonidos/elTerreno.mp3" },
    { numero: 27, nombre: "LA 5 DE MAYO", imagen: "cartas/la5DeMayo.png", audio: "sonidos/la5DeMayo.mp3" },
    { numero: 28, nombre: "LA ALESA", imagen: "cartas/laAlesa.png", audio: "sonidos/laAlesa.mp3" },
    { numero: 29, nombre: "LA ANDADERA", imagen: "cartas/laAndadera.png", audio: "sonidos/laAndadera.mp3" },
    { numero: 30, nombre: "LA CANA", imagen: "cartas/laCana.png", audio: "sonidos/laCana.mp3" },
    { numero: 31, nombre: "LA CHANCLA", imagen: "cartas/laChancla.png", audio: "sonidos/laChancla.mp3" },
    { numero: 32, nombre: "LA CREMA", imagen: "cartas/laCrema.png", audio: "sonidos/laCrema.mp3" },
    { numero: 33, nombre: "LA GUAYABA", imagen: "cartas/laGuayaba.png", audio: "sonidos/laGuayaba.mp3" },
    { numero: 34, nombre: "LA HAMACA", imagen: "cartas/laHamaca.png", audio: "sonidos/laHamaca.mp3" },
    { numero: 35, nombre: "LA INSULINA", imagen: "cartas/laInsulina.png", audio: "sonidos/laInsulina.mp3" },
    { numero: 36, nombre: "LA JAMAICA", imagen: "cartas/laJamaica.png", audio: "sonidos/laJamaica.mp3" },
    { numero: 37, nombre: "LA MECEDORA", imagen: "cartas/laMecedora.png", audio: "sonidos/laMecedora.mp3" },
    { numero: 38, nombre: "LA MICHE", imagen: "cartas/laMiche.png", audio: "sonidos/laMiche.mp3" },
    { numero: 39, nombre: "LA NIEVE", imagen: "cartas/laNieve.png", audio: "sonidos/laNieve.mp3" },
    { numero: 40, nombre: "LA PALETA", imagen: "cartas/laPaleta.png", audio: "sonidos/laPaleta.mp3" },
    { numero: 41, nombre: "LA PAPA", imagen: "cartas/laPapa.png", audio: "sonidos/laPapa.mp3" },
    { numero: 42, nombre: "LA PIZZA", imagen: "cartas/laPizza.png", audio: "sonidos/laPizza.mp3" },
    { numero: 43, nombre: "LA ROCÍO", imagen: "cartas/laRocio.png", audio: "sonidos/laRocio.mp3" },
    { numero: 44, nombre: "LA RODILLA", imagen: "cartas/laRodilla.png", audio: "sonidos/laRodilla.mp3" },
    { numero: 45, nombre: "LA ROSITA", imagen: "cartas/laRosita.png", audio: "sonidos/laRosita.mp3" },
    { numero: 46, nombre: "LAS CALCETAS", imagen: "cartas/lasCalcetas.png", audio: "sonidos/lasCalcetas.mp3" },
    { numero: 47, nombre: "LAS GALLETAS", imagen: "cartas/lasGalletas.png", audio: "sonidos/lasGalletas.mp3" },
    { numero: 48, nombre: "LAS MATAS", imagen: "cartas/lasMatas.png", audio: "sonidos/lasMatas.mp3" },
    { numero: 49, nombre: "LAS TORTILLAS", imagen: "cartas/lasTortillas.png", audio: "sonidos/lasTortillas.mp3" },
    { numero: 50, nombre: "LOS ARETES", imagen: "cartas/losAretes.png", audio: "sonidos/losAretes.mp3" },
    { numero: 51, nombre: "LOS CACAHUATES", imagen: "cartas/losCacahuates.png", audio: "sonidos/losCacahuates.mp3" },
    { numero: 52, nombre: "LOS LENTES", imagen: "cartas/losLentes.png", audio: "sonidos/losLentes.mp3" },
    { numero: 53, nombre: "LOS NOPALITOS", imagen: "cartas/losNopalitos.png", audio: "sonidos/losNopalitos.mp3" },
    { numero: 54, nombre: "LOS TOSTILOCOS", imagen: "cartas/losTostilocos.png", audio: "sonidos/losTostilocos.mp3" }
];

// Configuración
const TOTAL_CARTAS = 54;

// Reproduce el audio de la carta. Si falla (archivo inexistente,
// permisos, etc.), suena un tono corto generado con Web Audio API.
let audioCtx = null;
let audioActual = null;

function reproducirTonoDefault() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const ahora = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(880, ahora);
        osc.frequency.exponentialRampToValueAtTime(440, ahora + 0.25);
        gain.gain.setValueAtTime(0.0001, ahora);
        gain.gain.exponentialRampToValueAtTime(0.35, ahora + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ahora + 0.4);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(ahora);
        osc.stop(ahora + 0.45);
    } catch (e) {
        console.warn("No se pudo reproducir el tono por defecto:", e);
    }
}

function reproducirSonido(carta) {
    if (!settings.sonidoActivado) return;

    if (audioActual) {
        audioActual.pause();
        audioActual = null;
    }

    if (!carta || !carta.audio) {
        reproducirTonoDefault();
        return;
    }

    try {
        const audio = new Audio(carta.audio);
        audioActual = audio;
        audio.addEventListener("error", () => reproducirTonoDefault(), { once: true });
        const promesa = audio.play();
        if (promesa && typeof promesa.catch === "function") {
            promesa.catch(() => reproducirTonoDefault());
        }
    } catch (e) {
        reproducirTonoDefault();
    }
}

// Ajustes (con persistencia en LocalStorage)
const STORAGE_KEY = "loteria.settings.v1";
const settings = {
    duracionMs: 3000,
    sonidoActivado: true
};

function cargarAjustes() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const guardado = JSON.parse(raw);
        if (typeof guardado.duracionMs === "number" && guardado.duracionMs >= 1000 && guardado.duracionMs <= 10000) {
            settings.duracionMs = guardado.duracionMs;
        }
        if (typeof guardado.sonidoActivado === "boolean") {
            settings.sonidoActivado = guardado.sonidoActivado;
        }
    } catch (e) {
        console.warn("No se pudieron cargar los ajustes:", e);
    }
}

function guardarAjustes() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
        console.warn("No se pudieron guardar los ajustes:", e);
    }
}

// Estado
let mazoBarajeado = [];
let indiceActual = 0;
let temporizador = null;
let enCurso = false;
let enPausa = false;

// DOM
const shuffleBtn = document.getElementById("shuffleBtn");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const statusEl = document.getElementById("status");
const counterEl = document.getElementById("counter");
const cardEl = document.getElementById("card");
const historyEl = document.getElementById("history");
const durationInput = document.getElementById("durationInput");
const durationValue = document.getElementById("durationValue");
const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");

// Fisher–Yates
function barajear(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

const CARD_BASE = "card-responsive rounded-3xl flex flex-col justify-center items-center shadow-card relative overflow-hidden text-center";

function renderDorso() {
    cardEl.className = `${CARD_BASE} card-back-pattern p-4`;
    cardEl.innerHTML = `
        <img src="logo/logo.png" alt="Doña Bau" class="w-3/4 drop-shadow-md" />
    `;
}

function renderCarta(carta) {
    cardEl.className = `${CARD_BASE} bg-bau-white animate-flipIn`;
    if (carta.imagen) {
        cardEl.innerHTML = `
            <img src="${carta.imagen}" alt="${carta.nombre}" class="absolute inset-0 w-full h-full object-cover" />
        `;
    } else {
        cardEl.innerHTML = `
            <span class="font-display text-3xl text-bau-rose">${carta.nombre}</span>
        `;
    }
}

function actualizarContador() {
    counterEl.textContent = `${indiceActual} / ${TOTAL_CARTAS}`;
}

function agregarAlHistorial(carta) {
    const placeholder = historyEl.querySelector("li.italic");
    if (placeholder) placeholder.remove();

    const li = document.createElement("li");
    li.className = "group relative w-16 sm:w-20 aspect-[17/24] rounded-lg overflow-hidden border-2 border-bau-pink/60 shadow-soft bg-bau-white";
    li.title = `${carta.numero}. ${carta.nombre}`;
    li.innerHTML = carta.imagen
        ? `<img src="${carta.imagen}" alt="${carta.nombre}" class="w-full h-full object-cover" />
           <span class="absolute top-0 left-0 bg-bau-rose text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-lg">${carta.numero}</span>`
        : `<span class="flex items-center justify-center w-full h-full font-display text-bau-rose text-sm">${carta.nombre}</span>`;
    historyEl.insertBefore(li, historyEl.firstChild);
}

function vaciarHistorial() {
    historyEl.innerHTML = '<li class="text-bau-brown/50 italic text-sm">Aún no se han mostrado cartas...</li>';
}

function mostrarSiguiente() {
    if (enPausa) return;
    if (indiceActual >= mazoBarajeado.length) {
        finalizar();
        return;
    }

    const carta = mazoBarajeado[indiceActual];
    renderCarta(carta);
    reproducirSonido(carta);
    agregarAlHistorial(carta);
    indiceActual++;
    actualizarContador();

    temporizador = setTimeout(mostrarSiguiente, settings.duracionMs);
}

function finalizar() {
    enCurso = false;
    enPausa = false;
    temporizador = null;
    statusEl.textContent = "¡Mazo completo! Reinicia para volver a jugar.";
    renderDorso();
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    pauseBtn.textContent = "⏸ Pausar";
    shuffleBtn.disabled = false;
}

function reiniciar() {
    if (temporizador) {
        clearTimeout(temporizador);
        temporizador = null;
    }
    enCurso = false;
    enPausa = false;
    mazoBarajeado = [];
    indiceActual = 0;
    vaciarHistorial();
    actualizarContador();
    renderDorso();
    statusEl.textContent = 'Presiona "Barajear" para empezar.';
    shuffleBtn.disabled = false;
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    pauseBtn.textContent = "⏸ Pausar";
}

function togglePausa() {
    if (!enCurso) return;
    if (!enPausa) {
        enPausa = true;
        if (temporizador) {
            clearTimeout(temporizador);
            temporizador = null;
        }
        pauseBtn.textContent = "▶ Reanudar";
        statusEl.textContent = "Pausado.";
    } else {
        enPausa = false;
        pauseBtn.textContent = "⏸ Pausar";
        statusEl.textContent = "Repartiendo cartas...";
        temporizador = setTimeout(mostrarSiguiente, settings.duracionMs);
    }
}

// Eventos
shuffleBtn.addEventListener("click", () => {
    if (enCurso) return;
    mazoBarajeado = barajear(MAZO);
    indiceActual = 0;
    vaciarHistorial();
    actualizarContador();
    renderDorso();
    statusEl.textContent = "Mazo barajeado. Listo para comenzar.";
    startBtn.disabled = false;
});

startBtn.addEventListener("click", () => {
    if (enCurso || mazoBarajeado.length === 0) return;
    enCurso = true;
    enPausa = false;
    statusEl.textContent = "Repartiendo cartas...";
    startBtn.disabled = true;
    shuffleBtn.disabled = true;
    pauseBtn.disabled = false;
    pauseBtn.textContent = "⏸ Pausar";
    mostrarSiguiente();
});

pauseBtn.addEventListener("click", togglePausa);
resetBtn.addEventListener("click", reiniciar);

durationInput.addEventListener("input", (e) => {
    const segundos = parseFloat(e.target.value);
    settings.duracionMs = segundos * 1000;
    durationValue.textContent = segundos.toFixed(1);
    guardarAjustes();
});

soundToggle.addEventListener("change", (e) => {
    settings.sonidoActivado = e.target.checked;
    soundLabel.textContent = e.target.checked ? "Activado \ud83d\udd14" : "Desactivado \ud83d\udd15";
    guardarAjustes();
});

// Inicialización
cargarAjustes();
const segundosIniciales = settings.duracionMs / 1000;
durationInput.value = segundosIniciales;
durationValue.textContent = segundosIniciales.toFixed(1);
soundToggle.checked = settings.sonidoActivado;
soundLabel.textContent = settings.sonidoActivado ? "Activado \ud83d\udd14" : "Desactivado \ud83d\udd15";
actualizarContador();
renderDorso();
