/* ============================================
   MAIN.JS
   Lógica principal de la aplicación
   ============================================ */

// Variables globales para elementos del DOM
let inputElement;
let submitButton;
let errorElement;
let resultsSection;
let fahrenheitCard;
let kelvinCard;
let thermometersSection;
let thermometersContainer;

/**
 * Inicializa la aplicación cuando el DOM está cargado
 */
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

/**
 * Inicializa todos los elementos y event listeners
 */
function initializeApp() {
  // Obtener referencias a elementos del DOM
  inputElement = document.getElementById('celsius-input');
  submitButton = document.getElementById('submit-button');
  errorElement = document.getElementById('error-message');
  resultsSection = document.getElementById('results');
  fahrenheitCard = document.getElementById('fahrenheit-result');
  kelvinCard = document.getElementById('kelvin-result');
  thermometersSection = document.getElementById('thermometers-section');
  thermometersContainer = document.getElementById('thermometers');

  // Agregar event listeners
  submitButton.addEventListener('click', handleSubmit);
  
  // Permitir envío con Enter
  inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  });

  // Limpiar error cuando el usuario empieza a escribir
  inputElement.addEventListener('input', function() {
    hideError();
  });

  console.log('✅ Aplicación inicializada correctamente');
}

/**
 * Maneja el evento de envío del formulario
 */
function handleSubmit() {
  // Obtener el valor del input
  const inputValue = inputElement.value.trim();

  // Validar el input
  const validation = validateTemperatureInput(inputValue);

  if (!validation.isValid) {
    showError(validation.error);
    return;
  }

  // Si la validación pasó, procesar la conversión
  const celsius = parseFloat(inputValue);
  const decimals = getDecimalPlaces(inputValue);

  // Convertir temperatura
  const results = convertTemperature(celsius, decimals);

  // Mostrar resultados
  displayResults(results);

  // Animar termómetros
  animateThermometers(results);

  console.log('✅ Conversión exitosa:', results);
}

/**
 * Muestra un mensaje de error
 * @param {string} message - Mensaje de error a mostrar
 */
function showError(message) {
  errorElement.textContent = message;
  errorElement.classList.add('input-form__error--visible');
  inputElement.classList.add('input-form__input--error');
  
  // Ocultar resultados si hay error
  hideResults();
}

/**
 * Oculta el mensaje de error
 */
function hideError() {
  errorElement.classList.remove('input-form__error--visible');
  inputElement.classList.remove('input-form__input--error');
}

/**
 * Muestra los resultados de la conversión en las tarjetas
 * @param {Object} results - Objeto con celsius, fahrenheit y kelvin
 */
function displayResults(results) {
  // Mostrar sección de resultados
  resultsSection.classList.add('results--visible');

  // Actualizar tarjetas con los resultados
  fahrenheitCard.innerHTML = `
    ${results.fahrenheit}<span class="temperature-card__unit">°F</span>
  `;

  kelvinCard.innerHTML = `
    ${results.kelvin}<span class="temperature-card__unit">K</span>
  `;

  // Agregar animación de entrada
  setTimeout(() => {
    resultsSection.style.opacity = '1';
  }, 10);
}

/**
 * Oculta la sección de resultados
 */
function hideResults() {
  resultsSection.classList.remove('results--visible');
  thermometersContainer.classList.remove('thermometers--visible');
}

/**
 * Anima los termómetros con los valores convertidos
 * @param {Object} results - Objeto con celsius, fahrenheit y kelvin
 */
function animateThermometers(results) {
  // Mostrar sección de termómetros
  thermometersContainer.classList.add('thermometers--visible');

  // Obtener color basado en temperatura Celsius
  const color = getTemperatureColor(results.celsius);

  // Animar termómetro Celsius
  animateSingleThermometer('celsius', results.celsius, color);

  // Animar termómetro Fahrenheit
  animateSingleThermometer('fahrenheit', results.fahrenheit, color);

  // Animar termómetro Kelvin
  animateSingleThermometer('kelvin', results.kelvin, color);
}

/**
 * Anima un termómetro individual
 * @param {string} scale - Escala del termómetro ('celsius', 'fahrenheit', 'kelvin')
 * @param {number} value - Valor de temperatura a mostrar
 * @param {string} color - Color del líquido del termómetro
 */
function animateSingleThermometer(scale, value, color) {
  const fillElement = document.getElementById(`thermometer-fill-${scale}`);
  const valueElement = document.getElementById(`thermometer-value-${scale}`);

  // Calcular porcentaje de llenado
  const fillPercentage = calculateThermometerFill(value, scale);

  // Resetear la altura antes de animar
  fillElement.style.height = '0%';

  // Animar después de un pequeño delay
  setTimeout(() => {
    fillElement.style.height = `${fillPercentage}%`;
    fillElement.style.backgroundColor = color;
  }, 100);

  // Actualizar el valor mostrado
  const unit = scale === 'celsius' ? '°C' : scale === 'fahrenheit' ? '°F' : 'K';
  valueElement.textContent = `${value}${unit}`;
}

/* ============================================
   FUNCIONES DE DEBUG (pueden comentarse en producción)
   ============================================ */

/**
 * Función de prueba para verificar las conversiones
 * Ejecuta los casos de prueba del ejercicio
 */
function runTests() {
  console.log('🧪 Ejecutando pruebas...');
  
  // Prueba 1: 45°C
  const test1 = convertTemperature(45, 2);
  console.log('Test 1 - Input: 45°C');
  console.log('Fahrenheit:', test1.fahrenheit, '(esperado: 113)');
  console.log('Kelvin:', test1.kelvin, '(esperado: 318.15)');
  
  // Prueba 2: 14°C
  const test2 = convertTemperature(14, 2);
  console.log('\nTest 2 - Input: 14°C');
  console.log('Fahrenheit:', test2.fahrenheit, '(esperado: 57.2)');
  console.log('Kelvin:', test2.kelvin, '(esperado: 287.15)');
  
  console.log('\n✅ Pruebas completadas');
}

// Descomentar para ejecutar pruebas al cargar
// runTests();