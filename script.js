document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    // Ação para o botão "Sim"
    yesButton.addEventListener('click', () => {
        // Exibir uma mensagem ao clicar em "Sim"
        alert('Que ótimo! Estou ansiosa para você vir! ❤️');
        // Aqui você pode adicionar mais ações, como redirecionar para outra página ou mostrar uma mensagem personalizada.
    });

    // Ação para o botão "Não"
    noButton.addEventListener('click', () => {
        // Fazer o botão "Não" fugir
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
    });
});