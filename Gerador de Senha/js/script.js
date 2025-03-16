function generatePassword() {
    const lenght = 12;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%¨&*()_+:.,`{``';

    let password = '';
    for (let i = 0; i < lenght; i++) {
        const randdomIndex = Math.floor(Math.random() * charset.length);
        password += charset [randdomIndex];
    }

    document.getElementById('password').value = password;
}