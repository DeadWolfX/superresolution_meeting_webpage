document.addEventListener('DOMContentLoaded', function () {
    const scheduleBtns = document.querySelectorAll('.show-schedule-btn');
    const scheduleContent = document.getElementById('schedule-content');

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