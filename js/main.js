function circulo(){
    var selector = document.getElementById("Figura");
    selector.className=" ";
    selector.classList.toggle("circulo");
}

function Arriba(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("arriba");
}

function abajo(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("abajo");
}

function derecha(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("derecha");
}

function izquierda(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("izquierda");
}

function imagen(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("imagen");
}

function triangulo(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("triangulo");
}

function rombo(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("rombo");
}

function rectanguloho(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("rectanguloho");
}

function rectangulove(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("rectangulove");
}

function diagizq(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("diagizq");
}

function diagde(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("diagde");
}

function luna(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("luna");
}

function huevo(){
    var selector = document.getElementById("Figura");
    selector.className=" "; 
    selector.classList.toggle("huevo");
}



function capturarDatos(){
    // capturamos los valores de los campos del formulario en variables, se llaman a traves de sus id con el atributo .value;
    var nombre= document.getElementById("cNombres").value;
    var edad= document.getElementById("cEdad").value;
    var date= document.getElementById("cfecha").value;
    var genero= document.getElementById("cGenero").value;
    var email= document.getElementById("cEmail").value;
    var descripcion= document.getElementById("cDescripcion").value;
    var color= document.getElementById("cColor").value;
    // alert(date +email +descripcion +color) se comprobó mediante la funcion alert que se estan capturando los datos.

    // capturamos los parrafos donde mostraremos la información

    var name = document.getElementById("mNombres");
    var age = document.getElementById("mEdad");
    var fecha= document.getElementById("mFecha");
    var gen = document.getElementById("mGenero");
    var correo  = document.getElementById("mEmail");
    var descrip = document.getElementById("mDescripcion");


    name.textContent = nombre;
    age.textContent = edad;
    fecha.textContent = date;
    gen.textContent = genero;
    correo.textContent = email;
    descrip.textContent = descripcion;

    // capturamos el contenedor del avatar para luego cambiar su color de fondo
    var selector = document.getElementById("card-avatar")

    
    // if (color === "Rojo") { 
    //     selector.style.background = "#B22727"
    // }

    

    // if (color === "Azul"){
    //     selector.style.background = "#2666CF";
    // }
    

    // if (color === "Amarillo") {
    //     selector.style.background = "#F8CB2E"
    // }
    
    
  switch (color) {
      case "Azul":
        selector.style.background = "#2666CF"; break;
        case "Amarillo":
            selector.style.background = "#F8CB2E"; break;
            case "Rojo":
                selector.style.background = "#B22727";
                break;

      
  }
// capturar la imagen del avatar segun su género
  var imgavatar = document.getElementById("foto");

    if (genero === "Masculino") {
    imgavatar.src= "img/hombre.png";
    }
    else if (genero=== "Femenino"){
    imgavatar.src = "img/mujer.png";
    }
    else{
        
        imgavatar.src = "img/monstruo.png";
      
    
    }

   
     
  

    
     
     
        

    
}
