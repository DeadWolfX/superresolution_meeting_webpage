function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

function updateCountdown() {
    // Obtener la fecha actual y la fecha del evento (22 de agosto de 2023)
    const currentDate = new Date();
    const eventDate = new Date("2024-08-22T07:45:00");

    // Calcular la diferencia de tiempo entre las fechas
    const timeDifference = eventDate - currentDate;

    // Verificar si la cuenta regresiva ha llegado a cero
    if (timeDifference <= 0) {
        // Si es así, ocultar los contadores y mostrar el panel "Es Hoy"
        document.querySelector(".time-panels").style.display = "none";
        document.querySelector(".is-today-panel").style.display = "block";
    } else {
        // Calcular meses, días, horas, minutos y segundos restantes
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));/*HOHA*/
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-2);/*HOHA*/
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Actualizar el contenido de los elementos HTML con números formateados
        document.querySelector(".months p").textContent = formatNumber(months) + " Months";
        document.querySelector(".days p").textContent = formatNumber(days) + " Days";
        document.querySelector(".hours p").textContent = formatNumber(hours) + " Hours";
        document.querySelector(".minutes p").textContent = formatNumber(minutes) + " Minutes";
        document.querySelector(".seconds p").textContent = formatNumber(seconds) + " Seconds";
    }
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Llamar a la función inicialmente para evitar un retraso en la actualización
updateCountdown();

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

$(document).ready(function(){
    $('.carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
