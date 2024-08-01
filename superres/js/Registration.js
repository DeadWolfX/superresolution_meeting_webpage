function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function redirectToForm() {
    // Redirige al usuario al formulario de Google cuando hace clic en el botón "Register here"
    window.open("https://docs.google.com/forms/d/1CK14XgfB86rEwjsZtlMwFKdrJ27MSlxg1L_3e8Tp4a0/viewform?edit_requested=true", "_blank"); 
}
