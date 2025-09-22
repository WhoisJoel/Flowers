// Crear flores flotantes de fondo
function crearFloresFlotantes() {
    const contenedor = document.getElementById('floresFlotantes');
    
    for (let i = 0; i < 15; i++) {
        const flor = document.createElement('div');
        flor.className = 'flor-flotante';
        flor.style.left = Math.random() * 100 + 'vw';
        flor.style.animationDuration = (15 + Math.random() * 15) + 's';
        flor.style.animationDelay = Math.random() * 5 + 's';
        flor.style.fontSize = (15 + Math.random() * 20) + 'px';
        contenedor.appendChild(flor);
    }
}

// ---------- HOJAS ----------
function dibujarHojas(x, y, tamaño) {
    ctx.save();
    ctx.translate(x, y);
    
    // Hoja izquierda
    ctx.beginPath();
    ctx.fillStyle = "#2d7a2d";
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-20 * tamaño, 10 * tamaño, -15 * tamaño, 30 * tamaño);
    ctx.quadraticCurveTo(-5 * tamaño, 20 * tamaño, 0, 0);
    ctx.fill();
    
    // Hoja derecha
    ctx.beginPath();
    ctx.fillStyle = "#2d7a2d";
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(20 * tamaño, 10 * tamaño, 15 * tamaño, 30 * tamaño);
    ctx.quadraticCurveTo(5 * tamaño, 20 * tamaño, 0, 0);
    ctx.fill();
    
    ctx.restore();
}

// ---------- FLORES MEJORADAS ----------
function tulipan(x, y, color) {
    // Tallo con gradiente
    ctx.beginPath();
    const talloGradiente = ctx.createLinearGradient(x, y, x, y + 70);
    talloGradiente.addColorStop(0, "#4caf50");
    talloGradiente.addColorStop(1, "#2e7d32");
    ctx.strokeStyle = talloGradiente;
    ctx.lineWidth = 3;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 70);
    ctx.stroke();
    
    // Hojas en el tallo
    dibujarHojas(x, y + 40, 1);
    
    // Pétalos con gradiente y detalles
    ctx.save();
    ctx.translate(x, y);
    
    // Pétalo trasero
    ctx.beginPath();
    const petaloGradiente = ctx.createLinearGradient(-15, -15, 15, 15);
    petaloGradiente.addColorStop(0, aclararColor(color, 30));
    petaloGradiente.addColorStop(1, oscurecerColor(color, 20));
    ctx.fillStyle = petaloGradiente;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-18, -35, -18, 5, 0, 18);
    ctx.bezierCurveTo(18, 5, 18, -35, 0, 0);
    ctx.fill();
    
    // Detalles en los pétalos
    ctx.beginPath();
    ctx.strokeStyle = oscurecerColor(color, 15);
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-8, -15, -8, 5, 0, 10);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(8, -15, 8, 5, 0, 10);
    ctx.stroke();
    
    ctx.restore();
}

