// const boton = document.getElementById("btnPrincipal")
// boton.addEventListener("click", respuesta)
// function respuesta () {
//     alert("Hiciste click");
// }

let pedido = document.getElementById("pedido");
pedido.addEventListener("submit", pedidoCompleto);

function pedidoCompleto (e) {

    
    e.preventDefault();

    let pedido = e.target

    console.log( "sabor :" + pedido.children [0].value);
    console.log("sabor de salsa:" + pedido.children [1].value);
    console.log(pedido.children[2].value)

}



let datos = document.getElementById("formulario");
datos.addEventListener("submit", datosContacto);

function datosContacto(e){

    e.preventDefault();

    let formulario = e.target 
    

    console.log ("Nombre:" + " "+ formulario.children[0].value);
    console.log( "direccion:" + " "+ formulario.children[1].value);
    console.log("Telefono:" + " " +formulario.children[2].value);

}

