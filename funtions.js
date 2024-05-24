

document.getElementById("name")

let name =document.getElementById("name").value;
let second_name = document.getElementById("second_name").value;
let lastName =document.getElementById("lastName").value;
let  second_lastName = document.getElementById("secondo-lastName").value;

if(name.length < 5 || lastName.length < 5 || ){
Swal.fire({
    title: "numero de datos insuficiente";
    Text: "el valor ingresado debe superar minimo los 5 caracteres";
    icon : "error"
})
}





function enviar(){
    Swal.fire

}

function limpiar(){

}