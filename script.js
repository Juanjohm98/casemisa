const datosTarjetas = {
  CW: {
    50: { titulo: "CW 50", imagen: "media/CW/cw-50.png",cotas: "47mm 49mm 50mm", medidas: ["2.600mm ", "2.750mm", "3.000mm", "3.250mm", "3.500mm", "3.750mm", "4.000mm", "4.500mm", "5.000mm"] },
    75: { titulo: "CW 75", imagen: "media/CW/cw-75.png",cotas: "47mm 74mm 50mm", medidas: ["2.600mm", "2.750mm", "3.000mm", "3.250mm", "3.500mm",  "4.000mm", "4.500mm", "5.000mm"] },
    100: { titulo: "CW 100", imagen: "media/CW/cw-100.png",cotas: "47mm 99mm 50mm", medidas: ["3.000mm", "3.500mm","4.000mm", "4.500mm"] },
  },
  UW: {
    50: { titulo: "UW 50", imagen: "media/UW/uw-50.png",cotas: "40mm 50mm 40mm", medidas: ["3.000mm", "4.000mm"] },
    75: { titulo: "UW 75", imagen: "media/UW/uw-75.png",cotas: "40mm 75mm 40mm", medidas: ["3.000mm"] },
    100: { titulo: "UW 100", imagen: "media/UW/uw-100.png",cotas: "40mm 100mm 40mm", medidas: ["3.000mm"] },
  },
  UA: {
    50: { titulo: "UA 50", imagen: "media/UA/ua-50.png",cotas: "40mm 48.80mm 40mm", medidas: ["2.600mm ", "2.750mm", "3.000mm", "3.250mm", "3.500mm", "3.750mm", "4.000mm",  "5.000mm"] },
    75: { titulo: "UA 75", imagen: "media/UA/ua-75.png",cotas: "40mm 73,80mm 40mm", medidas: ["2.750mm",, "3.000mm", "3.500mm","4.000mm",] },
    100: { titulo: "UA 100", imagen: "media/UA/ua-100.png",cotas: "40mm 98,80mm 40mm", medidas: ["3.000mm", "3.500mm","4.000mm",] },
  },
  CD: {
    60: { titulo: "CD 60", imagen: "media/CD/cd-60.png",cotas: "27mm 60mm 27mm", medidas: ["3.000mm","4.000mm"] },
  },
  UD: {
    28: { titulo: "UD 28", imagen: "media/CD/UD-28.png",cotas: "27mm 28mm 45mm", medidas: ["3.000mm"] },
  },
  UWF: {
    50: { titulo: "UW FLEX 50", imagen: "media/uw/uwf-50.png",cotas: "40mm 50mm 40mm", medidas: ["3.000mm"] },
    75: { titulo: "UW FLEX 75", imagen: "media/uw/uwf-75.png",cotas: "40mm 50mm 40mm", medidas: ["3.000mm"] },
  },
  CH: {
    14: { titulo: "CHAPEAU AMORTISEUR", imagen: "media/CH/c-14.png",cotas: "Amortiseur", medidas: ["4.000mm"] },
    15: { titulo: "CHAPEAU 15", imagen: "media/CH/c-15.png",cotas: "15mm", medidas: ["3.000mm"] },
    27: { titulo: "CHAPEAU 27", imagen: "media/CH/c-27.png",cotas: "27mm", medidas: ["3.000mm"] },
    36: { titulo: "CHAPEAU 36", imagen: "media/CH/c-36.png",cotas: "36mm", medidas: ["3.000mm"] },
  },
  TR: {
    12.5: { titulo: "TRIMELLE 12.5", imagen: "media/TR/TR12.5.png",cotas: "25mm 12.5mm", medidas: ["3.000mm"] },
    28: { titulo: "TRIMELLE 16.5", imagen: "media/TR/TR28.png",cotas: "28mm 16.5mm", medidas: ["3.000mm"] },
    38: { titulo: "TRIMELLE 26.5", imagen: "media/TR/TR40.png",cotas: "38mm 26.5mm", medidas: ["3.000mm"] },
    40: { titulo: "TRIMELLE 19", imagen: "media/TR/TR38.png",cotas: "40mm 19mm", medidas: ["3.000mm"] },
  },
  EM: {
    3: { titulo: "EMBRASSURE", imagen: "media/EM/EM3.png",cotas: "2.500mm", medidas: ["3.000mm"] },
    6: { titulo: "EMBRASSURE", imagen: "media/EM/EM6.png",cotas: "3.000mm", medidas: ["3.000mm"] },
    
  },
  BG: {
    25: { titulo: "BAGUETTE", imagen: "media/BG/BG25.png",cotas: "30mm 30mm", medidas: ["2.500mm","3.000mm"] },
    F: { titulo: "BAGUETTE", imagen: "media/BG/BGF.png",cotas: "30mm 30mm", medidas: ["3.000mm"] },
    
  },
  EN: {
    25: { titulo: "BAGUETTE", imagen: "media/EN/EN.png",cotas: "30mm 30mm", medidas: ["2.600mm","3.000mm"] },
    
  }
};

function cambiarContenido(tipo, variante) {
  // Buscar la tarjeta correspondiente por data-id
  const tarjeta = document.querySelector(`.card[data-id="${tipo}"]`);
  const titulo = tarjeta.querySelector(".titulo");
  const imagen = tarjeta.querySelector(".imagen");
  const cotas = tarjeta.querySelector(".cotas");
  const tablaMedidas = tarjeta.querySelector(".tabla-medidas tbody");

  // Verificar que existan datos para la tarjeta y variante
  if (!datosTarjetas[tipo] || !datosTarjetas[tipo][variante]) {
    console.error("Datos no encontrados para", tipo, variante);
    return;
  }

  const datos = datosTarjetas[tipo][variante];

  // Actualizar título e imagen
  titulo.textContent = datos.titulo;
  imagen.src = datos.imagen;
  cotas.textContent=datos.cotas

  // Actualizar tabla de medidas
  tablaMedidas.innerHTML = ""; // Limpiar contenido anterior
  datos.medidas.forEach(medida => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${medida}</td>`;
    tablaMedidas.appendChild(fila);
  });
}