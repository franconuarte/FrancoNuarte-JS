let usuario = document.getElementById("usuario");
let cousuario = document.getElementById("cousuario");
let contraseña = document.getElementById("contraseña");
let cocontraseña = document.getElementById("cocontraseña");


function register(usuario, cousuario) {
    let enviar = document.getElementById("submit")
    enviar.onclick = () => {
        if (cousuario.value != usuario.value) {
            alert("incorrecto")
        }
        if (cousuario.value == usuario.value) {
            alert("guardado con exito")
        }
    }
}
register(contraseña, cocontraseña)

