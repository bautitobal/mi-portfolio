let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez seleccionada una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//Función que aplica animaciones de las skills
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("html");
        skills[1].classList.add("css");
        skills[2].classList.add("javascript");
        skills[3].classList.add("python");
        skills[4].classList.add("nodejs");
        skills[5].classList.add("sqlite");
        skills[6].classList.add("photoshop");
        skills[7].classList.add("sonyvegaspro");
        skills[8].classList.add("flstudio");
        skills[9].classList.add("wordpress");
        skills[10].classList.add("kalilinux");
        skills[11].classList.add("comunicacion");
        skills[12].classList.add("trabajo");
        skills[13].classList.add("creatividad");
        skills[14].classList.add("adaptabilidad");
        skills[15].classList.add("resolucion");
        skills[16].classList.add("organizacion");
        skills[17].classList.add("liderazgo");
        skills[18].classList.add("resiliencia");
        skills[19].classList.add("empatia");
        skills[20].classList.add("orientacion");
        skills[21].classList.add("dedicacion");
        skills[22].classList.add("gestion");
        skills[23].classList.add("persuasion");
        skills[24].classList.add("detallista");
        skills[25].classList.add("comunicaciondigital");
        skills[26].classList.add("autodidaxia");
        skills[27].classList.add("multitasking");
        skills[28].classList.add("colaboracion");
        skills[29].classList.add("pensamiento");
    }
}


//Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoSkills();
}