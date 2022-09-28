/*Trabajar con JSON */
const fs = require('fs');
const db = JSON.parse(fs.readFile('db.json'))

/*Extraer constantes */
const username = document.getElementById("inp-user");
const password = document.getElementById("inp-pass");
const passwordConfirm = document.getElementById("inp-pass2");
const button = document.getElementById("registrar");
button.addEventListener("click", registrar);

function buscarUsuario(nombre) {
  let i = 0; let retorno = null;

  while (i < usuarios.length && retorno == null) {
    if (db[i] == nombre) {                                              
      retorno = db[i];
    } else i++;
  }
  return retorno;
}

function registrar() {
  let user = buscarUsuario(username.value);
    if (user == null) {
      if (password.value == passwordConfirm.value) {
        const usuario = JSON.stringify({
          nombre: username.value,
          password: password.value
        });
        fs.writeFile('db.json', usuario, (error) => {
          if (error) throw error;
          console.log('Informacion recibida')
        });
      alert("Registrado");
    } else alert("Las contraseñas no coinciden");
  } else alert("El usuario ya existe");
}

function test() {
  console.log(db)
}