let usuario = prompt("Ingresa un usuario");

while (usuario == "") {

    if (usuario == "") {
        alert("No ingresaste un usuario")
    }
    usuario = prompt("Ingresa un usuario");
}
alert("Usuario guardado con exito")

let contraseña = prompt("Ingresa una contraseña");

while (contraseña == "") {

    if (contraseña == "") {
        alert("No ingresaste una contraseña")
    }
    contraseña = prompt("Ingresa una contraseña")
}
alert("Contraseña guardada con exito")


let confirmarus = prompt("Confirma tu usuario");


function confirmar(confirmarus, usuario) {
    while (confirmarus != usuario) {
        if (confirmarus != usuario) {
            alert("Incorrecto")
        }
        confirmarus = prompt("Confirmar");
    }
    alert("Confirmado")


}

confirmar(confirmarus, usuario)


let confirmarco = prompt("Confirma tu contraseña");

confirmar(confirmarco, contraseña)

alert("Bienvenido " + usuario)

