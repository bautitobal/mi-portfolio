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
        skills[7].classList.add("comunicacion");
        skills[8].classList.add("trabajo");
        skills[9].classList.add("creatividad");
        skills[10].classList.add("adaptabilidad");
        skills[11].classList.add("resolucion");
        skills[12].classList.add("organizacion");
        skills[13].classList.add("dedicacion");
    }
}


//Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoSkills();
}

// Limitación de solicitudes de contacto
function checkSubmissionLimit() {
    let maxSubmissions = 5; // Número máximo de envíos permitidos
    let submissionTimeFrame = 3600000; // 1 hora en milisegundos
    let lastSubmission = localStorage.getItem('lastSubmission');
    
    if (!lastSubmission) {
        localStorage.setItem('lastSubmission', Date.now());
    } else {
        let currentTime = Date.now();
        let timeSinceLastSubmission = currentTime - parseInt(lastSubmission);
        
        if (timeSinceLastSubmission < submissionTimeFrame) {
            let submissions = parseInt(localStorage.getItem('submissions')) || 0;
            submissions++;
            
            if (submissions > maxSubmissions) {
                alert("Has alcanzado el límite máximo de envíos. Inténtalo más tarde.");
                return false;
            }
            
            localStorage.setItem('submissions', submissions);
        } else {
            localStorage.removeItem('submissions');
            localStorage.setItem('lastSubmission', currentTime);
        }
    }
    
    return true;
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    if (!checkSubmissionLimit()) {
        event.preventDefault(); // Detener el envío del formulario si se supera el límite de envíos
    }
});
