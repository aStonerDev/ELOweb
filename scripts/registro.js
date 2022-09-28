/*Base de datos*/
 
/*Extraer constantes */
const username = document.getElementById("inp-user");
const password = document.getElementById("inp-pass");
const passwordConfirm = document.getElementById("inp-pass2");
const button = document.getElementById("registrar");
button.addEventListener("click", registrar);

function registrar() {
  let user = buscarUsuario(username.value);
    if (user == null) {
      if (password.value == passwordConfirm.value) {
        const usuario = {
          nombre: username.value,
          password: password.value
        };
      alert("Registrado");
    } else alert("Las contraseñas no coinciden");
  } else alert("El usuario ya existe");
}

function test() {
  console.log(db)
}