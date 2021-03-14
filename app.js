alert("¡Recuerde que su número de alumno es único y puede ser entre 1 y 10!");
let numeroAlumno = prompt("Para conocer su nota final ingrese su número de alumno: ");
let aprobado = "Aprobado";
let desaprobado = "Desaprobado";

function validarNota(numeroAlumno) {
    switch(numeroAlumno){
        case "1":
            return(alert("Su nota es: 4. Usted se encuentra: " + aprobado));
            break;
        case "2":
            return(alert("Su nota es: 2. Usted se encuentra: " + desaprobado));
            break;
        case "3":
            return(alert("Su nota es: 1. Usted se encuentra: " + desaprobado));
            break;
        case "4":
            return(alert("Su nota es: 9. Usted se encuentra: " + aprobado));
            break;
        case "5":
            return(alert("Su nota es: 5. Usted se encuentra: " + aprobado));
            break;
        case "6":
            return(alert("Su nota es: 2. Usted se encuentra: " + desaprobado));
            break;
        case "7":
            return(alert("Su nota es: 10. Usted se encuentra: " + aprobado));
            break;
        case "8":
            return(alert("Su nota es: 1. Usted se encuentra: " + desaprobado));
            break;
        case "9":
            return(alert("Su nota es: 7. Usted se encuentra: " + aprobado));
            break;
        case "10":
            return(alert("Su nota es: 1. Usted se encuentra: " + desaprobado));
            break;
        default:
            return(alert("¡El número ingresado no corresponde a un alumno registrado!"))
    }
    
}
validarNota(numeroAlumno);
