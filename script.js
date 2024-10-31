    document.addEventListener('DOMContentLoaded', () => {
      // Array con líneas de texto aleatorias
    const textLines = [
        "...vestibulum mollis, tortor ac congue commodo",
        "...mauris in vehicula justo, non tincidunt lorem",
        "...phasellus ut ante euismod, congue elit id, tempor ex"
      ];
  
      let currentIndex = 0;
  
      // Función actualiza el texto cada 2 segundos
      function updateText() {
        const carouselLine = document.getElementById("carousel-line");
        currentIndex = (currentIndex + 1) % textLines.length; 
        carouselLine.textContent = textLines[currentIndex];
      }
      setInterval(updateText, 2000);
    
    //Función hace dinámico el acordion
      const accordion = document.getElementById('accordionExample');
      const accordionContainer = document.getElementById('accordion-container');
      const accordionInNavbar = document.getElementById('accordion-in-navbar');

      function moveAccordion() {
        if (!accordion || !accordionContainer || !accordionInNavbar) return; // Verifica elementos

        if (window.innerWidth <= 992) {
          if (!accordionInNavbar.contains(accordion)) {
            accordionInNavbar.appendChild(accordion);
          }
        } else {
          if (!accordionContainer.contains(accordion)) {
            accordionContainer.appendChild(accordion);
          }
        }
      }

      // Ejecuta la función y cambia tamaño
      moveAccordion();
      window.addEventListener('resize', moveAccordion);
});