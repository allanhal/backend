function validarEmailSenha(email, password) {
    return !(email === undefined && password === undefined
    )
}
module.exports = {
    validarEmailSenha
}