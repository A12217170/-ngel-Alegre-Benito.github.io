// Seleccionar elementos dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
});

// ----------------------
// 1. Estilos de Transición
// ----------------------
const transitionDuration = 300; // en milisegundos

// ----------------------
// 2. Datos de Usuarios
// ----------------------
const users = [
    { username: "ANGEL_A", password: "AMISTAD1221" },
    { username: "user", password: "user123" }
];

// ----------------------
// 3. Variables Globales
// ----------------------
let clients = [];
let products = [];
let sales = [];
let activities = [];

// ----------------------
// 4. Manejo de Inicio de Sesión
// ----------------------
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");

    // Verificar si las credenciales son correctas
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Si las credenciales son correctas, mostrar el contenido del CRM
        handleLoginSuccess();
    } else {
        // Si las credenciales son incorrectas, mostrar mensaje de error
        handleLoginError();
    }
});

// Función para manejar el éxito en el inicio de sesión
function handleLoginSuccess() {
    document.getElementById("loginScreen").style.display = "none";
    const crmContent = document.getElementById("crmContent");
    crmContent.style.display = "block";
    setTimeout(() => {
        crmContent.classList.add("visible");
    }, transitionDuration);
}

// Función para manejar el error de inicio de sesión
function handleLoginError() {
    const loginError = document.getElementById("loginError");
    loginError.textContent = "Usuario o contraseña incorrectos.";
    loginError.style.display = "block";
}
