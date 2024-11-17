document.getElementById('loginBtn').addEventListener('click', function() {
});

document.getElementById('signupBtn').addEventListener('click', function() {
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
});

// Función para redirigir a la página de registro de Doctor
document.getElementById('registerDoctor').addEventListener('click', function() {
    window.location.href = 'registro_doctor.html'; 
});

// Función para redirigir a la página de registro de Usuario
document.getElementById('registerUsuario').addEventListener('click', function() {
    window.location.href = 'registro_usuario.html'; 
});

// Función para redirigir a la página de login de Doctor
document.getElementById('loginDoctor').addEventListener('click', function() {
    window.location.href = 'login_doctor.html'; 
});

// Función para redirigir a la página de login de Usuario
document.getElementById('loginUsuario').addEventListener('click', function() {
    window.location.href = 'login_usuario.html'; 
});

// Mostrar/ocultar el menú desplegable al hacer clic en el botón de login
document.getElementById('loginBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdownLogin');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// Mostrar/ocultar el menú desplegable al hacer clic en el botón de Register
document.getElementById('signupBtn').addEventListener('click', function() {
    const dropdownSignup = document.getElementById('dropdownSignup');
    if (dropdownSignup.style.display === 'none' || dropdownSignup.style.display === '') {
        dropdownSignup.style.display = 'block';
    } else {
        dropdownSignup.style.display = 'none';
    }
});

// Ocultar los menús si se hace clic fuera de ellos
window.addEventListener('click', function(e) {
    if (!e.target.matches('#loginBtn') && !e.target.matches('#signupBtn')) {
        const dropdownLogin = document.getElementById('dropdownLogin');
        const dropdownSignup = document.getElementById('dropdownSignup');
        
        if (dropdownLogin.style.display === 'block') {
            dropdownLogin.style.display = 'none';
        }
        if (dropdownSignup.style.display === 'block') {
            dropdownSignup.style.display = 'none';
        }
    }
});

// Función para detectar si un elemento está visible en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la clase 'show' a las reseñas cuando son visibles
function animateReviews() {
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(review => {
        if (isInViewport(review)) {
            review.classList.add('show');
        }
    });
}

// Ejecutar la función cuando se haga scroll
window.addEventListener('scroll', animateReviews);

// Ejecutar la función al cargar la página para revisar si alguna reseña ya es visible
window.addEventListener('load', animateReviews);


// Agregar el evento submit al formulario
document.getElementById('userForm').addEventListener('submitdoctores', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Capturamos los datos del formulario
    const names = this.names.value;
    const surname = this.surname.value;
    const telephone = this.telephone.value;
    const identity_card = this.identity_card.value;
    const country = this.country.value;
    const specialty = this.specialty.value;
    const address = this.address.value;
    const clinic = this.clinic.value;
    const email = this.email.value;
    const password = this.password.value; 

    // Creamos un objeto con los datos
    const userData = {
        names,
        surname,
        telephone,
        identity_card,
        country,
        specialty,
        address,
        clinic,
        email,
        password,
    };

    // Guardamos en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Mensaje de confirmación (opcional)
    alert('Información guardada. Redirigiendo a la página de login.');

    // Redirigir a la página de inicio de sesión
    window.location.href = 'login_doctor.html'; 
});

// Capturamos el evento submit del formulario de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Recuperar los datos almacenados en localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            // Verificar si el email y la contraseña coinciden con los datos almacenados
            if (email === userData.email && password === userData.password) {
                // Mostrar una alerta indicando que la sesión ha iniciado correctamente
                alert('¡Sesión iniciada con éxito!');
                // Puedes redirigir a otra página si es necesario, por ejemplo:
                window.location.href = 'dashboard_doctor.html'; // Redirigir a un panel de usuario
            } else {
                // Mostrar un mensaje de error si los datos no coinciden
                alert('Email o contraseña incorrectos');
            }
        } else {
            // Mostrar un mensaje de error si no hay datos guardados en localStorage
            alert('No hay un usuario registrado con este email');
        }
    });

    document.getElementById('submitdoctores').addEventListener('click', function(event) {
        event.preventDefault();  // Evitar que el formulario se envíe
        alert('Formulario guardado exitosamente.');
    });