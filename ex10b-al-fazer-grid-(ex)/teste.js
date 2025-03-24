document.getElementById('increase-progress').addEventListener('click', function() {
    let progressBar = document.getElementById('progress-bar');
    let width = parseInt(progressBar.style.width);
    
    if (width < 100) {
        width += 20;
        progressBar.style.width = width + "%";
        progressBar.textContent = width + "%";

        if (width === 100) {
            alert("🎉 Parabéns! Você desbloqueou um desconto especial!");
        }
    }
});