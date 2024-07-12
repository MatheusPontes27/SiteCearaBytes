

document.addEventListener('DOMContentLoaded', function() {
    const servicosLink = document.getElementById('servicos-link');
    const servicosSection = document.getElementById('servicos');

    servicosLink.addEventListener('click', function(event) {
        event.preventDefault();
        servicosSection.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const servicosLink = document.getElementById('sobre nós-link');
    const servicosSection = document.getElementById('sobre');

    servicosLink.addEventListener('click', function(event) {
        event.preventDefault();
        servicosSection.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const servicosLink = document.getElementById('contato-link');
    const servicosSection = document.getElementById('contato');

    servicosLink.addEventListener('click', function(event) {
        event.preventDefault();
        servicosSection.classList.toggle('hidden');
    });
});

function copiarEmail() {
    // Seleciona o elemento de email
    var emailLink = document.getElementById("email-link");

    // Cria um elemento de texto temporário
    var tempInput = document.createElement("input");
    tempInput.value = emailLink.textContent;
    document.body.appendChild(tempInput);

    // Seleciona e copia o conteúdo do elemento de texto temporário
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento de texto temporário
    document.body.removeChild(tempInput);

    // Abre o cliente de email padrão com o email preenchido
    window.location.href = "mailto:" + emailLink.textContent;
}