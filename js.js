document.addEventListener('DOMContentLoaded', () => {
    const userName = document.querySelector('.user-name');
    const sparkleCount = 5; 

    const userNameRect = userName.getBoundingClientRect(); 

    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
          
            const x = Math.random() * userNameRect.width; 
            const y = Math.random() * userNameRect.height;
            
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            userName.appendChild(sparkle);
        }, Math.random() * 2000); 
    } 
}); 


  document.addEventListener('DOMContentLoaded', () => {
    const domicilioRadio = document.getElementById('domicilioRadio');
    const direccion = document.getElementById('direccion');
    const otrosRadio = document.querySelectorAll('input[name=tipo-servicio]');

    otrosRadio.forEach(radio => {
      radio.addEventListener('change', () => {
        if (domicilioRadio.checked) {
          direccion.disabled = false;
          direccion.required = true;
        } else {
          direccion.disabled = true;
          direccion.required = false;
        }
      });
    });
  });

  document.getElementById('agendar-form').addEventListener('submit',(e) => {
    e.preventDefault();

    // Ocultar form
    document.getElementById('agendar-form').style.display = 'none';
    //Mostrar mensaje de éxito
    document.getElementById('reserva-exitosa').style.display = 'block';
  });