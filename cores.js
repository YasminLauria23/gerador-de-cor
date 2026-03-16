const preview = document.getElementById('preview');
const codigo = document.getElementById('codigo');
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');

function gerarCor() {
    const cor = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    
    preview.style.backgroundColor = cor;
    codigo.textContent = cor.toUpperCase();
}

function copiarCodigo() {
    navigator.clipboard.writeText(codigo.textContent);
    
    btnCopiar.textContent = 'Copiado! ✓';
    setTimeout(() => {
        btnCopiar.textContent = 'Copiar código';
    }, 2000);
}

btnGerar.addEventListener('click', gerarCor);
btnCopiar.addEventListener('click', copiarCodigo);

gerarCor();

function gerarCor() {
    const cor = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    
    preview.style.backgroundColor = cor;
    codigo.textContent = cor.toUpperCase();
    document.body.style.backgroundColor = cor; 
}
