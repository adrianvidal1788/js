// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

let mailUsuario = prompt ( "ingrese su Email" )
let mailValido = false

for (let i = 0; i < mailUsuario.length; i++) {

    if (mailUsuario[i] === "@") {
    if ( mailValido = true) 
        alert("Es un mail válido")     
        break
    } 
        
      
    }        
if ( mailValido === false) {
    alert("Es un email inválido")
}