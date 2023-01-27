
var mensaje="";
var imc=0;
var rutaImg="";


var idEmail=document.getElementById("idEmail");
var idNombre=document.getElementById("idNombre");
var idPeso=document.getElementById("idPeso");
var idTalla=document.getElementById("idTalla");


var idCard=document.querySelector("#idCard");
var idImg=document.querySelector("#idImg");
var idCardBody=document.querySelector("#idCardBody");
var idCardTitle=document.querySelector("#idCardTitle");
var idCardText=document.querySelector("#idCardText");
var idCardTitle=document.querySelector("#idCardTitle");


idCard.classList.add("d-none");


function validar(){
    //capturar el valor del input
    if (idEmail.value==""){
        alert("El campo Email no debe estar vacio");
        document.getElementById("idEmail").focus();
        return false;
    }
    if (idNombre.value==""){
        alert("El campo Nombre no debe estar vacio");
        document.getElementById("idNombre").focus();
        return false;
   }
    if (idPeso.value==""){
        alert("El campo Peso no debe estar vacio");
        document.getElementById("idPeso").focus();
        return false;
        }
    if(isNaN(idPeso.value)){
        alert("El campo Peso debe contener un numero");
        idPeso.value="";
        document.getElementById("idPeso").focus();
        return false;
        }
     if(idTalla.value==""){
        alert("El campo Talla no debe estar vacio");
        document.getElementById("idTalla").focus();
        return false;
        }
     if(isNaN(idTalla.value)){
        alert("El campo Talla debe contener un numero");
        idTalla.value="";
        document.getElementById("idTalla").focus();
        return false;
      }
      if(opMasculino.checked == false && opFemenino.checked == false){
        alert("Debe seleccionar un genero");
        return false;
        }else{
        
        calcularImc();
        idCard.classList.remove("d-none");
        CrearDiv();
        desHabilitar();
       
         }
}

btnEnviar.addEventListener("click", function(){
    validar();

    
    

});

btnRefrescar.addEventListener("click", function(){
    idCard.classList.add("d-none");
    idEmail.value="";
    idNombre.value="";
    idPeso.value="";
    idTalla.value="";
    document.getElementById("idEmail").focus();
})

function desHabilitar(){
    idEmail.disabled=true;
    idNombre.disabled=true;
    idPeso.disabled=true;
    idTalla.disabled=true;
    btnEnviar.disabled=true;
}

function Habilitar(){
    idEmail.disabled=false;
    idNombre.disabled=false;
    idPeso.disabled=false;
    idTalla.disabled=false;
    btnEnviar.disabled=false;
}

function calcularImc(){
    imc=idPeso.value/Math.pow(idTalla.value,2);
   
    idCardTitle.innerHTML="IMC: " + imc.toFixed(2);
    

    
    let opFemenino=document.getElementById("opFemenino");
    let opMasculino=document.getElementById("opMasculino");

    
    

    if (opMasculino.checked == true){
        alert("masculino");

        if(imc <=18.5){
            mensaje="Peso Bajo";
            rutaImg="img/PesoBajo.png"
             }else if(imc <=24.9){
             mensaje="Peso Normal";
             rutaImg="img/Peso.png"
              }else if(imc <=29.9){
             mensaje="Sobre Peso"; 
             rutaImg="img/Sobrepeso.png"
              }else if(imc >=30){
             mensaje="Obesidad";
             rutaImg="img/Obesidad.png"
             }
        } else {
            if(imc <=18.5){
                mensaje="Peso Bajo";
                rutaImg="img/pesobajo-mujer.jpg"
                 }else if(imc <=24.9){
                 mensaje="Peso Normal";
                 rutaImg="img/Peso-mujer.jpg"
                  }else if(imc <=29.9){
                 mensaje="Sobre Peso"; 
                 rutaImg="img/sobre-peso-mujer.jpg"
                  }else if(imc >=30){
                 mensaje="Obesidad";
                 rutaImg="img/obesidad-mujer.jpg"
                 }
        }



         
        idCardText.innerHTML=mensaje;
        idImg.src=rutaImg;
}

function CrearDiv(){
   

   let div = document.querySelector("#idResultado");
  
   if(div != null){
       idCardBody.removeChild(div);
   }

   idCardBody.classList.add("d-flex");

   div = document.createElement("div");
   
   div.id ="idResultado";

   div.classList.add("w-75", "text-center", "text-primary", "fs-6");
   div.innerHTML="Su IMC es: " + imc.toFixed(2) +" usted eestá en la categoría de " + mensaje;

     let p = document.createElement("p");
   p.classList.add("fs-6", "text-center", "text-danger");
 
   let pesoMinimo = 20 * Math.pow(idTalla.value, 2);
   let pesoMaximo = 25 * Math.pow(idTalla.value, 2);

   p.innerHTML ="Para su talla, el peso ideal estan comprendido entre: " + pesoMinimo.toFixed(2) + " y " + pesoMaximo.toFixed(2);
   div.appendChild(p);
 
   idCardBody.appendChild(div);
}


btnRefrescar.addEventListener("click", function(){
    
    limpiar();
 
    Habilitar();

  
    idCard.classList.add("d-none");
});

function limpiar(){
    idEmail.value="";
    idNombre.value="";
    idPeso.value="";
    idTalla.value="";
}