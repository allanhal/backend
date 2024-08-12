const { validarEmailSenha } = require('./validations')

describe('validarEmailSenha', () => {
    // Testa se a função retorna true quando o email e a senha têm 3 ou mais caracteres
    test('deve retornar true quando o email e a senha têm 3 ou mais caracteres', () => {
        expect(validarEmailSenha('abc@example.com', '123456')).toBe(true);
    });

    // Testa se a função retorna false quando o email tem menos de 3 caracteres e a senha tem 3 ou mais caracteres
    test('deve retornar false quando o email tem menos de 3 caracteres e a senha tem 3 ou mais caracteres', () => {
        expect(validarEmailSenha('ab', '123456')).toBe(false);
    });

    // Testa se a função retorna false quando o email tem 3 ou mais caracteres e a senha tem menos de 3 caracteres
    test('deve retornar false quando o email tem 3 ou mais caracteres e a senha tem menos de 3 caracteres', () => {
        expect(validarEmailSenha('abc@example.com', '12')).toBe(false);
    });

    // Testa se a função retorna false quando o email e a senha têm menos de 3 caracteres
    test('deve retornar false quando o email e a senha têm menos de 3 caracteres', () => {
        expect(validarEmailSenha('ab', '12')).toBe(false);
    });

    // Testa se a função retorna false quando o email é uma string vazia e a senha tem 3 ou mais caracteres
    test('deve retornar false quando o email é uma string vazia e a senha tem 3 ou mais caracteres', () => {
        expect(validarEmailSenha('', '123456')).toBe(false);
    });

    // Testa se a função retorna false quando o email tem 3 ou mais caracteres e a senha é uma string vazia
    test('deve retornar false quando o email tem 3 ou mais caracteres e a senha é uma string vazia', () => {
        expect(validarEmailSenha('abc@example.com', '')).toBe(false);
    });

    // Testa se a função retorna false quando o email tem 3 ou mais caracteres e a senha é uma string vazia
    test('deve retornar false quando o email tem 3 ou mais caracteres e a senha é uma string vazia', () => {
        expect(validarEmailSenha()).toBe(false);
    });
});