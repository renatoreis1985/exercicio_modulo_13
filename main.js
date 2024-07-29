const ativadorToast = document.getElementById('btn-notificacoes');
const mensagem = document.getElementById('mensagens')

if (ativadorToast) {
    ativadorToast.addEventListener('click', function() {
        const toast = new bootstrap.Toast(mensagem);
        toast.show();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal');
    setTimeout(function() {
        modalExemplo.show();
    }, 1000);
})

document.addEventListener('DOMContentLoaded', () => {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 10) {
            value = value.slice(0, 11); 
        }        
        if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        e.target.value = value;
        }
    });
});
