let boton_borrar = document.getElementById("boton_borrar");
let formulario = document.getElementById("registrationForm"); 
let toast = document.getElementById("Toast");
let checkoscuro = document.getElementById("CheckOscuro");

checkoscuro.addEventListener("click",() => {
    let div_descripcion = document.getElementById("descripcion");
    let form = document.getElementById("registrationForm");
    let body = document.getElementById("Cuerpo");
    let icono1 = document.getElementById("Icono1");
    let icono2 = document.getElementById("Icono2");
    let icono3 = document.getElementById("Icono3");
    if(checkoscuro.checked){
        icono1.classList.remove("iconluz")
        icono1.classList.add("iconoscuro")
        icono2.classList.remove("iconluz")
        icono3.classList.add("iconoscuro")
        icono3.classList.remove("iconluz")
        icono3.classList.add("iconoscuro")
 
        div_descripcion.classList.remove("colorblanco")
        form.classList.add("colorblanco")
        body.classList.remove("bodyLuz");
        body.classList.add("bodyOscuro");
    }else{
        icono1.classList.remove("iconoscuro")
        icono1.classList.add("iconluz")
        icono2.classList.remove("iconoscuro")
        icono2.classList.add("iconluz")
        icono3.classList.remove("iconoscuro")
        icono3.classList.add("iconluz")
        div_descripcion.classList.add("colorblanco")
        form.classList.remove("colorblanco")
        body.classList.remove("bodyOscuro");
        body.classList.add("bodyLuz");    }

},false);

document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#Tabla tbody tr");
  
    rows.forEach(row => {
      const nameCell = row.querySelector("td:nth-child(2)");
      if (nameCell) {
        const text = nameCell.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
      }
    });
  });

  function openModal(imgElement) {
    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    var expandedImage = document.getElementById('expandedImage');
    expandedImage.src = imgElement.src;
    modal.show();
  }

boton_borrar.addEventListener("click", borrarCampos, false);
formulario.addEventListener("submit",comprobarValidaciones,false);


function comprobarValidaciones(e){
    e.preventDefault();
    let Campo_nombre = document.getElementById("nameid");
    const errorNombre = document.getElementById("errorNombre");
    let Campo_apellido = document.getElementById("surnameid");
    const errorApellido = document.getElementById("errorApellido");
    let Campo_fecha = document.getElementById("Fecha nacimiento");
    const errorFecaha = document.getElementById("errorFecha");
    let Campo_email = document.getElementById("exampleInputEmail1");
    const errorEmail = document.getElementById("errorEmail");
    let Campo_contrasñea = document.getElementById("exampleInputPassword1");
    const errorContraseña = document.getElementById("errorContraseña");
    const checkbox = document.getElementById("invalidCheck");
    const errorCheckbox = document.getElementById("errorCheckbox");

    const no_numeros  = /^[a-zA-Z\s]+$/;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let esValido = true;

    if (Campo_nombre.value == "") {
        errorNombre.textContent = "Debes rellenar este campo";
        Campo_nombre.classList.add("invalid");
        esValido = false;
    } else if (!no_numeros.test(Campo_nombre.value)) {
        errorNombre.textContent = "El nombre solo puede contener letras y espacios.";   
        Campo_nombre.classList.add("invalid");
        esValido = false;
    } else {
        errorNombre.textContent = "";
        Campo_nombre.classList.remove("invalid");
    }

    if (Campo_apellido.value == "") {
        errorApellido.textContent = "Debes rellenar este campo";
        Campo_apellido.classList.add("invalid");
        esValido = false;
    } else if (!no_numeros.test(Campo_apellido.value)) {
        errorApellido.textContent = "El nombre solo puede contener letras y espacios.";
        Campo_apellido.classList.add("invalid");
        esValido = false;
    } else {
        errorApellido.textContent = "";
        Campo_apellido.classList.remove("invalid");
    }

    
    if (Campo_email.value == "") {
        errorEmail.textContent = "Debes rellenar este campo.";
        Campo_email.classList.add("invalid");
        esValido = false;
    } else if (!email_regex.test(Campo_email.value)) {
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
        Campo_email.classList.add("invalid");
        esValido = false;
    } else {
        errorEmail.textContent = "";
        Campo_email.classList.remove("invalid");
    }
    if (Campo_fecha.value == "") {
        errorFecha.textContent = "Debes ingresar tu fecha de nacimiento.";
        Campo_fecha.classList.add("invalid");
        esValido = false;
    }else{
        const hoy = new Date();
        const fechaNacimiento = new Date(Campo_fecha.value);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const diaActual = hoy.getDate();
        const mesNacimiento = fechaNacimiento.getMonth();
        const diaNacimiento = fechaNacimiento.getDate();

        if ( mesActual < mesNacimiento ||  (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        if (edad < 18) {
            errorFecha.textContent = "Debes ser mayor de 18 años.";
            Campo_fecha.classList.add("invalid");
            esValido = false;
        } else {
            errorFecha.textContent = "";
            Campo_fecha.classList.remove("invalid");
        }
    }

    


    if (Campo_contrasñea.value == "") {
        errorContraseña.textContent = "Debes ingresar una contraseña.";
        Campo_contrasñea.classList.add("invalid");
        esValido = false;
    } else if (Campo_contrasñea.value.length < 6) {
        errorContraseña.textContent = "La contraseña debe tener al menos 6 caracteres.";
        Campo_contrasñea.classList.add("invalid");
        esValido = false;
    } else {
        errorContraseña.textContent = "";
        Campo_contrasñea.classList.remove("invalid");
    }

    if(!checkbox.checked){
    errorCheckbox.textContent = "Debes aceptar los términos de servicio.";
    esValido = false;
    }else {
        errorCheckbox.textContent = "";
    }

    if(esValido){
        toastEnviado()
        console.log();
    }
}
function toastEnviado(){
    const segundos = 2000;
    const toast = document.getElementById("Toast_enviado");
    toast.innerHTML = '  <div class="toast-header">'
    + '<strong class="me-auto">Enviado Completado</strong>'
    + '<button id ="boton_toast" type="button" class="btn-close" aria-label="Close"></button>'
   + '</div>'
   +'<div class="toast-body">'
   + ' Todos los campos han sido enviados'
   +'</div>';
   setTimeout(() => {
    quitarToast(toast)
}, segundos);
}
function borrarCampos() {
 const segundos = 2000;
    toast.innerHTML = '  <div class="toast-header">'
    + '<strong class="me-auto">Borrado Completado</strong>'
    + '<button id ="boton_toast" type="button" class="btn-close" aria-label="Close"></button>'
   + '</div>'
   +'<div class="toast-body">'
   + ' Todos los campos han sido borrados'
   +'</div>';
    try {
        let boton_toast = document.getElementById("boton_toast");
        boton_toast.addEventListener("click",quitarToast,false);
    } catch(error){
        console.log(error);
    }

    setTimeout(() => {
        quitarToast(toast)
    }, segundos);
}

function quitarToast(toast){
    toast.innerHTML = "";
}