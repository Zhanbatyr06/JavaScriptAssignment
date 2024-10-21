const toggleButton = document.getElementById('theme-toggle');
let isNightMode = false;

toggleButton.addEventListener('click', () => {
    document.body.style.backgroundColor = isNightMode ? '#fff' : '#121212';
    document.body.style.color = isNightMode ? '#000' : '#fff';

    // Получаем все элементы с классом "card"
    const cards = document.querySelectorAll('.card');

    // Изменяем фон всех карточек
    cards.forEach(card => {
        card.style.backgroundColor = isNightMode ? '#fff' : '#1f1f1f';  
        card.style.color = isNightMode ? '#000' : '#fff';            
    });

    const rows = document.querySelectorAll('.contacts-pizzaries');

    rows.forEach(row => {
        row.style.backgroundColor = isNightMode ? '#fff' : '#1f1f1f';  
        row.style.color = isNightMode ? '#000' : '#fff';           
    });

    toggleButton.textContent = isNightMode ? 'Night Mode' : 'Light Mode';
    isNightMode = !isNightMode;
});
