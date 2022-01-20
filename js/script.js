// Variables
const form = document.querySelector('form');
const email = document.querySelector('.ipt_email');
const errortext = document.querySelector('.error_text');
const err = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const btnsubmit = document.querySelector('.btnSubmit');
const spinner = document.querySelector('.sk-chase');
const salida = document.querySelector('.salida');

// Eventos

eventListener();

function eventListener() {

    email.addEventListener('blur', validarFormulario);
    form.addEventListener('submit', validarFormulario);
}



// Funciones
function validarFormulario(e) {

    e.preventDefault();

    if (email.value.length < 1) {

        form.classList.add('error');
        errortext.innerHTML = 'Email cannot be empty';
        email.placeholder = 'example@email.com';
        return;

    }
    if (!err.test(email.value)) {
        form.classList.add('error');
        errortext.innerHTML = 'Please provide a valid email address';
        email.placeholder = 'example@email.com';
    } else {
        sendEmail();
    }

}

// prueba@prueba.com

function sendEmail() {

    
    limpiarHTML();
    var message = document.createElement('p');
    message.classList.add('message');
    message.style.display = 'none';
    salida.appendChild(message);

    
    form.classList.remove('error');
    spinner.style.display = 'block';
    
    setTimeout(() => {

        spinner.style.display = 'none';
        message.style.display = 'block';
        message.innerHTML = `Successful email&nbsp;&nbsp;  <i class="fas fa-thumbs-up"></i>`;
        
        setTimeout(() => {
            message.remove();
            form.reset();

        }, 5000)
        
    }, 3000)

}

// sdsdss@gmail.com

// Limpiar HTML
function limpiarHTML() {

    while(salida.firstChild) {
        salida.removeChild(salida.firstChild);
    }
}