function hortensia(x, y, baseColor) {
    // Tallo
    ctx.beginPath();
    ctx.strokeStyle = "#2d7a2d";
    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 70);
    ctx.stroke();
    
    // Hojas
    dibujarHojas(x, y + 40, 0.8);
    
    // Base de la flor (verde)
    ctx.beginPath();
    ctx.fillStyle = "#5a9367";
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Racimo de flores con variaciones de color y tamaño
    for (let i = 0; i < 45; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 35;
        const px = x + Math.cos(angle) * radius * 0.7;
        const py = y + Math.sin(angle) * radius * 0.5;
        const tamaño = 5 + Math.random() * 3;
        
        // Variación de color
        const variacionColor = variarColor(baseColor, 20);
        
        ctx.beginPath();
        ctx.fillStyle = variacionColor;
        ctx.arc(px, py, tamaño, 0, Math.PI * 2);
        ctx.fill();
        
        // Pequeño centro para cada flor
        ctx.beginPath();
        ctx.fillStyle = aclararColor(variacionColor, 40);
        ctx.arc(px, py, tamaño / 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function orquidea(x, y, color) {
    // Tallo
    ctx.beginPath();
    ctx.strokeStyle = "#2d7a2d";
    ctx.lineWidth = 3;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 70);
    ctx.stroke();
    
    // Hojas
    dibujarHojas(x, y + 30, 1.2);
    
    const cx = x;
    const cy = y;
    
    // Pétalos con gradiente
    for (let i = 0; i < 5; i++) {
        const angle = (i * 72 * Math.PI) / 180;
        const px = cx + Math.cos(angle) * 35;
        const py = cy + Math.sin(angle) * 35;
        
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle);
        
        const petaloGradiente = ctx.createLinearGradient(-18, -28, 18, 28);
        petaloGradiente.addColorStop(0, aclararColor(color, 30));
        petaloGradiente.addColorStop(1, oscurecerColor(color, 10));
        
        ctx.beginPath();
        ctx.fillStyle = petaloGradiente;
        ctx.ellipse(0, 0, 18, 28, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Detalles en los pétalos
        ctx.beginPath();
        ctx.strokeStyle = oscurecerColor(color, 15);
        ctx.lineWidth = 1;
        ctx.moveTo(0, -28);
        ctx.bezierCurveTo(-5, -10, 5, -10, 0, 28);
        ctx.stroke();
        
        ctx.restore();
    }
    
    // Centro con más detalles
    ctx.beginPath();
    const centroGradiente = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
    centroGradiente.addColorStop(0, "#fff0f6");
    centroGradiente.addColorStop(1, "#f8bbd0");
    ctx.fillStyle = centroGradiente;
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Patrón en el centro
    ctx.beginPath();
    ctx.fillStyle = "#5d2a5b";
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = "#ffeb3b";
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();
}

// ---------- ENVOLTORIO MEJORADO ----------
function dibujarEnvoltorio() {
    // Crear gradiente para el papel
    const papelGradiente = ctx.createLinearGradient(180, 300, 420, 300);
    papelGradiente.addColorStop(0, "#f8ecc9");
    papelGradiente.addColorStop(0.5, "#e6c89f");
    papelGradiente.addColorStop(1, "#d4b17e");
    
    // Forma principal del envoltorio
    ctx.beginPath();
    ctx.moveTo(180, 300);
    ctx.lineTo(300, 650);
    ctx.lineTo(420, 300);
    ctx.closePath();
    ctx.fillStyle = papelGradiente;
    ctx.fill();
    
    // Sombras para dar profundidad
    ctx.beginPath();
    ctx.moveTo(180, 300);
    ctx.lineTo(300, 650);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fill();
    
    // Pliegues en el papel
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.lineWidth = 1;
    ctx.moveTo(220, 350);
    ctx.lineTo(300, 600);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(380, 350);
    ctx.lineTo(300, 600);
    ctx.stroke();
    
    // Moño mejorado
    ctx.save();
    ctx.translate(300, 500);
    
    // Centro del moño
    ctx.beginPath();
    const moñoGradiente = ctx.createRadialGradient(0, 0, 0, 0, 0, 25);
    moñoGradiente.addColorStop(0, "#fff9c4");
    moñoGradiente.addColorStop(1, "#f4c542");
    ctx.fillStyle = moñoGradiente;
    ctx.arc(0, 0, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Detalle del centro del moño
    ctx.beginPath();
    ctx.fillStyle = "#ffd54f";
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Lazada izquierda con más detalle
    ctx.beginPath();
    ctx.fillStyle = "#f4c542";
    ctx.moveTo(-25, 0);
    ctx.quadraticCurveTo(-70, -40, -40, 20);
    ctx.quadraticCurveTo(-20, 40, -25, 0);
    ctx.fill();
    
    // Luz en la lazada izquierda
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.moveTo(-30, -5);
    ctx.quadraticCurveTo(-60, -35, -35, 10);
    ctx.quadraticCurveTo(-25, 25, -30, -5);
    ctx.fill();
    
    // Lazada derecha con más detalle
    ctx.beginPath();
    ctx.fillStyle = "#f4c542";
    ctx.moveTo(25, 0);
    ctx.quadraticCurveTo(70, -40, 40, 20);
    ctx.quadraticCurveTo(20, 40, 25, 0);
    ctx.fill();
    
    // Luz en la lazada derecha
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.moveTo(30, -5);
    ctx.quadraticCurveTo(60, -35, 35, 10);
    ctx.quadraticCurveTo(25, 25, 30, -5);
    ctx.fill();
    
    ctx.restore();
}

// ---------- FUNCIONES AUXILIARES ----------
function aclararColor(color, cantidad) {
    // Convierte colores hex a rgb para manipularlos
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    r = Math.min(255, r + cantidad);
    g = Math.min(255, g + cantidad);
    b = Math.min(255, b + cantidad);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function oscurecerColor(color, cantidad) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    r = Math.max(0, r - cantidad);
    g = Math.max(0, g - cantidad);
    b = Math.max(0, b - cantidad);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function variarColor(color, cantidad) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    // Variar cada componente de color aleatoriamente
    r = Math.max(0, Math.min(255, r + (Math.random() * cantidad * 2 - cantidad)));
    g = Math.max(0, Math.min(255, g + (Math.random() * cantidad * 2 - cantidad)));
    b = Math.max(0, Math.min(255, b + (Math.random() * cantidad * 2 - cantidad)));
    
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

// ---------- RAMO MEJORADO ----------
function dibujarRamo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo sutil para el ramo
    const fondoGradiente = ctx.createRadialGradient(300, 350, 50, 300, 350, 250);
    fondoGradiente.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    fondoGradiente.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = fondoGradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Flores con posiciones más naturales
    const coloresTulipanes = ["#ff7f7f", "#ffd166", "#ff69b4", "#ffa600", "#9c89b8", "#e0bb00", "#b388eb"];
    
    for (let i = 0; i < 9; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 15;
        const rotacion = (Math.random() - 0.5) * 0.2;
        
        ctx.save();
        ctx.translate(220 + i * 20, 260 - (i % 2) * 25);
        ctx.rotate(rotacion);
        tulipan(offsetX, offsetY, coloresTulipanes[i % coloresTulipanes.length]);
        ctx.restore();
    }
    
    // Hortensias con posiciones ligeramente variadas
    ctx.save();
    ctx.translate(260, 240);
    ctx.rotate(-0.1);
    hortensia(0, 0, "#8ecae6");
    ctx.restore();
    
    ctx.save();
    ctx.translate(340, 240);
    ctx.rotate(0.1);
    hortensia(0, 0, "#9d4edd");
    ctx.restore();
    
    // Orquídea central
    ctx.save();
    ctx.translate(300, 200);
    ctx.rotate(0.05);
    orquidea(0, 0, "#c77dff");
    ctx.restore();
    
    // Algunas flores adicionales pequeñas
    for (let i = 0; i < 5; i++) {
        const x = 250 + Math.random() * 100;
        const y = 280 + Math.random() * 40;
        const tamaño = 0.6 + Math.random() * 0.4;
        const color = ["#8ecae6", "#9d4edd", "#c77dff"][Math.floor(Math.random() * 3)];
        
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(tamaño, tamaño);
        hortensia(0, 0, color);
        ctx.restore();
    }
    
    // Envoltorio encima
    dibujarEnvoltorio();
}

// ---------- INICIALIZACIÓN ----------
const canvas = document.getElementById("ramoCanvas");
const ctx = canvas.getContext("2d");

// Iniciar
crearFloresFlotantes();
dibujarRamo();

// Opcional: Redibujar al hacer clic para generar un nuevo ramo
canvas.addEventListener('click', dibujarRamo);