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




let compra1 = document.getElementById("comprar1")
compra1.onclick = () => {
    let comprado = document.getElementById("ps5")
    comprado.innerHTML = "Agotado"
    comprado.className = "red"
    alert("El total es " + "$" + productos.precio1 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio1 + "\n" +
        "Gracias por su compra")
}
let compra2 = document.getElementById("comprar2")
compra2.onclick = () => {
    let comprado = document.getElementById("dual")
    comprado.innerHTML = "Agotado"
    comprado.className = "red"
    alert("El total es" + " " + "$" + productos.precio2 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio2 + "\n" +
        "Gracias por su compra")
}
let compra3 = document.getElementById("comprar3")
compra3.onclick = () => {
    let comprado = document.getElementById("auri")
    comprado.innerHTML = "Agotado"
    comprado.className = "red"
    alert("El total es" + " " + "$" + productos.precio3 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio3 + "\n" +
        "Gracias por su compra")
}
let compra4 = document.getElementById("comprar4")
compra4.onclick = () => {
    let comprado = document.getElementById("psvr")
    comprado.innerHTML = "Agotado"
    comprado.className = "red"
    alert("El total es" + " " + "$" + productos.precio4 + " y con IVA " + "$" + mathe.PrecioConIva * productos.precio4 + "\n" +
        "Gracias por su compra")
}

