const button = document.getElementById("ctaButton");

// Simula A/B test: define aleatoriamente a variação
const variation = Math.random() < 0.5 ? "A" : "B";

// Aplica o estilo e texto com base na variação
if (variation === "A") {
    button.textContent = "Clique Aqui - Variação A";
    button.style.backgroundColor = "#4CAF50"; // Verde
} else {
    button.textContent = "Clique Aqui - Variação B";
    button.style.backgroundColor = "#008CBA"; // Azul
}

// Contador de cliques da variação (armazenado no localStorage)
button.addEventListener("click", () => {
    const key = `clicks_${variation}`;
    const clicks = Number(localStorage.getItem(key)) || 0;
    localStorage.setItem(key, clicks + 1);
    alert(`Você clicou no botão da variação ${variation}. Total de cliques: ${clicks + 1}`);
});