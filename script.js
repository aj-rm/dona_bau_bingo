// Configuración
const TOTAL_CARTAS = 54;

// Audio placeholder: tono corto generado con Web Audio API.
// Para usar un archivo real, reemplaza `reproducirSonido` por:
//   const audio = new Audio('sounds/carta.mp3'); audio.play();
let audioCtx = null;
function reproducirSonido() {
    if (!settings.sonidoActivado) return;
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
        console.warn("No se pudo reproducir el sonido:", e);
    }
}

// Mazo placeholder (54 cartas). Sustituye `nombre` e `imagen` cuando
// tengas las cartas finales.
const MAZO = Array.from({ length: TOTAL_CARTAS }, (_, i) => ({
    numero: i + 1,
    nombre: `Carta ${i + 1}`,
    imagen: null
}));

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

const CARD_BASE = "card-responsive rounded-2xl border-4 sm:border-[6px] border-loteria-wood flex flex-col justify-center items-center p-3 sm:p-4 shadow-card relative overflow-hidden text-center";

function renderDorso() {
    cardEl.className = `${CARD_BASE} card-back-pattern`;
    cardEl.innerHTML = `
        <span class="bg-white/90 px-4 sm:px-6 py-2 rounded-lg font-display font-bold text-2xl sm:text-3xl tracking-[0.2em] text-loteria-bg border-2 border-loteria-wood">
            LOTERÍA
        </span>
    `;
}

function renderCarta(carta) {
    cardEl.className = `${CARD_BASE} bg-loteria-cream animate-flipIn`;
    const contenidoImagen = carta.imagen
        ? `<img src="${carta.imagen}" alt="${carta.nombre}" class="w-full h-full object-contain" />`
        : `<span class="text-5xl sm:text-6xl text-loteria-wood/60">?</span>`;

    cardEl.innerHTML = `
        <span class="absolute top-2 left-3 sm:top-3 sm:left-4 font-display font-bold text-2xl sm:text-3xl text-loteria-wood">${carta.numero}</span>
        <span class="absolute top-2 right-3 sm:top-3 sm:right-4 font-display font-bold text-xl sm:text-2xl text-loteria-wood/70">${carta.numero}</span>
        <div class="w-[75%] h-[60%] rounded-lg border-[3px] border-dashed border-loteria-wood flex items-center justify-center mb-3 sm:mb-4"
             style="background: linear-gradient(135deg, #e8dcc0 0%, #c9b899 100%);">
            ${contenidoImagen}
        </div>
        <div class="font-display font-bold text-xl sm:text-2xl text-loteria-wood uppercase tracking-wider">${carta.nombre}</div>
    `;
}

function actualizarContador() {
    counterEl.textContent = `${indiceActual} / ${TOTAL_CARTAS}`;
}

function agregarAlHistorial(carta) {
    const placeholder = historyEl.querySelector("li.italic");
    if (placeholder) placeholder.remove();

    const li = document.createElement("li");
    li.className = "bg-loteria-gold/15 border border-loteria-goldDark/60 text-loteria-cream px-2.5 py-1 rounded text-sm font-medium";
    li.textContent = `${carta.numero}. ${carta.nombre}`;
    historyEl.insertBefore(li, historyEl.firstChild);
}

function vaciarHistorial() {
    historyEl.innerHTML = '<li class="text-loteria-cream/40 italic text-sm">Aún no se han mostrado cartas...</li>';
}

function mostrarSiguiente() {
    if (enPausa) return;
    if (indiceActual >= mazoBarajeado.length) {
        finalizar();
        return;
    }

    const carta = mazoBarajeado[indiceActual];
    renderCarta(carta);
    reproducirSonido();
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
