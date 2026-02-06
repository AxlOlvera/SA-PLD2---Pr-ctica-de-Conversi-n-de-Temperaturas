/* ============================================
   VALIDATORS.JS
   Funciones de validación para entrada del usuario
   ============================================ */

/**
 * Valida que el input sea un número válido con hasta 6 decimales
 * @param {string} input - El valor del input a validar
 * @returns {Object} - { isValid: boolean, error: string }
 */
function validateTemperatureInput(input) {
  // Validar que no esté vacío
  if (!input || input.trim() === '') {
    return {
      isValid: false,
      error: 'Por favor ingresa una temperatura'
    };
  }

  // Regex: permite números positivos/negativos con hasta 6 decimales
  // Ejemplos válidos: 23, -40, 25.5, -273.15, 100.123456
  const regex = /^-?\d+(\.\d{1,6})?$/;
  
  if (!regex.test(input)) {
    return {
      isValid: false,
      error: 'Ingresa un número válido (máximo 6 decimales)'
    };
  }

  // Convertir a número
  const temp = parseFloat(input);

  // Validar que sea un número (por si acaso)
  if (isNaN(temp)) {
    return {
      isValid: false,
      error: 'El valor ingresado no es un número válido'
    };
  }

  // Validar límite físico: Cero absoluto (-273.15°C)
  if (temp < -273.15) {
    return {
      isValid: false,
      error: 'La temperatura no puede ser menor a -273.15°C (cero absoluto)'
    };
  }

  // Validar límite superior razonable (temperatura de la superficie del sol)
  if (temp > 6000) {
    return {
      isValid: false,
      error: 'La temperatura es demasiado alta (máximo 6000°C)'
    };
  }

  // Si pasó todas las validaciones
  return {
    isValid: true,
    error: ''
  };
}

/**
 * Determina el color del termómetro según la temperatura en Celsius
 * @param {number} celsius - Temperatura en grados Celsius
 * @returns {string} - Color en formato CSS
 */
function getTemperatureColor(celsius) {
  if (celsius < 0) {
    return '#3b82f6'; // Azul - Frío
  } else if (celsius < 15) {
    return '#06b6d4'; // Cyan - Fresco
  } else if (celsius < 25) {
    return '#10b981'; // Verde - Moderado
  } else if (celsius < 35) {
    return '#f59e0b'; // Naranja - Cálido
  } else {
    return '#ef4444'; // Rojo - Caliente
  }
}

/**
 * Calcula el porcentaje de llenado del termómetro
 * Los termómetros tienen un rango visual de -50°C a 150°C
 * @param {number} temp - Temperatura a mostrar
 * @param {string} scale - Escala ('celsius', 'fahrenheit', 'kelvin')
 * @returns {number} - Porcentaje de llenado (0-100)
 */
function calculateThermometerFill(temp, scale) {
  let min, max;
  
  switch(scale) {
    case 'celsius':
      min = -50;
      max = 150;
      break;
    case 'fahrenheit':
      min = -58;  // -50°C en Fahrenheit
      max = 302;  // 150°C en Fahrenheit
      break;
    case 'kelvin':
      min = 223.15; // -50°C en Kelvin
      max = 423.15; // 150°C en Kelvin
      break;
    default:
      return 0;
  }

  // Calcular porcentaje
  let percentage = ((temp - min) / (max - min)) * 100;
  
  // Limitar entre 0 y 100
  percentage = Math.max(0, Math.min(100, percentage));
  
  return percentage;
}