document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('abrir-aside');
    var informacoes = document.getElementById('informacoes-adicionais');
    var fecharBotao = document.getElementById('fechar-aside');
    var breadcrumb = document.querySelector('.breadcrumb');

    botao.addEventListener('click', function() {
        informacoes.style.display = 'block';

        informacoes.style.position = 'fixed';
        informacoes.style.top = '0';
        informacoes.style.left = '0';
        informacoes.style.width = '100vw';
        informacoes.style.height = '100vh';
        informacoes.style.zIndex = '1000';

        if (breadcrumb) {
            breadcrumb.style.fontSize = '10px';
        }
    });

    fecharBotao.addEventListener('click', function() {
        informacoes.style.display = 'none';

        informacoes.style.position = '';
        informacoes.style.top = '';
        informacoes.style.left = '';
        informacoes.style.width = '';
        informacoes.style.height = '';
        informacoes.style.zIndex = '';

        if (breadcrumb) {
            breadcrumb.style.fontSize = '';
        }
    });
});