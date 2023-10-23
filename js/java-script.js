const productos = [

    { id: 0, nombre: "PlayStation 5", precio: 552.999 },

    { id: 1, nombre: "Dualsense Edge", precio: 67.326 },

    { id: 2, nombre: "Auriculares Pulse 3D", precio: 54.999 },

    { id: 3, nombre: "Playstation VR2", precio: 979.999 }

]
// const productos = {
//     prod1: "- PlayStation 5", precio1: " $552.999",
//     prod2: "- Dualsense Edge", precio2: " $67.326",
//     prod3: "- Auriculares Pulse 3D", precio3: " $54.999",
//     prod4: "- Playstation VR2", precio4: " $979.999",
// }
// const iva = [productos.precio1, productos.precio2, productos.precio3, productos.precio4]
// const mathe = {

//     PrecioConIva: 1.21

// }






let compra1 = document.getElementById("comprar1")
compra1.addEventListener("click", function () {
    let comprado = document.getElementById("ps5")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim1 = document.getElementById("comprar1")
    elim1.remove()
    arr.push(productos[0])
    const json = JSON.stringify(arr)
    const local = localStorage.setItem("arr", json)
})

let compra2 = document.getElementById("comprar2")
compra2.addEventListener("click", function () {
    let comprado = document.getElementById("dual")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim2 = document.getElementById("comprar2")
    elim2.remove()
    arr.push(productos[1])
    const json = JSON.stringify(arr)
    const local = localStorage.setItem("arr", json)
})
let compra3 = document.getElementById("comprar3")
compra3.addEventListener("click", function () {
    let comprado = document.getElementById("auri")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim3 = document.getElementById("comprar3")
    elim3.remove()
    arr.push(productos[2])
    const json = JSON.stringify(arr)
    const local = localStorage.setItem("arr", json)
})
let compra4 = document.getElementById("comprar4")
compra4.addEventListener("click", function () {
    let comprado = document.getElementById("psvr")
    comprado.innerHTML = "Agregado al carrito"
    comprado.className = "agregado"
    let elim4 = document.getElementById("comprar4")
    elim4.remove()
    arr.push(productos[3])
    const json = JSON.stringify(arr)
    const local = localStorage.setItem("arr", json)
})

const arr = []



let btn = document.getElementById("btn")
btn.addEventListener("click", function () {

    let carri = document.getElementById("data")
    const datos = JSON.stringify(localStorage.getItem("arr"))
    carri.innerHTML = datos

})


let btnComprar = document.getElementById("btnComprar")
btnComprar.addEventListener("click", function () {

    Swal.fire({
        title: 'Gracias por su compra!',
        text: 'Hasta luego',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

let btnBorrar = document.getElementById("borrarStorage")
btnBorrar.addEventListener("click", function () {
    localStorage.clear()
    Swal.fire(
        'Carrito borrado con exito',
        '',
        'success'
    )
})

