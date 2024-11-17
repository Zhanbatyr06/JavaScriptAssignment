const pizzaBase = document.getElementById('pizza-base');
const ingredients = document.querySelectorAll('.ingredient');

// Allow drop on the pizza base
pizzaBase.addEventListener('dragover', (e) => {
    e.preventDefault();
});

pizzaBase.addEventListener('drop', (e) => {
    e.preventDefault();
    const ingredientId = e.dataTransfer.getData('text/plain');
    const ingredient = document.querySelector(`[data-ingredient="${ingredientId}"]`);

    // Clone the ingredient to add it to the pizza base
    const clonedIngredient = ingredient.cloneNode(true);
    clonedIngredient.style.position = 'absolute';
    clonedIngredient.style.left = `${e.offsetX - 50}px`; // Adjust position
    clonedIngredient.style.top = `${e.offsetY - 50}px`;
    pizzaBase.appendChild(clonedIngredient);
});

// Enable drag and drop for each ingredient
ingredients.forEach((ingredient) => {
    ingredient.addEventListener('dragstart', (e) => {
        ingredient.classList.add('dragging');
        e.dataTransfer.setData('text/plain', ingredient.getAttribute('data-ingredient'));
    });

    ingredient.addEventListener('dragend', () => {
        ingredient.classList.remove('dragging');
    });
});
