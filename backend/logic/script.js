// realise un ejercicio de validacion de datos de un usuario

const usuario = 'Carlosfax002';
let contraseña = '12345678';

// condicional 
if (usuario == 'Carlosfax002' && contraseña == '12345678') {
    console.log('Bienvenido al sistema');
}
else if (usuario == 'Carlosfax002' && contraseña != '12345678') {
    console.log('Contraseña incorrecta');
} else if (usuario != 'Carlosfax002' && contraseña == '12345678') {
    console.log('Usuario incorrecto');
} else {
    console.log('Usuario y contraseña incorrectos');
}

