let menu = prompt("Que desea hacer?\n1- Crear cuenta\n2- Ver productos\n3- Ingresar a la pagina")

while (menu > "3") {
    if (menu > "3") {
        alert("Numero del 1 al 3")
    }
    menu = prompt("Que desea hacer?\n1- Crear cuenta\n2- Ver productos\n3- Ingresar a la pagina")
}
while (menu < "1") {
    if (menu < "1") {
        alert("Numero del 1 al 3")
    }
    menu = prompt("Que desea hacer?\n1- Crear cuenta\n2- Ver productos\n3- Ingresar a la pagina")
}


if (menu == "1") {
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
}


const productos = {
    prod1: "1- PlayStation 5", precio1: "552.999",
    prod2: "2- Dualshock", precio2: "67.326",
    prod3: "3- Auriculares", precio3: "54.999",
    prod4: "4- VR", precio4: "979.999",
}
const iva = [productos.precio1, productos.precio2, productos.precio3, productos.precio4]
const mathe = {

    PrecioConIva: 1.21

}


if (menu == "2") {


    const producto = ["1- PlayStation 5", "2- Dualshock", "3- Auriculares", "4- VR"];

    alert(producto.join(" \n "))
    const produc = prompt("Escriba el numero del producto para comprar")

    if (produc == "1") {
        alert(producto.splice(0, 1))
        const siono = prompt("¿Desea comprar este producto" + "\n" +
            "si o no")
        if (siono == "si") {
            alert("El total es" + " " + "$" + productos.precio1 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio1 + "\n" +
                "Gracias por su compra")
        }
        if (siono == "no") {
            alert("Saliendo del menu de compras")
        }

    }
    if (produc == "2") {
        alert(producto.splice(1, 1))
        const siono = prompt("¿Desea comprar este producto" + "\n" +
            "si o no")
        if (siono == "si") {
            alert("El total es" + " " + "$" + productos.precio2 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio2 + "\n" +
                "Gracias por su compra")
        }
        if (siono == "no") {
            alert("Saliendo del menu de compras")
        }

    }
    if (produc == "3") {
        alert(producto.splice(2, 1))
        const siono = prompt("¿Desea comprar este producto" + "\n" +
            "si o no")
        if (siono == "si") {
            alert("El total es" + " " + "$" + productos.precio3 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio3 + "\n" +
                "Gracias por su compra")
        }
        if (siono == "no") {
            alert("Saliendo del menu de compras")
        }

    }
    if (produc == "4") {
        alert(producto.splice(3, 1))
        const siono = prompt("¿Desea comprar este producto" + "\n" +
            "Si o No")
        if (siono == "si") {
            alert("El total es" + " " + "$" + productos.precio4 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio4 + "\n" +
                "Gracias por su compra")
        }
        if (siono == "no") {
            alert("Saliendo del menu de compras")
        }

    }

    if (prod != "1") {
        alert("Bienvenido!!")
    }

}

if (menu == "3") {
    alert("Bienvenido!!")
}


