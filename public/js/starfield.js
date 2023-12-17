// StarField ;)
// Obtener el lienzo (canvas) del documento HTML
const canvas = document.getElementById('starfield')

const ctx = canvas.getContext('2d')

// Obtener las dimensiones del lienzo
const rect = canvas.getBoundingClientRect()
var width = rect.width

// Ajustar el ancho del lienzo para que coincida con el ancho de la pantalla
canvas.width = window.innerWidth

// Ajustar la altura del lienzo para que coincida con la altura de la pantalla
canvas.height = window.innerHeight

// Obtener las dimensiones del lienzo
var width = canvas.width
const height = canvas.height

// Crear un arreglo para almacenar las estrellas
const stars = []

// Crear las estrellas
for (let i = 0; i < 100; i++) {
  const star = {
    x: Math.random() * width, // Posición x aleatoria
    y: Math.random() * height, // Posición y aleatoria
    size: Math.random() * 2 + 1, // Tamaño aleatorio
    speed: Math.random() * 3 + 1 // Velocidad aleatoria
  }
  stars.push(star)
}
// Función para animar las estrellas
function animate () {
  // Limpiar el lienzo
  ctx.clearRect(0, 0, width, height)

  // Dibujar las estrellas
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i]
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(star.x, star.y, star.size, star.size)

    // Mover la estrella hacia la izquierda
    star.x -= star.speed

    // Si la estrella se sale del lienzo, reiniciar su posición
    if (star.x < 0) {
      star.x = width
    }
  }

  // Llamar a la función de animación en el siguiente fotograma
  requestAnimationFrame(animate)
}

// Iniciar la animación
// animate();
