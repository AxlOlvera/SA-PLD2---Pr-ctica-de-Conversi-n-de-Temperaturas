# SA-PLD2---Pr-ctica-de-Conversi-n-de-Temperaturas
# 🌡️ Calculadora de Temperaturas

Aplicación web interactiva para convertir temperaturas de Celsius a Fahrenheit y Kelvin, desarrollada como parte del programa de Lógica de Programación 2.

## 📋 Descripción

Esta aplicación permite a los usuarios ingresar una temperatura en grados Celsius y obtener instantáneamente su equivalente en Fahrenheit y Kelvin. Incluye validaciones robustas, visualización mediante termómetros animados y una interfaz responsiva moderna.

## ✨ Características

- ✅ Conversión precisa de Celsius a Fahrenheit y Kelvin
- ✅ Validación con Regex (hasta 6 decimales)
- ✅ Validación de límites físicos (cero absoluto y temperaturas extremas)
- ✅ Visualización con termómetros animados que cambian de color
- ✅ Interfaz responsiva (mobile, tablet, desktop)
- ✅ Diseño moderno con gradientes y animaciones
- ✅ Código bien documentado y modular

## 🚀 Casos de Prueba

### Prueba 1
- **Entrada:** 45°C
- **Salida Esperada:**
  - Fahrenheit: 113°F
  - Kelvin: 318.15K

### Prueba 2
- **Entrada:** 14°C
- **Salida Esperada:**
  - Fahrenheit: 57.2°F
  - Kelvin: 287.15K

## 📁 Estructura del Proyecto

```
temperatura-calculator/
│
├── index.html                 # Página principal
│
├── assets/
│   ├── css/
│   │   ├── variables.css      # Variables CSS (colores, espaciados, fuentes)
│   │   └── styles.css         # Estilos principales
│   │
│   └── js/
│       ├── validators.js      # Funciones de validación
│       ├── converters.js      # Funciones de conversión
│       └── main.js           # Lógica principal de la app
│
└── README.md                  # Documentación
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con:
  - Variables CSS para personalización
  - Flexbox y Grid para layouts
  - Animaciones y transiciones
  - Diseño responsivo (mobile-first)
- **JavaScript Vanilla** - Lógica de la aplicación:
  - Validación con Regex
  - Manipulación del DOM
  - Event Listeners
  - Funciones modulares

## 📖 Explicación del Código

### validators.js
Contiene funciones para validar la entrada del usuario:
- `validateTemperatureInput()` - Valida formato y rangos
- `getTemperatureColor()` - Determina el color del termómetro
- `calculateThermometerFill()` - Calcula el porcentaje de llenado

### converters.js
Contiene las fórmulas de conversión:
- `celsiusToFahrenheit()` - Fórmula: F = (C × 9/5) + 32
- `celsiusToKelvin()` - Fórmula: K = C + 273.15
- `convertTemperature()` - Convierte y formatea resultados
- `getDecimalPlaces()` - Preserva decimales del input

### main.js
Coordina toda la lógica de la aplicación:
- Inicialización del DOM
- Manejo de eventos
- Orquestación de validaciones y conversiones
- Actualización de la interfaz

## 🎨 Características de Diseño

### Metodología BEM (Block Element Modifier)
El CSS utiliza la nomenclatura BEM para mayor claridad:
```css
.temperature-card { }              /* Bloque */
.temperature-card__title { }       /* Elemento */
.temperature-card--fahrenheit { }  /* Modificador */
```

### Comentarios JSDoc
Todas las funciones están documentadas con JSDoc:
```javascript
/**
 * Convierte grados Celsius a Fahrenheit
 * @param {number} celsius - Temperatura en grados Celsius
 * @returns {number} - Temperatura en grados Fahrenheit
 */
```

## 🌈 Paleta de Colores

- **Frío** (< 0°C): Azul `#3b82f6`
- **Fresco** (0-15°C): Cyan `#06b6d4`
- **Moderado** (15-25°C): Verde `#10b981`
- **Cálido** (25-35°C): Naranja `#f59e0b`
- **Caliente** (> 35°C): Rojo `#ef4444`

## 💻 Cómo Usar

1. Abre `index.html` en tu navegador
2. Ingresa una temperatura en Celsius (ejemplos: 25, -40, 100.5)
3. Presiona "Convertir Temperatura" o Enter
4. Observa los resultados en las tarjetas y termómetros

## ✏️ Validaciones Implementadas

1. ✅ Campo no vacío
2. ✅ Solo números (positivos o negativos)
3. ✅ Máximo 6 decimales
4. ✅ Mayor a -273.15°C (cero absoluto)
5. ✅ Menor a 6000°C (límite razonable)

## 🔍 Debugging

Para ejecutar las pruebas automáticas, descomenta en `main.js`:
```javascript
// runTests();
```

Esto ejecutará los casos de prueba en la consola del navegador.

## 📱 Responsive Design

La aplicación es totalmente responsiva:
- **Mobile** (< 480px): Layout vertical, termómetros compactos
- **Tablet** (768px - 1024px): Grid de 2 columnas
- **Desktop** (> 1024px): Layout completo con termómetros en aside

## 🎯 Mejoras Futuras (Opcionales)

- [ ] Historial de conversiones
- [ ] Modo oscuro/claro
- [ ] Conversión inversa (F/K → C)
- [ ] Gráfica de comparación
- [ ] Exportar resultados a PDF
- [ ] Soporte de más unidades (Rankine, Réaumur)

## 👨‍💻 Autor

**Axl Sánchez**

Desarrollado con ❤️ para Generation - Lógica Programación 2

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🙏 Agradecimientos

Agradecimientos especiales a **Generation** por el programa de formación y la oportunidad de aprender desarrollo web.