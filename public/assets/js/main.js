function cadastrar() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var user = {
        nome: nome,
        email: email
    };

    if (validarEmail(email)) {
        var userJSON = JSON.stringify(user);
        console.log(userJSON);
    } else {
        console.log("E-mail inválido.");
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}