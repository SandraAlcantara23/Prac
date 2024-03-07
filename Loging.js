const formulario = document.getElementById("formularioLogin");
const mensaje=document.getElementById("mensaje");
var input_email = document.getElementById('correo');
var input_pasword = document.getElementById('contraseña');
const usuarios = [{
    usuario : "hola@gmail.com",
    password : "123",
}]
const eventoFormulario = (evt)=>{
    evt.preventDefault();
    let email = input_email.value;
    let password = input_pasword.value;
    let coincidencias = usuarios.filter(
    (usuario)=> usuario.usuario === email);
if(coincidencias.length > 0){
    if(coincidencias[0].password === password){
        window.location = "/home.html"

    }

}else{
    alert("Usuario o contraseña incorrectos");
}
    
}
formulario.addEventListener("submit" , eventoFormulario);