const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();

    const {name,email,password} = event.target

    console.log(name.value, email.value, password.value);

    if (name.value.length === 0) alert("el nombre no es válido");

};

form.addEventListener('submit', enviarFormulario);

