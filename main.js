document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tractor-form');
    const hectaresInput = document.getElementById('hectares');
    const displayHectares = document.getElementById('display-hectares');

    // Atualiza o título dinamicamente ao enviar o formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const valorHectares = hectaresInput.value.trim();

        if (valorHectares && valorHectares > 0) {
            displayHectares.textContent = valorHectares;
            
            // Rola suavemente até a seção de resultados
            document.querySelector('.results-section').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            alert('Por favor, informe uma quantidade válida de hectares.');
        }
    });

    // Interatividade simples nos botões de detalhes
    const buttons = document.querySelectorAll('.btn-details');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.tractor-card');
            const model = card.querySelector('.model-title').textContent;
            alert(`Mais detalhes sobre o trator ${model} serão exibidos aqui!`);
        });
    });
});
