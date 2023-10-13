const productos = {
    prod1: "- PlayStation 5", precio1: " $552.999",
    prod2: "- Dualsense Edge", precio2: " $67.326",
    prod3: "- Auriculares Pulse 3D", precio3: " $54.999",
    prod4: "- Playstation VR2", precio4: " $979.999",
}
const iva = [productos.precio1, productos.precio2, productos.precio3, productos.precio4]
const mathe = {

    PrecioConIva: 1.21

}





let compra1 = document.getElementById("comprar1")
compra1.addEventListener("click", function () {
    let comprado = document.getElementById("ps5")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim1 = document.getElementById("comprar1")
    elim1.remove()
    arr.push(productos.prod1 + productos.precio1)
})
let compra2 = document.getElementById("comprar2")
compra2.addEventListener("click", function () {
    let comprado = document.getElementById("dual")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim2 = document.getElementById("comprar2")
    elim2.remove()
    arr.push(productos.prod2 + productos.precio2)
})
let compra3 = document.getElementById("comprar3")
compra3.addEventListener("click", function () {
    let comprado = document.getElementById("auri")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim3 = document.getElementById("comprar3")
    elim3.remove()
    arr.push(productos.prod3 + productos.precio3)
})
let compra4 = document.getElementById("comprar4")
compra4.addEventListener("click", function () {
    let comprado = document.getElementById("psvr")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim4 = document.getElementById("comprar4")
    elim4.remove()
    arr.push(productos.prod4 + productos.precio4)
})

const arr = []



let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    let carri = document.getElementById("data")
    carri.innerHTML = arr
    localStorage.setItem("carrito", arr)
})

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function () {
    let carri = document.getElementById("data")
    carri.innerHTML = localStorage.getItem("carrito")
    
})


