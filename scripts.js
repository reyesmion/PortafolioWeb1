// Definimos una variable global slideIndex para rastrear el indice de la diapositiva actual
let slideIndex = 0;

// Llamamos a la funcion showSlides() para iniciar el carrusel
showSlides();

function showSlides() {
  // Seleccionamos todas las imagenes dentro del elemento con la clase 'carousel-content'
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Quitamos la clase 'active' de todas las imagenes para ocultarlas
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Incrementamos slideIndex para pasar a la siguiente imagen
  slideIndex++;
  
  // Si slideIndex es mayor que el numero de imagenes, lo restablecemos a 1 para volver a la primera imagen
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Se agrega la clase 'active' a la imagen actual para mostrarla
  slides[slideIndex - 1].classList.add('active');

  // Llamamos a la funcion showSlides() de nuevo despues de 2000 milisegundos (2 segundos) para pasar a la siguiente imagen
  setTimeout(showSlides, 2000); 
}
