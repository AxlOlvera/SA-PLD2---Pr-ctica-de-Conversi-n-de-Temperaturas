/* ============================================
   CONVERTERS.JS
   Funciones de conversión de temperatura
   ============================================ */

/**
 * Convierte grados Celsius a Fahrenheit
 * Fórmula: F = (C × 9/5) + 32
 * @param {number} celsius - Temperatura en grados Celsius
 * @returns {number} - Temperatura en grados Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Convierte grados Celsius a Kelvin
 * Fórmula: K = C + 273.15
 * @param {number} celsius - Temperatura en grados Celsius
 * @returns {number} - Temperatura en grados Kelvin
 */
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

/**
 * Convierte temperatura desde Celsius y retorna objeto con todas las escalas
 * Mantiene la misma cantidad de decimales que el input original
 * @param {number} celsius - Temperatura en grados Celsius
 * @param {number} decimals - Cantidad de decimales a mantener
 * @returns {Object} - { celsius, fahrenheit, kelvin } con decimales preservados
 */
function convertTemperature(celsius, decimals = 2) {
  const fahrenheit = celsiusToFahrenheit(celsius);
  const kelvin = celsiusToKelvin(celsius);

  return {
    celsius: Number(celsius.toFixed(decimals)),
    fahrenheit: Number(fahrenheit.toFixed(decimals)),
    kelvin: Number(kelvin.toFixed(decimals))
  };
}

/**
 * Obtiene la cantidad de decimales de un número
 * @param {string} numberString - Número en formato string
 * @returns {number} - Cantidad de decimales
 */
function getDecimalPlaces(numberString) {
  // Si no tiene punto decimal, retorna 0
  if (!numberString.includes('.')) {
    return 0;
  }
  
  // Obtiene la parte decimal
  const decimalPart = numberString.split('.')[1];
  
  // Retorna la cantidad de dígitos
  return decimalPart ? decimalPart.length : 0;
}