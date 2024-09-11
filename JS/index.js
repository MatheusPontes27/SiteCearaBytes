window.sr = ScrollReveal({reset: true});

sr.reveal('.header', { duration: 1000 });

sr.reveal('.services', { duration: 2000 });

sr.reveal('.testimonials', { duration: 2000 });

sr.reveal('.articles', { duration: 2000 });

sr.reveal('.pricing-section', { duration: 2000 });

sr.reveal('.footer', { duration: 2000 });

function isMobile() {
    return window.innerWidth <= 768; // Ajuste o valor conforme necessário
}

// Inicializa o ScrollReveal apenas em telas maiores que o tamanho máximo
if (!isMobile()) {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.header', { duration: 1000 });
    sr.reveal('.services', { duration: 2000 });
    sr.reveal('.testimonials', { duration: 2000 });
    sr.reveal('.articles', { duration: 2000 });
    sr.reveal('.pricing-section', { duration: 2000 });
    sr.reveal('.footer', { duration: 2000 });
}
