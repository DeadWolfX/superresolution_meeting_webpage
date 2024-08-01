document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.querySelector('.download-btn');
    const scheduleBtns = document.querySelectorAll('.show-schedule-btn');
    const scheduleContent = document.getElementById('schedule-content');

    downloadBtn.addEventListener('click', function () {
        // Puedes redirigir a la URL del PDF y abrir en una nueva ventana
        const pdfURL = '/docs/Preliminary program.pdf';
        window.open(pdfURL, '_blank');
    });    
    
    scheduleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Obtén la fecha y los eventos asociados al botón
            const date = this.getAttribute('data-date');
            const events = JSON.parse(this.getAttribute('data-events'));

            // Limpia el contenido actual
            scheduleContent.innerHTML = '';

            // Agrega cada evento como un nuevo párrafo
            events.forEach(event => {
                const eventElement = document.createElement('p');
                eventElement.textContent = event;
                scheduleContent.appendChild(eventElement);
            });

            // Añade la clase 'active' al botón presionado
            scheduleBtns.forEach(btn => btn.classList.remove('active-btn'));
            this.classList.add('active-btn');

            // Añade la clase 'active' para mostrar el contenido
            scheduleContent.classList.add('active');
        });
    });

   
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

