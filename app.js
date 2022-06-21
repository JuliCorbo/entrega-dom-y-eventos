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

    const sabor1 = pedido.children[0].value;
    const sabor2 = pedido.children[1].value;
    const sabor3 = pedido.children[2].value;
    mostrarPedido(sabor1,sabor2,sabor3)
}
function mostrarPedido(parametro1,parametro2,parametro3){

    let div = document.createElement("div")
    div.innerHTML = `<h3> el helado es de: ${parametro1}</h3>
    <h3> elegiste la salsa: ${parametro2}</h3>
    <h3>el envase es de: ${parametro3}</h3>
    <p> Se le enviara a su direccion </p>`;

    document.body.append(div)

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

let mensaje = document.getElementById("formulario");
mensaje.addEventListener("submit", validarPedido);


function validarPedido (e){

    e.preventDefault();

    let aviso = document.getElementById("h2");
    aviso.innerHTML="<h2> Su pedido esta listo </h2>"
}